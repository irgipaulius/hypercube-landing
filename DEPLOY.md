# Deploy

## Workflow

**Git push → Cloudflare Pages auto-build.** No wrangler deploy for site content.

```bash
git add -A
git commit -m "your message"
git push origin main
```

Cloudflare clones `main` from GitHub, runs `npm run build`, deploys `dist/` + `functions/`.

Monitor builds: [Cloudflare Pages dashboard](https://dash.cloudflare.com/) → Workers & Pages → hypercube-landing → Deployments

## URLs

| URL | Purpose |
|-----|---------|
| https://hypercube.lt | Production (Pages + API proxy) |
| https://www.hypercube.lt | Production alias |
| https://hypercube-landing.pages.dev | Default Pages subdomain |
| https://landing.hypercube.lt | Staging (optional) |

## Architecture

```text
hypercube.lt
  ├── /3d/*, /4d/*  →  middleware proxies to home nginx (78.62.188.61) → Node :8888
  └── everything else  →  static Astro site on Cloudflare Pages
```

App URL stays **`hypercube.lt/3d/login.php`**. WordPress on TrueNAS can be shut down; keep PM2 `:8888` and nginx routing for `/3d/*`.

## Production cutover (one-time)

1. Push middleware + `site: https://hypercube.lt` in `astro.config.mjs`
2. Cloudflare → Workers & Pages → **hypercube-landing** → Custom domains → add `hypercube.lt` and `www.hypercube.lt`
3. DNS (Cloudflare zone): apex `@` and `www` point to Pages (remove A → `78.62.188.61` for website records)
4. Keep MX / SPF / DMARC / `mail.hypercube.lt` unchanged
5. Verify: `curl -I https://hypercube.lt/lt/` (200) and app login POST to `/3d/login.php`
6. Stop WordPress in hypercube jail; keep nginx + Node API

## Build settings (Cloudflare — already configured)

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Git repo:** https://github.com/irgipaulius/hypercube-landing
