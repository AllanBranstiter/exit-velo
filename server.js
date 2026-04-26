import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import nunjucks from "nunjucks";
import { registerAll } from "./lib/filters.js";
import { loadArticles, getArticle, getAllArticles, getFeaturedArticles, watchArticles, getArticlesByCategory, slugToCategory, categoryToSlug, CATEGORIES, CATEGORY_LABELS, getRelated } from "./lib/articles.js";
import { getStandings, getRedsNews } from "./lib/mlb-data.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "src");
const articlesDir = join(srcDir, "articles");

// --- Nunjucks ---
const njkEnv = nunjucks.configure(
  [join(srcDir, "_includes"), srcDir],
  { autoescape: true, noCache: process.env.NODE_ENV !== "production" }
);
registerAll(njkEnv);
njkEnv.addGlobal("allCategories", CATEGORIES);
njkEnv.addGlobal("categoryLabels", CATEGORY_LABELS);

// --- Articles ---
loadArticles(articlesDir);
if (process.env.NODE_ENV !== "production") {
  watchArticles(articlesDir);
}

// --- MIME types ---
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml":  "application/xml; charset=utf-8",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico":  "image/x-icon",
  ".txt":  "text/plain; charset=utf-8",
};

// Cache-Control policies by content type
const CACHE_POLICY = {
  immutable: "public, max-age=31536000, immutable", // images, css, js
  page:      "public, max-age=300",                  // HTML pages
  feed:      "public, max-age=3600",                 // RSS, sitemap
  none:      "no-store",
};

function cacheForExt(ext) {
  if ([".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico", ".css", ".js"].includes(ext)) return CACHE_POLICY.immutable;
  if ([".xml"].includes(ext)) return CACHE_POLICY.feed;
  return CACHE_POLICY.none;
}

function etag(buf) {
  return `"${createHash("sha1").update(buf).digest("hex").slice(0, 16)}"`;
}

function send(res, status, contentType, body, cacheControl = CACHE_POLICY.page, req = null) {
  const buf = Buffer.isBuffer(body) ? body : Buffer.from(body);
  const tag = etag(buf);

  if (req && req.headers["if-none-match"] === tag) {
    res.writeHead(304);
    res.end();
    return;
  }

  const headers = {
    "Content-Type": contentType,
    "Cache-Control": cacheControl,
    "ETag": tag,
  };

  const acceptsGzip = req && /gzip/.test(req.headers["accept-encoding"] || "");
  const isCompressible = contentType.startsWith("text/") || contentType.startsWith("application/") || contentType === "image/svg+xml";
  if (acceptsGzip && isCompressible) {
    const compressed = gzipSync(buf);
    headers["Content-Encoding"] = "gzip";
    headers["Vary"] = "Accept-Encoding";
    res.writeHead(status, headers);
    res.end(compressed);
  } else {
    res.writeHead(status, headers);
    res.end(buf);
  }
}

function send404(res, req) {
  const html = readFileSync(join(srcDir, "404.html"), "utf-8");
  send(res, 404, "text/html; charset=utf-8", html, CACHE_POLICY.none, req);
}

// Try to serve a static file from srcDir
function tryStatic(urlPath, res, req) {
  const filePath = join(srcDir, urlPath);
  if (!filePath.startsWith(srcDir)) return false; // prevent path traversal
  if (!existsSync(filePath)) return false;

  try {
    const ext = extname(filePath);
    const mime = MIME[ext] || "application/octet-stream";
    const data = readFileSync(filePath);
    send(res, 200, mime, data, cacheForExt(ext), req);
    return true;
  } catch {
    return false;
  }
}

// --- Server ---
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // Homepage
  if (path === "/" || path === "/index.html") {
    const [standings, redsNews] = await Promise.all([getStandings(), getRedsNews()]);
    const html = njkEnv.render("index.njk", {
      title: "",
      description: "Cincinnati Reds baseball by the numbers.",
      url: "/",
      articles: getAllArticles(),
      featuredArticles: getFeaturedArticles(),
      standings,
      redsNews,
    });
    return send(res, 200, "text/html; charset=utf-8", html, CACHE_POLICY.page, req);
  }

  // Articles
  const articleMatch = path.match(/^\/articles\/(.+\.html)$/);
  if (articleMatch) {
    const article = getArticle(path);
    if (!article) return send404(res, req);

    const html = njkEnv.render("article.njk", {
      ...article.frontmatter,
      content: article.html,
      url: article.url,
      related: getRelated(article, 3),
      categorySlug: article.frontmatter.category ? categoryToSlug(article.frontmatter.category) : null,
    });
    return send(res, 200, "text/html; charset=utf-8", html, CACHE_POLICY.page, req);
  }

  // About
  if (path === "/about.html") {
    const html = njkEnv.render("about.njk", {
      title: "About",
      description: "Exit Velo is a Cincinnati Reds analytics blog for fans who want to understand what the numbers actually say about their team, explained through player stories without the jargon.",
      url: "/about.html",
    });
    return send(res, 200, "text/html; charset=utf-8", html, CACHE_POLICY.page, req);
  }

  // Category pages
  const categoryMatch = path.match(/^\/category\/([^/]+)\/?$/);
  if (categoryMatch) {
    const category = slugToCategory(categoryMatch[1]);
    if (!category) return send404(res, req);
    const categoryArticles = getArticlesByCategory(category);
    const html = njkEnv.render("category.njk", {
      title: category,
      description: `${category} articles — Cincinnati Reds baseball by the numbers.`,
      url: `/category/${categoryToSlug(category)}`,
      category,
      categorySlug: categoryToSlug(category),
      articles: categoryArticles,
    });
    return send(res, 200, "text/html; charset=utf-8", html, CACHE_POLICY.page, req);
  }

  // Team stats
  if (path === "/team-stats-2025.html") {
    const html = njkEnv.render("team-stats-2025.njk", {
      title: "2025 MLB Team Batted Ball Stats",
      description: "Team-level averages for exit velocity, launch angle, EV90, bat speed, and BABIP across all 30 MLB teams in 2025, sorted by win percentage.",
      url: "/team-stats-2025.html",
    });
    return send(res, 200, "text/html; charset=utf-8", html, CACHE_POLICY.page, req);
  }

  // RSS feed
  if (path === "/feed.xml") {
    const xml = njkEnv.render("feed.njk", { articles: getAllArticles() });
    return send(res, 200, "application/rss+xml; charset=utf-8", xml, CACHE_POLICY.feed, req);
  }

  // Sitemap
  if (path === "/sitemap.xml") {
    const xml = njkEnv.render("sitemap.njk", {
      articles: getAllArticles(),
      categories: CATEGORIES,
      categoryToSlug,
    });
    return send(res, 200, "application/xml; charset=utf-8", xml, CACHE_POLICY.feed, req);
  }

  // Robots
  if (path === "/robots.txt") {
    const txt = readFileSync(join(srcDir, "robots.txt"), "utf-8");
    return send(res, 200, "text/plain; charset=utf-8", txt, CACHE_POLICY.feed, req);
  }

  // Static files (css, js, images, data, heat-check)
  if (tryStatic(path.slice(1), res, req)) return;

  // 404
  send404(res, req);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Exit Velo running at http://localhost:${port}`);
});
