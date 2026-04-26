#!/usr/bin/env node
/**
 * Image optimization script for Exit Velo.
 *
 * What it does:
 *   1. Converts all PNGs/JPGs to WebP using cwebp (if available)
 *   2. Deletes @2x images and .ai source files older than 10 days
 */

import { readdirSync, statSync, rmSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { execSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "../src/images");
const EXTS = new Set([".png", ".jpg", ".jpeg"]);
const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

// Check for cwebp
const hasCwebp = spawnSync("which", ["cwebp"], { encoding: "utf-8" }).status === 0;
if (!hasCwebp) {
  console.warn("⚠  cwebp not found — skipping WebP conversion. Install with: brew install webp");
}

// --- Cleanup: delete @2x images and .ai source files older than 10 days ---
const allFiles = readdirSync(imagesDir);
const now = Date.now();
let cleaned = 0;
for (const file of allFiles) {
  const isStale = /@2x\.|\.ai$/.test(file);
  if (!isStale) continue;
  const filePath = join(imagesDir, file);
  const age = now - statSync(filePath).mtimeMs;
  if (age > TEN_DAYS_MS) {
    console.log(`  cleanup: deleting ${file} (${Math.floor(age / 86400000)}d old)`);
    rmSync(filePath);
    cleaned++;
  }
}
if (cleaned > 0) console.log(`  removed ${cleaned} stale file(s)\n`);

// --- WebP conversion ---
const files = readdirSync(imagesDir).filter((f) => EXTS.has(extname(f).toLowerCase()));
console.log(`Found ${files.length} images to process.\n`);

for (const file of files) {
  const src = join(imagesDir, file);
  const name = basename(file, extname(file));

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
