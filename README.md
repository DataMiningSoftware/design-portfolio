# Design Portfolio

A single-page portfolio site that ties all my projects together in one place — built with plain HTML/CSS/JS and deployed to GitHub Pages.

**Live:** https://dataminingsoftware.github.io/design-portfolio/

## What it shows

- A hero section with a short intro and GitHub link.
- A filterable grid of projects (AI/LLM, ML, backend, mobile, design, team, private).
- Click any project to open a detail view with a full description, tech-stack tags, and its key features.

## Tech

- Static HTML / CSS / JavaScript — no build step, no dependencies.
- Deployed to GitHub Pages on every push via a workflow (`.github/workflows/pages.yml`).

## Local preview

Open `index.html` in a browser, or serve it with any static server:

```powershell
python -m http.server
```
