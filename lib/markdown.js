import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

// Future-proof: convert {% term "key" %}text{% endterm %} to <span> if used in articles
function preprocessTermShortcode(content) {
  return content.replace(
    /\{%\s*term\s+"([^"]+)"\s*%\}([\s\S]*?)\{%\s*endterm\s*%\}/g,
    '<span class="term" data-term="$1">$2</span>'
  );
}

export function parseArticle(raw) {
  const { data, content } = matter(raw);
  const preprocessed = preprocessTermShortcode(content);
  const html = md.render(preprocessed);
  return { frontmatter: data, html };
}
