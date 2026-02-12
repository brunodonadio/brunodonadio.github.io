# Bruno Donadío — Portfolio

A minimal, static personal landing and portfolio site for a Senior Backend Engineer. Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Designed for deployment on **GitHub Pages**.

## Overview

- **Stack:** Astro (static), Tailwind CSS, TypeScript
- **Pages:** Home, Case Studies (list + detail), Resume, 404
- **Features:** Light/dark mode (persisted in `localStorage`), responsive layout, semantic HTML, no CMS

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321). To disable Astro telemetry (optional), set `ASTRO_TELEMETRY_DISABLED=1` in your environment.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

1. **Repository:** Use a repo named `brunodonadio.github.io` for a user/org site, or any repo and enable GitHub Pages in Settings.
2. **Static adapter:** This project uses Astro’s default static output (`output: 'static'` in `astro.config.mjs`). No extra adapter is required.
3. **Build command:** `npm run build`
4. **Publish directory:** `dist`
5. **Base path:** For a user/org site (`username.github.io`), keep `base: '/'` in `astro.config.mjs`. For a project site (`username.github.io/repo-name`), set `site` and `base` in `astro.config.mjs`:
   - `site: 'https://brunodonadio.github.io'`
   - `base: '/repo-name'`
