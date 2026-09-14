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

## Content & languages

**Read [AGENTS.md](./AGENTS.md)** — especially for AI agents: deploy rules, translation checklist, project structure.

Site copy lives in **7 locale files**: `src/i18n/locales/{lt,en,ru,uk,cz,sk,pl}.ts`

Routes: `/lt/`, `/en/`, `/ru/`, `/uk/`, `/cz/`, `/sk/`, `/pl/` (root `/` → `/lt/`)

```bash
npm run validate:i18n   # verify all locales have matching keys
npm run fetch:wp        # refresh WordPress exports (reference only)
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
