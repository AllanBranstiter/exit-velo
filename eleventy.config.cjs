module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/data");
  eleventyConfig.addPassthroughCopy("src/images");

  // Date formatting filters
  eleventyConfig.addFilter("dateDisplay", (date) => {
    return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  });
  eleventyConfig.addFilter("dateYearMonth", (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });
  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("dateRfc822", (date) => {
    return new Date(date).toUTCString().replace("GMT", "+0000");
  });

  // Glossary term shortcode: {% term "exit velocity" %}exit velocity{% endterm %}
  eleventyConfig.addPairedShortcode("term", (content, key) => {
    return `<span class="term" data-term="${key}">${content}</span>`;
  });

  // Articles collection sorted by date descending — excludes drafts in production
  const isProduction = process.env.NODE_ENV === "production";
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByGlob("src/articles/*.md")
      .filter(item => isProduction ? !item.data.draft : true)
      .reverse()
  );

  // Prevent draft article pages from being built in production
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (isProduction && data.draft) return false;
      return data.permalink;
    }
  });

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
  };
};
