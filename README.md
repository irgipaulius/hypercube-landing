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

## Content

Site copy lives in typed TypeScript: `src/data/site.ts`.

To refresh raw WordPress exports (reference only):

```bash
npm run fetch:wp
```

## Deploy

Push to `main` → Cloudflare Pages builds automatically from GitHub (no wrangler).

See [DEPLOY.md](./DEPLOY.md) for details.

## Project layout

```
source-data/     # WordPress API exports + uploads (committed)
mirror/          # wget HTML mirror (gitignored, local reference)
src/pages/       # Astro routes (generated from API)
public/          # Static assets (uploads, CSS)
scripts/         # fetch + generate tooling
```
