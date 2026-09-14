# hypercube-landing

Static rebuild of [hypercube.lt](https://hypercube.lt) using Astro, deployed to Cloudflare Pages.

**Preview:** [landing.hypercube.lt](https://landing.hypercube.lt)

## Stack

- [Astro](https://astro.build) (static output)
- Cloudflare Pages (git deploy)
- Content sourced from WordPress REST API

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output → dist/
npm run preview    # preview production build
```

## Re-fetch WordPress content

```bash
npm run fetch:wp           # pull pages/posts/media from hypercube.lt
node scripts/generate-pages.mjs   # regenerate src/pages from JSON
```

## Deploy

Push to `main` → Cloudflare Pages builds automatically.

Build settings (Cloudflare dashboard):
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 20+

## Project layout

```
source-data/     # WordPress API exports + uploads (committed)
mirror/          # wget HTML mirror (gitignored, local reference)
src/pages/       # Astro routes (generated from API)
public/          # Static assets (uploads, CSS)
scripts/         # fetch + generate tooling
```
