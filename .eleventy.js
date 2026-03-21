module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/data");

  // Date formatting filters
  eleventyConfig.addFilter("dateDisplay", (date) => {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  });
  eleventyConfig.addFilter("dateYearMonth", (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });

  // Glossary term shortcode: {% term "exit velocity" %}exit velocity{% endterm %}
  eleventyConfig.addPairedShortcode("term", (content, key) => {
    return `<span class="term" data-term="${key}">${content}</span>`;
  });

  // Articles collection sorted by date descending
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByGlob("src/articles/*.md").reverse()
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
  };
};
