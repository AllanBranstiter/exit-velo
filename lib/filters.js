// Nunjucks filters ported from eleventy.config.cjs

export function dateDisplay(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function dateYearMonth(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function dateIso(date) {
  return new Date(date).toISOString().split("T")[0];
}

export function dateRfc822(date) {
  return new Date(date).toUTCString().replace("GMT", "+0000");
}

export function json(value) {
  return JSON.stringify(value);
}

export function categorySlug(name) {
  if (!name) return "";
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function webpName(filename) {
  if (!filename) return filename;
  return filename.replace(/\.(png|jpe?g)$/i, ".webp");
}

export function registerAll(env) {
  env.addFilter("dateDisplay", dateDisplay);
  env.addFilter("dateYearMonth", dateYearMonth);
  env.addFilter("dateIso", dateIso);
  env.addFilter("dateRfc822", dateRfc822);
  env.addFilter("json", json);
  env.addFilter("categorySlug", categorySlug);
  env.addFilter("webpName", webpName);
}
