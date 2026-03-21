# Exit Velo: Publish Article

Format and prepare an article file for publication on Exit Velo. Accepts Markdown, plaintext, or Word (.docx) files.

**Input:** `$ARGUMENTS` — path to the article file.

---

## Step 1: Read the source file

- If the file ends in `.docx`, use `pandoc -t markdown "$FILE"` to convert it to Markdown. If pandoc is not available, use `python3 -c "import docx; ..."` with python-docx as a fallback.
- If the file ends in `.md` or `.txt`, read it directly with the Read tool.

Extract the raw body text.

---

## Step 2: Read the glossary

Read `/Users/allanbranstiter/Documents/GitHub/exit-velo/data/glossary.json` to get the full list of available term keys.

---

## Step 3: Generate frontmatter

Infer or derive the following fields from the article content. If any cannot be reliably inferred, ask the user before proceeding.

```yaml
layout: article.njk
title:        # The article's main title
subtitle:     # One sentence expanding on the title — what the article actually argues
category:     # e.g. "Fantasy Baseball" — infer from content
date:         # Today's date in YYYY-MM-DD format
excerpt:      # 2–3 sentences for the homepage card. Should open with a strong hook from the article.
description:  # One sentence for SEO meta description
permalink:    # /articles/slug.html — slug is lowercase, hyphenated title
```

---

## Step 4: Convert body to Markdown

- Remove any existing nav, header, footer, or boilerplate HTML if present
- Convert structural HTML to Markdown: `<h2>` → `##`, drop `<p>` tags, blank lines between paragraphs
- Preserve any existing `<span class="term" data-term="...">` inline HTML exactly as-is
- Preserve `<em>`, `<strong>`, and other inline formatting
- Do not rewrite or edit the prose — only structural conversion

---

## Step 5: Apply glossary term links (first use only)

Go through the body text in reading order. For each glossary key:

- Find the **first** occurrence of the term (case-insensitive match against the key and any natural variants — e.g. "exit velocities" matches "exit velocity")
- Wrap it with `<span class="term" data-term="KEY">original text</span>` using the exact glossary key as `data-term`
- **Skip all subsequent occurrences** of the same term — do not wrap them
- Do not wrap terms that are already wrapped in a `<span class="term">` tag
- Do not wrap terms that appear inside code blocks or HTML attributes

If a term has multiple keys pointing to the same concept (e.g. `xslg` and `expected slugging`, or `iso` and `isolated power`), treat them as the same term — link only the first occurrence across all keys for that concept.

---

## Step 6: Write the output file

Write the formatted article to:
```
/Users/allanbranstiter/Documents/GitHub/exit-velo/src/articles/SLUG.md
```

Where `SLUG` matches the permalink generated in Step 3.

After writing, print a summary:
- Output file path
- List of glossary terms linked and where (e.g. "exit velocity — paragraph 1")
- List of glossary terms found in the article but NOT in the glossary (candidates to add)
- Any frontmatter fields that were inferred and may need review
