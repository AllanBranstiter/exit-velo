import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import nunjucks from "nunjucks";
import { registerAll } from "./lib/filters.js";
import { loadArticles, getArticle, getAllArticles, watchArticles } from "./lib/articles.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "src");
const articlesDir = join(srcDir, "articles");

// --- Nunjucks ---
const njkEnv = nunjucks.configure(
  [join(srcDir, "_includes"), srcDir],
  { autoescape: false, noCache: process.env.NODE_ENV !== "production" }
);
registerAll(njkEnv);

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

function send(res, status, contentType, body) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

function send404(res) {
  const html = readFileSync(join(srcDir, "404.html"), "utf-8");
  send(res, 404, "text/html; charset=utf-8", html);
}

// Try to serve a static file from srcDir
function tryStatic(urlPath, res) {
  const filePath = join(srcDir, urlPath);
  if (!filePath.startsWith(srcDir)) return false; // prevent path traversal
  if (!existsSync(filePath)) return false;

  try {
    const ext = extname(filePath);
    const mime = MIME[ext] || "application/octet-stream";
    const data = readFileSync(filePath);
    send(res, 200, mime, data);
    return true;
  } catch {
    return false;
  }
}

// --- Server ---
const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // Homepage
  if (path === "/" || path === "/index.html") {
    const html = njkEnv.render("index.njk", {
      title: "",
      description: "Cincinnati Reds baseball by the numbers.",
      url: "/",
      articles: getAllArticles(),
    });
    return send(res, 200, "text/html; charset=utf-8", html);
  }

  // Articles
  const articleMatch = path.match(/^\/articles\/(.+\.html)$/);
  if (articleMatch) {
    const article = getArticle(path);
    if (!article) return send404(res);

    const html = njkEnv.render("article.njk", {
      ...article.frontmatter,
      content: article.html,
      url: article.url,
    });
    return send(res, 200, "text/html; charset=utf-8", html);
  }

  // About
  if (path === "/about.html") {
    const html = njkEnv.render("about.njk", {
      title: "About",
      description: "Exit Velo is a Cincinnati Reds analytics blog for fans who want to understand what the numbers actually say about their team, explained through player stories without the jargon.",
      url: "/about.html",
    });
    return send(res, 200, "text/html; charset=utf-8", html);
  }

  // Team stats
  if (path === "/team-stats-2025.html") {
    const html = njkEnv.render("team-stats-2025.njk", {
      title: "2025 MLB Team Batted Ball Stats",
      description: "Team-level averages for exit velocity, launch angle, EV90, bat speed, and BABIP across all 30 MLB teams in 2025, sorted by win percentage.",
      url: "/team-stats-2025.html",
    });
    return send(res, 200, "text/html; charset=utf-8", html);
  }

  // RSS feed
  if (path === "/feed.xml") {
    const xml = njkEnv.render("feed.njk", { articles: getAllArticles() });
    return send(res, 200, "application/rss+xml; charset=utf-8", xml);
  }

  // Sitemap
  if (path === "/sitemap.xml") {
    const xml = njkEnv.render("sitemap.njk", { articles: getAllArticles() });
    return send(res, 200, "application/xml; charset=utf-8", xml);
  }

  // Robots
  if (path === "/robots.txt") {
    const txt = readFileSync(join(srcDir, "robots.txt"), "utf-8");
    return send(res, 200, "text/plain; charset=utf-8", txt);
  }

  // Static files (css, js, images, data, heat-check)
  if (tryStatic(path.slice(1), res)) return;

  // 404
  send404(res);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Exit Velo running at http://localhost:${port}`);
});
