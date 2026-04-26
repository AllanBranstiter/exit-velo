import { readFileSync, readdirSync, watch } from "node:fs";
import { join } from "node:path";
import { parseArticle } from "./markdown.js";

const isProduction = process.env.NODE_ENV === "production";

export const CATEGORIES = [
  "Player Profile",
  "Fantasy Baseball",
  "Farm System",
  "Stat Explainer",
  "Team Analysis",
  "Rankings",
];

export const CATEGORY_LABELS = {
  "Player Profile":  "Players",
  "Fantasy Baseball": "Fantasy",
  "Farm System":     "Farm",
  "Stat Explainer":  "Explainers",
  "Team Analysis":   "Team",
  "Rankings":        "Rankings",
};

export function categoryToSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug) {
  return CATEGORIES.find((c) => categoryToSlug(c) === slug) || null;
}

let articlesByPermalink = new Map();
let articlesSorted = [];

export function loadArticles(articlesDir) {
  const map = new Map();
  const files = readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = readFileSync(join(articlesDir, file), "utf-8");
    const { frontmatter, html } = parseArticle(raw);

    const url = frontmatter.permalink || `/articles/${file.replace(/\.md$/, ".html")}`;
    map.set(url, { frontmatter, html, url });
  }

  articlesByPermalink = map;

  articlesSorted = [...map.values()]
    .filter((a) => {
      if (!isProduction) return true;
      if (a.frontmatter.draft) return false;
      if (a.frontmatter.date && new Date(a.frontmatter.date) > new Date()) return false;
      return true;
    })
    .sort((a, b) => {
      const da = new Date(a.frontmatter.date);
      const db = new Date(b.frontmatter.date);
      const validA = !isNaN(da);
      const validB = !isNaN(db);
      if (!validA && !validB) return 0;
      if (!validA) return 1;
      if (!validB) return -1;
      return db - da;
    });
}

export function getArticle(permalink) {
  const article = articlesByPermalink.get(permalink);
  if (!article) return null;
  if (isProduction && article.frontmatter.draft) return null;
  if (isProduction && article.frontmatter.date && new Date(article.frontmatter.date) > new Date()) return null;
  return article;
}

export function getAllArticles() {
  return articlesSorted;
}

export function getArticlesByCategory(category) {
  return articlesSorted.filter(
    (a) => a.frontmatter.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getRelated(article, n = 3) {
  const fm = article.frontmatter;
  const keywords = new Set((fm.keywords || []).map((k) => k.toLowerCase()));

  return articlesSorted
    .filter((a) => a.url !== article.url)
    .map((a) => {
      let score = 0;
      if (a.frontmatter.category === fm.category) score += 2;
      if (a.frontmatter.level === fm.level) score += 1;
      for (const k of (a.frontmatter.keywords || [])) {
        if (keywords.has(k.toLowerCase())) score += 1;
      }
      return { article: a, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(({ article: a }) => a);
}

export function getFeaturedArticles() {
  return articlesSorted.filter((a) => a.frontmatter.image || a.frontmatter.article_image);
}

export function watchArticles(articlesDir) {
  let debounceTimer;
  watch(articlesDir, () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      try {
        loadArticles(articlesDir);
      } catch (err) {
        console.error("Error reloading articles:", err.message);
      }
    }, 150);
  });
}
