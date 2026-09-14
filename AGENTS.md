# Agent instructions — hypercube-landing

This file is for AI coding agents (Claude, Cursor, etc.) working on this repo.
**Read this before making any changes.**

## Project

Static marketing site for [hypercube.lt](https://hypercube.lt) — the Hypercube human inner-resources methodology.

- **Stack:** Astro 5, Tailwind CSS v4, TypeScript, static output
- **Repo:** https://github.com/irgipaulius/hypercube-landing
- **Production:** https://hypercube.lt (also https://hypercube-landing.pages.dev)
- **Staging:** https://landing.hypercube.lt

## Deploy — IMPORTANT

**Never deploy with wrangler or manual uploads.**

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

Cloudflare Pages is connected to GitHub. Every push to `main` automatically:

1. Clones the repo
2. Runs `npm run build`
3. Deploys `dist/` to production

Monitor builds: Cloudflare Dashboard → Workers & Pages → hypercube-landing → Deployments

Build settings (already configured):

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `main`

## Languages — CRITICAL

The site is multilingual. **Every content change must be applied to ALL 7 locales.**

| URL prefix | Language | File |
|------------|----------|------|
| `/lt/` | Lithuanian (default) | `src/i18n/locales/lt.ts` |
| `/en/` | English | `src/i18n/locales/en.ts` |
| `/ru/` | Russian | `src/i18n/locales/ru.ts` |
| `/uk/` | Ukrainian | `src/i18n/locales/uk.ts` |
| `/cz/` | Czech | `src/i18n/locales/cz.ts` |
| `/sk/` | Slovak | `src/i18n/locales/sk.ts` |
| `/pl/` | Polish | `src/i18n/locales/pl.ts` |

Root `/` redirects to `/lt/`.

### Translation checklist (run on every content edit)

1. Edit the Lithuanian source (`lt.ts`) first — it is the canonical copy
2. Apply the same change to `en.ts`, `ru.ts`, `uk.ts`, `cz.ts`, `sk.ts`, `pl.ts`
3. Run `npm run validate:i18n` — must pass with zero errors
4. Run `npm run build` — must succeed
5. Push to `main`

**Do not ship a change that only updates one language.**

Person names (Tomas Jacinkevičius, Gita Ramana, etc.) stay the same in all locales.
Course product names (Tesseract, Hypercube, Trans-Former) stay in Latin script.

## Project structure

```
src/
  i18n/
    locales/       ← ALL translatable text (7 files)
    types.ts       ← Translation type + locale list
    media.ts       ← Shared images/videos/contacts (not translated)
    index.ts       ← getTranslation(), localePath(), helpers
  components/      ← Astro UI components (receive `t` prop)
  layouts/         ← BaseLayout.astro
  pages/
    index.astro    ← redirects / → /lt/
    [lang]/        ← localized routes
public/
  wp-content/uploads/  ← images from original WordPress site
source-data/       ← WordPress API exports (reference only)
scripts/
  fetch-wp-content.mjs  ← re-download from live WordPress
  validate-i18n.mjs     ← verify all locales match
```

## Common tasks

### Change site copy

Edit `src/i18n/locales/*.ts` (all 7 files), then validate and push.

### Add a new page

1. Create `src/pages/[lang]/your-page/index.astro` with `getStaticPaths()` from `locales`
2. Add nav link strings to all 7 locale files
3. Validate, build, push

### Refresh WordPress content (reference)

```bash
npm run fetch:wp   # downloads to source-data/ — does NOT auto-update site
```

Manual copy extraction from `source-data/api/*.json` into locale files is required.

### Add an image

Place in `public/wp-content/uploads/` or `public/`, reference path in `src/i18n/media.ts` if shared.

## Do not

- Deploy with `wrangler pages deploy` (git push only)
- Edit only one locale file when changing user-visible text
- Embed WordPress/Elementor HTML in pages
- Add GitHub Actions deploy workflow (Cloudflare native git integration handles it)
- Commit secrets or `.env` files

## Do

- Keep components small and prop-driven (`locale`, `t`)
- Match existing Tailwind + design token patterns in `src/styles/global.css`
- Run `npm run validate:i18n && npm run build` before pushing
- Preserve `/3d/login.php` — proxied to home server via `functions/_middleware.js` (`cf.resolveOverride` → `78.62.188.61`). API/DB stay on TrueNAS; do not remove this proxy.

## Contact / team data

Phone numbers, emails, and Facebook URLs live in `src/i18n/media.ts` (`personContacts`).
Translated roles and bios live in locale files.
