# Exit Velo — AI Context

**Read this first.** This document orients an AI assistant to the Exit Velo project. It covers the publication, the tech stack, every file in the project, how articles are structured, and the Claude Code skills available for this project.

---

## What Is Exit Velo

Exit Velo is a baseball analytics publication at **https://exitvelo.us** targeting readers who are new to baseball or fantasy baseball and want to understand what advanced stats actually mean. Articles explain Statcast data, sabermetrics, and draft strategy through player stories — without jargon (or with jargon immediately defined).

- **Voice:** E.B. White clarity + Gladwell storytelling. Authoritative but warm. Observational, not academic.
- **Audience:** Beginners to intermediate fans. Assumes basic traditional stats knowledge; introduces advanced stats through narrative.
- **Author:** Allan Branstiter
- **Deployed on:** Netlify (auto-deploy from GitHub)

### Writing Style Rules
- Do NOT use the "dramatic buildup colon" pattern: *"The Barrel Rate is real: 12.0%"* — state numbers directly: *"His Barrel Rate is 12.0%"*
- No jargon without immediate definition
- Player stories first, statistics second

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Static site generator | [Eleventy](https://www.11ty.dev/) 3.0 |
| Templating | Nunjucks (.njk) |
| Content | Markdown with YAML frontmatter |
| Styling | Plain CSS (single file) |
| Build output | `_site/` |
| Deployment | Netlify — `npm run build` → `eleventy` |
| Dev server | `npm run dev` → `eleventy --serve` |

**No frameworks, no JavaScript bundler, no CMS.** The entire site is static HTML generated at build time.

---

## Project Structure

```
exit-velo/
├── AI_Context.md               ← you are here
├── eleventy.config.cjs         ← build config: collections, filters, shortcodes
├── package.json                ← deps: @11ty/eleventy only; eslint + stylelint as devDeps
├── netlify.toml                ← build command, publish dir, 404 redirect
├── src/
│   ├── index.njk               ← home page (article card list)
│   ├── about.md                ← about page
│   ├── feed.njk                ← RSS/Atom feed
│   ├── sitemap.njk             ← XML sitemap
│   ├── robots.njk              ← robots.txt
│   ├── 404.html                ← error page
│   ├── _includes/
│   │   ├── base.njk            ← global HTML shell: <head>, nav, footer, OG/Twitter meta, Schema.org WebSite
│   │   └── article.njk         ← article page layout: header, body, glossary hint, Schema.org Article
│   ├── articles/               ← one .md file per article (see Article Inventory below)
│   ├── css/
│   │   └── style.css           ← all styles; ~10KB; BEM-ish class naming
│   ├── js/
│   │   └── glossary.js         ← client-side: on click, fetches term def from glossary.json, shows tooltip
│   ├── data/
│   │   └── glossary.json       ← baseball term definitions keyed by slug (60KB)
│   └── images/
│       ├── favicon.svg
│       ├── og-default.png      ← fallback OG image for pages without a custom image
│       ├── og-default.svg
│       ├── og-default.ai
│       ├── Headshots/          ← player headshot images
│       └── [article images]    ← named velo-*.png, skenes-*.png, webb-*.png, etc.
└── _site/                      ← generated output; do not edit directly
```

---

## Eleventy Configuration (`eleventy.config.cjs`)

### Collections
- **`articles`** — all `src/articles/*.md` files, sorted newest-first. In production (`NODE_ENV=production`), articles with `draft: true` are excluded from the collection and their pages are not built.

### Filters
| Filter | Output | Example |
|--------|--------|---------|
| `dateDisplay` | `March 19, 2026` | article card dates |
| `dateYearMonth` | `2026-03` | `<time datetime>` attribute |
| `dateIso` | `2026-03-19` | Schema.org dates |
| `dateRfc822` | RFC 822 string | RSS feed |
| `json` | `JSON.stringify(value)` | Schema.org JSON-LD blocks |

### Shortcodes
- **`{% term "key" %}display text{% endterm %}`** — wraps text in `<span class="term" data-term="key">`. The glossary.js script intercepts clicks and shows a definition tooltip. Key must match a key in `glossary.json`.

---

## Templates

### `src/_includes/base.njk` — Global Shell
Applied to every page. Contains:
- `<head>`: charset, viewport, title (`{{ title }} — Exit Velo`), meta description, canonical URL, Open Graph tags, Twitter Card tags, CSS/favicon/RSS links, Schema.org WebSite JSON-LD
- **Nav:** logo link (`<a href="/" class="nav__logo">Exit<span>Velo</span></a>`) + tagline (`<p class="home-header__description">`) + About link
- **Footer:** copyright line
- `{{ content | safe }}` renders the page body between nav and footer

Frontmatter variables consumed: `title`, `description`, `date`, `author`, `category`, `image`, `image_alt`

### `src/_includes/article.njk` — Article Layout
Wraps article content. Contains:
- Article header: category badge, level badge (color-coded), date, title `<h1>`, subtitle, byline
- Glossary hint paragraph
- `{{ content | safe }}` — rendered Markdown body
- Schema.org Article JSON-LD block
- `<script src="/js/glossary.js">` loaded at bottom

Frontmatter variables consumed: `title`, `subtitle`, `category`, `level`, `date`, `author`, `description`, `image`, `image_alt`

### `src/index.njk` — Home Page
Iterates `collections.articles`. For each article renders an `.article-card` with: category badge, level badge, date, title (linked), description text, "Read article →" link.

> **Note:** Article cards display `description` (not `excerpt`) from frontmatter.

---

## Article Frontmatter Schema

```yaml
---
layout: article.njk           # always article.njk
title: "Article Title"         # h1 on article page; linked title on home card
subtitle: "One sentence..."    # shown below h1 on article page
category: Fantasy Baseball     # badge on card and article header — see categories below
level: Intermediate            # optional badge — Beginner | Intermediate | Advanced
date: 2026-03-19T12:00:00     # ISO datetime; controls sort order
excerpt: "..."                 # NOT shown on home page (use description instead)
description: "..."             # shown on home page card; also used for OG/meta/Schema.org
permalink: /articles/slug.html # output URL
author: Allan Branstiter       # byline; defaults to "Exit Velo" if omitted
image: /images/filename.png   # optional; used for OG image and Schema.org
image_alt: "Alt text"          # optional; used for OG image alt
draft: false                   # set true to hide in production builds
---
```

### Level Badge Colors
| Value | Background | Text |
|-------|-----------|------|
| `Beginner` | Green (`#dcfce7`) | Dark green (`#166534`) |
| `Intermediate` | Yellow (`#fef9c3`) | Dark amber (`#854d0e`) |
| `Advanced` | Red (`#fee2e2`) | Dark red (`#991b1b`) |

The badge class is generated as `article-header__level--{{ level | lower }}`, so the value in frontmatter must be `Beginner`, `Intermediate`, or `Advanced` (title case).

### Active Category Values
- `Fantasy Baseball`
- `Stat Explainer`
- `Player Profile`
- `Rankings`

---

## Article Inventory

| File | Title | Category | Level | Date | Draft |
|------|-------|----------|-------|------|-------|
| `the-flat-bat.md` | Why the Best Contact Quality at First Base Doesn't Always Mean the Most Home Runs | Fantasy Baseball | Intermediate | 2026-03-19 | false |
| `the-pop-up-problem.md` | The Pop-Up Problem | Player Profile | Intermediate | 2026-03-20 | false |
| `the-542.md` | Why Matt McLain's K% Drop Is the Only Spring Number Worth Watching | Player Profile | Advanced | 2026-03-21 | false |
| `how-to-read-the-movement-profile.md` | How to Read Baseball Savant's Movement Profile | Stat Explainer | Intermediate | 2026-03-24 | false |
| `exit-velocity-explained.md` | Exit Velocity Is the Most Honest Statistic in Baseball | Stat Explainer | Beginner | 2026-03-26 | false |
| `grading-the-2025-rookie-class.md` | Grading the Entire 2025 Rookie Class | Rankings | Intermediate | 2026-03-29 | false |

---

## CSS Architecture (`src/css/style.css`)

Single flat CSS file. Key class namespaces:

| Namespace | What it styles |
|-----------|---------------|
| `.nav` | Top navigation bar |
| `.nav__logo` | "ExitVelo" logo link |
| `.nav__links` | About link list |
| `.home-header` | Home page title + tagline block |
| `.article-list` | Home page `<ul>` of article cards |
| `.article-card` | Individual card on home page |
| `.article-card__meta` | Category/level/date row on card |
| `.article-card__title` | Article title on card |
| `.article-card__excerpt` | Description text on card (CSS class name is "excerpt" for historical reasons but displays `description`) |
| `.article-card__readmore` | "Read article →" link |
| `.article-header` | Article page header block |
| `.article-header__meta` | Category/level/date row on article page |
| `.article-header__category` | Category badge |
| `.article-header__level` | Level badge (base styles) |
| `.article-header__level--beginner/intermediate/advanced` | Level badge color variants |
| `.article-header__title` | Article `<h1>` |
| `.article-header__subtitle` | Subtitle paragraph |
| `.article-header__byline` | "By [Author]" line |
| `.article-body` | Article content `<article>` |
| `.article-wrap` | Max-width wrapper around article page |
| `.glossary-hint` | "Tap any underlined term..." instruction |
| `.term` | Inline glossary term (dotted underline) |
| `.footer` | Site footer |

---

## Glossary System

- **`src/data/glossary.json`** — dictionary of baseball/Statcast terms, keyed by slug (e.g., `"exit velocity"`, `"barrel"`, `"xwoba"`). Each entry has at minimum a `definition` field.
- **`src/js/glossary.js`** — loaded on every article page. On click of any `.term` element, fetches the definition from the `data-term` attribute and displays it in a tooltip.
- **In article Markdown**, use the shortcode: `{% term "exit velocity" %}exit velocity{% endterm %}` — or inline HTML: `<span class="term" data-term="exit velocity">exit velocity</span>`
- The key passed to `data-term` must exactly match a key in `glossary.json`.

---

## Data Files (Stats)

All baseball statistics used for research are in a separate folder:

**`/Users/allanbranstiter/Documents/Personal/Fantasy Baseball/Stats/`**

**Always read `DATA_GUIDE.md` in that folder before accessing any CSV.** It documents every file, its columns, and a lookup table mapping research questions to the right file and column. Primary sources:
- **`Stats/Stats/`** — comprehensive FanGraphs per-year exports, 2022–2026 + Career (batting and pitching). Each file has ~400 columns covering standard through Statcast and bat tracking.
- **`Stats/2025_Projections/`** — ATC, BATX, OOPSY, Steamer projections; FanGraphs auction calculators
- **`Stats/2025_Articles/`** — 2025 rookie class leaderboard and discipline files

---

## Claude Code Skills for Exit Velo

These skills are available as slash commands in Claude Code. Use the `Skill` tool to invoke them.

| Skill | Command | What It Does |
|-------|---------|-------------|
| `exitvelocity-write` | `/exitvelocity-write` | Write a new Exit Velo article from scratch. Follows publication voice, style rules, and frontmatter schema. |
| `exitvelocity-edit` | `/exitvelocity-edit` | Edit an existing Exit Velo article. Preserves voice; applies style rules. |
| `exitvelocity-publish` | `/exitvelocity-publish` | Publish a completed article to the site (creates the `.md` file in `src/articles/` with correct frontmatter). |
| `exitvelocity-diagram` | `/exitvelocity-diagram` | Build a diagram or data visualization for use in an article. |
| `exitvelocity-glossary` | `/exitvelocity-glossary` | Add or update terms in `src/data/glossary.json`. |

---

## Build & Deploy

```bash
# Local development (live reload at localhost:8080)
npm run dev

# Production build (output to _site/)
npm run build

# Lint
npm run lint        # JS + CSS
npm run lint:js     # JS only
npm run lint:css    # CSS only
```

Netlify auto-deploys on push to the main branch. Build command is `npm run build`, publish directory is `_site`, `NODE_ENV=production` is set in the build environment (which excludes draft articles).
