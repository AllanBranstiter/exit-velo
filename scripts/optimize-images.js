#!/usr/bin/env node
/**
 * Image optimization script for Exit Velo.
 *
 * What it does:
 *   1. Resizes hero images to 1600px wide (srcset 2x) and 800px wide (srcset 1x)
 *   2. Converts all PNGs/JPGs to WebP using cwebp (if available)
 *
 * Requirements:
 *   - macOS sips (built-in) for resizing
 *   - cwebp for WebP conversion: brew install webp
 *
 * Usage:
 *   node scripts/optimize-images.js
 */

import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { execSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "../src/images");
const EXTS = new Set([".png", ".jpg", ".jpeg"]);

// Check for cwebp
const hasCwebp = spawnSync("which", ["cwebp"], { encoding: "utf-8" }).status === 0;
if (!hasCwebp) {
  console.warn("⚠  cwebp not found — skipping WebP conversion. Install with: brew install webp");
}

// Check for sips (macOS only)
const hasSips = spawnSync("which", ["sips"], { encoding: "utf-8" }).status === 0;
if (!hasSips) {
  console.warn("⚠  sips not found — skipping resize (macOS only). WebP conversion will still run if cwebp is available.");
}

const files = readdirSync(imagesDir).filter((f) => EXTS.has(extname(f).toLowerCase()));
console.log(`Found ${files.length} images to process.\n`);

for (const file of files) {
  const src = join(imagesDir, file);
  const ext = extname(file).toLowerCase();
  const name = basename(file, ext);

  // 1. Resize: hero images get 1600px wide (2x), all images get 800px wide (1x card)
  if (hasSips) {
    const isHero = file.includes("-hero") || file.includes("og-");
    const sizes = isHero ? [1600, 800] : [800];

    for (const width of sizes) {
      const suffix = width === 1600 ? "@2x" : "";
      const resizedName = `${name}${suffix}${ext}`;
      const resizedPath = join(imagesDir, resizedName);

      if (resizedName === file) continue;

      const info = spawnSync("sips", ["-g", "pixelWidth", src], { encoding: "utf-8" });
      const match = info.stdout.match(/pixelWidth:\s*(\d+)/);
      const originalWidth = match ? parseInt(match[1], 10) : 0;

      if (originalWidth === 0) {
        console.warn(`  warn: could not read width of ${file}, skipping resize`);
        continue;
      }

      if (originalWidth <= width) {
        console.log(`  skip resize: ${file} (${originalWidth}px <= ${width}px target)`);
        continue;
      }

      console.log(`  resize ${file} → ${resizedName} (${width}px wide)`);
      try {
        execSync(`sips --resampleWidth ${width} "${src}" --out "${resizedPath}"`, { stdio: "pipe" });
      } catch (err) {
        console.error(`  error resizing ${file}: ${err.message}`);
      }
    }
  }

  // 2. WebP conversion
  if (hasCwebp) {
    const webpPath = join(imagesDir, `${name}.webp`);
    console.log(`  webp  ${file} → ${name}.webp`);
    try {
      execSync(`cwebp -q 82 "${src}" -o "${webpPath}"`, { stdio: "pipe" });
    } catch (err) {
      console.error(`  error converting ${file} to WebP: ${err.message}`);
    }
  }
}

console.log("\nDone.");
