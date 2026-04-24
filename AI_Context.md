# Exit Velo — AI Context

**Read this first.** This document orients an AI assistant to the Exit Velo project. It covers the publication, the tech stack, every file in the project, how articles are structured, and the Claude Code skills available for this project.

---

## What Is Exit Velo

Exit Velo is a Cincinnati Reds analytics blog at **https://exitvelo.us** for fans who want to understand what the numbers actually say about their team. Articles explain Statcast data, sabermetrics, and player evaluation through Reds player stories, without jargon (or with jargon immediately defined). The default perspective is a Reds fan writing for Reds fans. Opponents are framed through the Reds lens (scouting reports for upcoming series, trade target evaluations, former Reds matchups). Occasional fantasy and non-Reds content is permitted, but the core audience is Cincinnati.

- **Voice:** E.B. White clarity + Gladwell storytelling. Authoritative but warm. Observational, not academic. Frame all analysis through the Reds lens.
- **Audience:** Reds fans from casual to analytically-minded. Assumes basic traditional stats knowledge; introduces advanced stats through narrative.
- **Author:** Allan Branstiter
- **Deployed on:** Fly.io (`fly deploy` from project directory)

### Writing Style Rules
- Do NOT use the "dramatic buildup colon" pattern: *"The Barrel Rate is real: 12.0%"* -- state numbers directly: *"His Barrel Rate is 12.0%"*
- No jargon without immediate definition
- Player stories first, statistics second
- Default perspective is a Reds fan writing for Reds fans

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Server runtime | Node.js 22 (Alpine) via Docker |
| Templating | Nunjucks (.njk) |
| Content | Markdown with YAML frontmatter |
| Styling | Plain CSS (single file) |
| Runtime | Custom Node.js HTTP server (`server.js`) |
| Deployment | Fly.io -- `fly deploy` |
| Dev server | `node server.js` (port 3000) |
| Package manager | npm |
| Key dependencies | `gray-matter`, `markdown-it`, `nunjucks` |

**No frameworks, no JavaScript bundler, no CMS.** The site runs as a dynamic Node.js server that renders Nunjucks templates at request time. Eleventy config exists but is not used at runtime.

---

## Project Structure

```
exit-velo/
├── AI_Context.md               <- you are here
├── server.js                   <- HTTP server: routes, template rendering
├── fly.toml                    <- Fly.io deployment config
├── Dockerfile                  <- Node 22 Alpine container
├── eleventy.config.cjs         <- legacy build config (not used at runtime)
├── package.json                <- deps: nunjucks, gray-matter, markdown-it
├── netlify.toml                <- legacy Netlify config (not used)
├── lib/
│   ├── articles.js             <- article loading, parsing, caching, file watching
│   ├── filters.js              <- Nunjucks filters (dateDisplay, dateYearMonth, etc.)
│   ├── markdown.js             <- Markdown-it setup with glossary shortcode
│   └── mlb-data.js             <- MLB Stats API + RotoWire scraping with caching
├── src/
│   ├── index.njk               <- home page (hero + sidebar + article list)
│   ├── about.njk               <- about page
│   ├── feed.njk                <- RSS feed
│   ├── sitemap.njk             <- XML sitemap
│   ├── robots.txt              <- robots.txt
│   ├── 404.html                <- error page
│   ├── _includes/
│   │   ├── base.njk            <- global HTML shell: <head>, nav, footer, OG/Twitter meta, Schema.org
│   │   └── article.njk         <- article page layout: header, body, glossary hint, Schema.org Article
│   ├── articles/               <- one .md file per article
│   ├── css/
│   │   └── style.css           <- all styles; BEM-ish class naming
│   ├── js/
│   │   ├── glossary.js         <- client-side glossary tooltip on term click
│   │   └── search.js           <- client-side article filtering/search
│   ├── data/
│   │   └── glossary.json       <- baseball term definitions keyed by slug
│   └── images/
│       ├── favicon.svg
│       ├── og-default.png      <- fallback OG image
│       ├── Headshots/          <- player headshot images
│       └── [article images]
└── _site/                      <- legacy build output; not used
```

---

## Server (`server.js`)

The server handles all routing:
- `/` -- renders `index.njk` with articles, featured articles, NL Central standings, and Reds news
- `/articles/*.html` -- renders individual articles via `article.njk`
- `/about.html` -- renders `about.njk`
- `/feed.xml` -- RSS feed
- `/sitemap.xml` -- sitemap
- Static files (CSS, JS, images, data) served from `src/`

The homepage route is async to support data fetching from external APIs.

---

## MLB Data (`lib/mlb-data.js`)

Fetches and caches two external data sources for the homepage sidebar:

