# ROAST // content-checklist

Alexa Sanchez's weekly content operating system (v9), built around Pocono seller leads.

Live site: https://itsmyash.github.io/content-checklist/

| Page | What it's for |
|---|---|
| `index.html` | **Home.** Lead scoreboard, lead log, this week's slate, Sunday results block, backup |
| `system.html` | **System.** The one-screen v9 operating rules |
| `socials.html` | **Socials.** This week's posts by account (@alexa.realtor · @its.myash · @fillerandroast), grouped by platform |
| `scroll.html` | **Weekly Scroll.** The approved slate with scripts and captions. It reads `week.js` |
| `research.html` | **Research.** The 5 Thursday Perplexity prompts plus on-demand seller tools |
| `pipeline.html` | **Seller Pipeline.** Monday pull, signal scoring, outreach log. Private to the browser |

## Weekly update

The only file that changes each week is **`week.js`**. Stage 2 of the Sunday session produces it.
Keep the same schema as the current file and set `weekOf` to the Sunday's date (YYYY-MM-DD).
Each post task should carry `acct` (`realtor` / `myash` / `fnr`) and `platforms` (any of `ig, stories, youtube, tiktok, blog, gbp, nextdoor, linkedin, fbbiz, fbpersonal, web, outreach`). If they're missing, the Socials page guesses from the task's `when` text.

**Never put prospecting or distress data (addresses, owners, sheriff/tax lists) in `week.js`.** This repo is public.

## Data

Leads, pipeline and checkboxes are saved in the browser's localStorage, which is per device. Use **Home → Backup** to export or import.
The pipeline reads the same storage key as the old dashboard (`myash_ops_v6`), so existing entries carry over in the same browser.
