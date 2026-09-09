# Design Portfolio

A single-page portfolio site that ties all my projects together in one place — built with plain HTML/CSS/JS and deployed to GitHub Pages.

**Live:** https://dataminingsoftware.github.io/design-portfolio/

## What it shows

- A hero section with a short intro and GitHub link.
- A filterable grid of all 16 projects (AI/LLM, ML, backend, mobile, design, team, private), each with a description, tech-stack tags, a status badge, and a GitHub link.

## How to add your own screenshots

Each project card looks for an image at:

```
assets/<slug>.png
```

where `<slug>` is the project key (e.g. `assets/warframe-assistant.png`, `assets/habit-tracker.png`). Until that file exists, the card shows a styled text placeholder (a category-coloured monogram).

To add a real screenshot, just drop a PNG with the matching filename into `assets/`. The card automatically swaps it in — no code changes needed.

Slugs:

| Project | File |
|---|---|
| Voice AI Assistant | `assets/voice-assistant.png` |
| RAG App | `assets/rag-app.png` |
| PII Guard | `assets/pii-guard.png` |
| Car Coach | `assets/car-coach.png` |
| League Live Coach | `assets/league-coach.png` |
| Hardware Diagnostician | `assets/hardware-diagnostician.png` |
| Warframe Assistant | `assets/warframe-assistant.png` |
| CNN Fine-tune + API | `assets/cnn-api.png` |
| Monitoring & Logging | `assets/monitoring.png` |
| Order Book Engine | `assets/order-book-engine.png` |
| Biometric Auth | `assets/mobile-feature.png` |
| Habit Tracker | `assets/solo-mobile-app.png` |
| Design Portfolio | `assets/design-portfolio.png` |
| RoomieMatch | `assets/roomiematch.png` |
| Job Hunter | `assets/job-hunter.png` |
| Quant Trader | `assets/quant-trader.png` |

## Editing the project list

All project data lives in `script.js` (the `projects` array). Add, remove, or reorder
entries there; the grid updates automatically.

## Files

- `index.html` — page structure (hero, filters, grid, footer).
- `styles.css` — dark theme and layout.
- `script.js` — project data + rendering + filtering.
- `assets/` — drop screenshots here (optional).
- `.github/workflows/pages.yml` — auto-deploys to GitHub Pages on every push to `main`.

## Local preview

Open `index.html` in a browser, or run any static server (e.g. `python -m http.server`).