### NL Central Standings
- **Source:** MLB Stats API (`statsapi.mlb.com/api/v1/standings`)
- **Cache TTL:** 4 hours
- **Data:** team name, wins, losses, win%, games back, streak
- **Filtering:** NL Central division (ID 205), short team names (Reds, Cubs, etc.)

### Breaking News
- **Primary source:** RotoWire Reds team page scrape (`rotowire.com/baseball/news.php?team=CIN`)
- **Fallback:** MLB transactions API (`statsapi.mlb.com/api/v1/transactions?teamId=113`) filtered to last 30 days, excluding jersey number changes
- **Cache TTL:** 15 minutes
- **Data:** 10 most recent items with player name, headline, date, and link to RotoWire player page

Both fetchers have 5-second timeouts and graceful fallbacks (return cached data or empty arrays on failure).

---

## Templates

### `src/_includes/base.njk` -- Global Shell
Applied to every page. Contains:
- `<head>`: charset, viewport, title (`{{ title }} -- Exit Velo`), meta description, canonical URL, Open Graph tags, Twitter Card tags, CSS/favicon/RSS links, Schema.org WebSite JSON-LD, Umami analytics
- **Nav:** logo link (`Exit<span>Velo</span>`) + tagline + Heat Check link + About link
- **Footer:** copyright line
- `{{ content | safe }}` renders the page body between nav and footer

### `src/_includes/article.njk` -- Article Layout
Wraps article content. Contains:
- Article header: category badge, level badge (color-coded), date, title `<h1>`, subtitle, byline
- Glossary hint paragraph
- `{{ content | safe }}` -- rendered Markdown body
- Schema.org Article JSON-LD block
- `<script src="/js/glossary.js">` loaded at bottom

### `src/index.njk` -- Home Page
Layout structure:
1. **Header** -- "Exit Velo" title + tagline
2. **Hero Row** (CSS grid: 2/3 + 1/3) --
   - **Hero section** (left): featured article image, category/level/date badges, title, subtitle
   - **Sidebar** (right): NL Central standings table + scrollable Breaking News feed (10 items, 4 visible)
3. **Recent Articles** -- 3-column card grid (next 3 articles after the hero)
4. **Search & Filters** -- search input + category pills + level pills
5. **Article List** -- full list of all published articles with client-side filtering

---

## Article Frontmatter Schema

```yaml
---
layout: article.njk           # always article.njk
title: "Article Title"         # h1 on article page; linked title on home card
subtitle: "One sentence..."    # shown below h1 on article page
category: Fantasy Baseball     # badge on card and article header
level: Intermediate            # optional badge -- Beginner | Intermediate | Advanced
date: 2026-03-19T12:00:00     # ISO datetime; controls sort order
excerpt: "..."                 # NOT shown on home page (use description instead)
description: "..."             # shown on home page card; also used for OG/meta/Schema.org
permalink: /articles/slug.html # output URL
author: Allan Branstiter       # byline; defaults to "Exit Velo" if omitted
image: /images/filename.png   # optional; used for OG image and Schema.org
image_alt: "Alt text"          # optional; used for OG image alt
article_image: /images/...    # optional; used for hero/card display image
article_image_alt: "Alt text"  # optional; alt text for article_image
draft: false                   # set true to hide in production
---
```

### Level Badge Colors
| Value | Background | Text |
|-------|-----------|------|
| `Beginner` | Green (`#dcfce7`) | Dark green (`#166534`) |
| `Intermediate` | Yellow (`#fef9c3`) | Dark amber (`#854d0e`) |
| `Advanced` | Red (`#fee2e2`) | Dark red (`#991b1b`) |

### Active Category Values
- `Player Profile`
- `Farm System`
- `Game Recap`
- `Stat Explainer`
- `Fantasy Baseball`
- `Rankings`

---

## CSS Architecture (`src/css/style.css`)

Single flat CSS file. Key class namespaces:

| Namespace | What it styles |
|-----------|---------------|
| `.nav` | Top navigation bar (sticky, dark background) |
| `.home-header` | Home page title + tagline block |
| `.home-hero-row` | CSS grid container for hero + sidebar (2/3 + 1/3) |
| `.home-hero` | Featured article section (image, meta, title, subtitle) |
| `.home-sidebar` | Right sidebar container |
| `.sidebar-widget` | Individual sidebar widget (standings, news) |
| `.sidebar-standings` | NL Central standings table |
| `.sidebar-news` | Breaking news scrollable list |
| `.home-trending` | "Recent Articles" section with 3-column grid |
| `.search-filters` | Search input + category/level filter pills |
| `.article-list` | Full article list below filters |
| `.article-card` | Individual card on home page |
| `.article-header` | Article page header block |
| `.article-body` | Article content `<article>` |
| `.article-wrap` | Max-width wrapper around article page |
| `.term` | Inline glossary term (dotted underline) |
| `.footer` | Site footer |

