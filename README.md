# abuqodirov-portfolio

A portfolio and blog. Astro, static output, no database, no admin panel, no
build-time magic. Two dependencies.

```bash
npm run dev       # http://localhost:4321
npm run build     # → dist/, a plain static site
npm run preview   # serve dist/ locally
```

## Where the words are

**`src/site.ts` holds every word on the site**, except the articles. Identity,
navigation, the home page intro, the project list, the about page, the contact
page, the status bar, and the small interface strings. Each block has a comment
saying where its text comes out on the page.

**`src/content/articles/*.mdx`** — one Markdown file per article. That is the
only other place a sentence lives.

That's the whole content model. Nothing else in `src/` contains text you would
want to rewrite.

| Want to change | Open |
| --- | --- |
| Your name, role, the intro paragraphs | `src/site.ts` → `name`, `role`, `intro` |
| The navigation in the left rail | `src/site.ts` → `nav` |
| The project list | `src/site.ts` → `projects` |
| The about page | `src/site.ts` → `about` |
| The contact page | `src/site.ts` → `contact` |
| The bottom status bar | `src/site.ts` → `status` |
| Accent colour, mono vs serif | `src/site.ts` → `appearance` |
| Add a page like `/now` | `src/site.ts` → `pages` |
| Write an article | a new file in `src/content/articles/` |
| Spacing, type scale, colours | `src/styles/terminal.css` |

### Classified projects

A project with `classified: true` is dropped before anything is rendered — no
row, no name, nothing in the built HTML.

That hides it from the *site*, not from the *repository*. If this repo is
public, anyone can read `src/site.ts`, and git keeps every version of it. For
something genuinely confidential, don't write it down here at all.

## Layout

A sticky left rail carries identity and navigation; the content column does the
reading. Below 860 px the rail folds into a header block.

Two type roles, not one: mono for the interface (nav, dates, rows, status bar),
a serif for reading text. Switch to all-mono with `appearance.typeset` if you
prefer the classic terminal look.

Design tokens are at the top of `src/styles/terminal.css`. The theme follows the
visitor's system preference; the status-bar button sets an explicit choice and
stores it in `localStorage`.

## Deploying

`dist/` is static, so anywhere works. Build command `npm run build`, output
directory `dist`.
