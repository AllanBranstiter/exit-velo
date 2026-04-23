import { readFileSync, readdirSync, watch } from "node:fs";
import { join } from "node:path";
import { parseArticle } from "./markdown.js";

const isProduction = process.env.NODE_ENV === "production";

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
    .filter((a) => (isProduction ? !a.frontmatter.draft : true))
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getArticle(permalink) {
  const article = articlesByPermalink.get(permalink);
  if (!article) return null;
  if (isProduction && article.frontmatter.draft) return null;
  return article;
}

export function getAllArticles() {
  return articlesSorted;
}

export function getFeaturedArticles() {
  return articlesSorted.filter((a) => a.frontmatter.image || a.frontmatter.article_image);
}

export function watchArticles(articlesDir) {
  watch(articlesDir, () => {
    try {
      loadArticles(articlesDir);
    } catch (err) {
      console.error("Error reloading articles:", err.message);
    }
  });
}