### CSS Custom Properties
```css
--bg: #fff;
--bg-subtle: #f9fafb;
--text: #1a1a1a;
--text-muted: #556270;
--border: #e5e7eb;
--nav-bg: #1c2533;
--accent: #C6011F;          /* Reds red */
--accent-dark: #8B0015;
--accent-light: #fce8eb;
--font-body: georgia, serif;
--font-ui: -apple-system, sans-serif;
--max-width: 1100px;
--article-width: 720px;
```

### Responsive Breakpoint
Single breakpoint at `width <= 640px`: hero row stacks to single column, trending grid becomes single column, font sizes reduce.

---

## Nunjucks Filters (`lib/filters.js`)

| Filter | Output | Example |
|--------|--------|---------|
| `dateDisplay` | `March 19, 2026` | article card dates |
| `dateYearMonth` | `2026-03` | `<time datetime>` attribute |
| `dateIso` | `2026-03-19` | Schema.org dates |
| `dateRfc822` | RFC 822 string | RSS feed |
| `json` | `JSON.stringify(value)` | Schema.org JSON-LD blocks |

---

## Glossary System

- **`src/data/glossary.json`** -- dictionary of baseball/Statcast terms, keyed by slug (e.g., `"exit velocity"`, `"barrel"`, `"xwoba"`). Each entry has at minimum a `definition` field.
- **`src/js/glossary.js`** -- loaded on every article page. On click of any `.term` element, fetches the definition from the `data-term` attribute and displays it in a tooltip.
- **In article Markdown**, use the shortcode: `{% term "exit velocity" %}exit velocity{% endterm %}` -- or inline HTML: `<span class="term" data-term="exit velocity">exit velocity</span>`
- The key passed to `data-term` must exactly match a key in `glossary.json`.

---

## Data Files (Stats)

All baseball statistics used for research are in a separate folder:

**`/Users/allanbranstiter/Documents/Personal/Fantasy Baseball/Stats/`**

**Always read `DATA_GUIDE.md` in that folder before accessing any CSV.** It documents every file, its columns, and a lookup table mapping research questions to the right file and column. Primary sources:
- **`Stats/Stats/`** -- comprehensive FanGraphs per-year exports, 2022-2026 + Career (batting and pitching). Each file has ~400 columns covering standard through Statcast and bat tracking. See **`Stats/Stats/STATS_GUIDE.md`** for a detailed per-file breakdown.
- **`Stats/2025_Projections/`** -- ATC, BATX, OOPSY, Steamer projections; FanGraphs auction calculators
- **`Stats/2025_Articles/`** -- 2025 rookie class leaderboard and discipline files

---

## Claude Code Skills for Exit Velo

These skills are available as slash commands in Claude Code. Use the `Skill` tool to invoke them.

| Skill | Command | What It Does |
|-------|---------|-------------|
| `exitvelo-write` | `/exitvelo-write` | Write a new Exit Velo article from scratch. Follows publication voice, style rules, and frontmatter schema. |
| `exitvelo-edit` | `/exitvelo-edit` | Edit an existing Exit Velo article. Preserves voice; applies style rules. |
| `exitvelo-publish` | `/exitvelo-publish` | Publish a completed article to the site. |
| `exitvelo-diagram` | `/exitvelo-diagram` | Build a diagram or data visualization for use in an article. |
| `exitvelo-glossary` | `/exitvelo-glossary` | Add or update terms in `src/data/glossary.json`. |
| `exitvelo-reader` | `/exitvelo-reader` | Simulated reader panel (4 personas) for article feedback. |
| `exitvelo-stats-analysis` | `/exitvelo-stats-analysis` | Deep player stats research briefs. |
| `exitvelo-refresh-stats` | `/exitvelo-refresh-stats` | Automated refresh of 11 Savant leaderboard CSVs. |
| `exitvelo-statcast-dash` | `/exitvelo-statcast-dash` | Savant-style HTML player cards with percentile bars. |
| `exitvelo-waiver-analysis` | `/exitvelo-waiver-analysis` | Yahoo trending players + Razzball projection merger. |
| `heat-check` | `/heat-check` | Dark-mode HTML heat check for a team's hitters/pitchers. |

---

## Build & Deploy

```bash
# Local development (port 3000)
node server.js

# Deploy to Fly.io
fly deploy

# Dev with auto-restart
npm run dev    # runs node --watch server.js
```

Fly.io runs the Dockerfile which starts `node server.js` on port 3000. `NODE_ENV=production` is set in the Fly environment (which excludes draft articles).
