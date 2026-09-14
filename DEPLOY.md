# Deploy setup

## What's live

| URL | Status |
|-----|--------|
| https://hypercube-landing.pages.dev | **Active** |
| https://landing.hypercube.lt | Needs DNS fix (see below) |

### Fix landing.hypercube.lt (one-time, Cloudflare dashboard)

The wildcard `*.hypercube.lt` A record points to your home server. Add an **explicit** record that overrides it:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `landing` | `hypercube-landing.pages.dev` | Proxied (orange) |

Cloudflare Dashboard → hypercube.lt → DNS → Add record.

Custom domain is already registered on the Pages project; once the CNAME propagates, SSL will issue automatically (1–5 min).

## Git → deploy workflow

Every push to `main` triggers GitHub Actions → Cloudflare Pages.

### One-time: add GitHub secret

1. Create a Cloudflare API token: https://dash.cloudflare.com/profile/api-tokens  
   - Template: **Edit Cloudflare Workers** (includes Pages deploy)
   - Or custom: Account → Cloudflare Pages → Edit

2. Add to GitHub repo secrets:  
   https://github.com/irgipaulius/hypercube-landing/settings/secrets/actions  
   - Name: `CLOUDFLARE_API_TOKEN`  
   - Value: your token

### Push code (run locally)

```bash
cd "/Users/vandaddy/Public/hypercube-landing"

git add -A
git commit -m "Initial Astro scaffold from hypercube.lt WordPress export"
git push -u origin main
```

After push, check: https://github.com/irgipaulius/hypercube-landing/actions

## Re-fetch WordPress content

```bash
npm run fetch:wp
node scripts/generate-pages.mjs
npm run build
git add -A && git commit -m "Refresh content from WordPress" && git push
```

## Downloaded content summary

- **3 pages:** `/`, `/author-and-instructors/`, `/hello-world/`
- **22 media files** in `public/wp-content/uploads/`
- **API exports** in `source-data/api/`
- **HTML mirror** in `mirror/` (gitignored, local reference only)
