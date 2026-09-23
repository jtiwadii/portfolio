# Juganu Tiwadi — Portfolio

One-page portfolio site, built with React + TypeScript + Vite. Dark, animated redesign implemented from a Claude Design handoff.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Structure

- `src/data.ts` — all resume content (skills, roles, projects, contact info)
- `src/App.tsx` — page layout, scroll reveal / parallax / cursor glow, tilting project cards
- `src/index.css` — styling and animations (accent colour tokens at the top; respects `prefers-reduced-motion`)
- `public/Juganu-Tiwadi-Resume.pdf` — downloadable resume
- `design/` — original Claude Design export (reference only, not part of the built site)
