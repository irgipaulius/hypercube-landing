# Deploy

## Workflow

**Git push → Cloudflare Pages auto-build.** No wrangler, no manual uploads.

```bash
git add -A
git commit -m "your message"
git push
```

Cloudflare clones `main` from GitHub, runs `npm run build`, deploys `dist/`.

Monitor builds: [Cloudflare Pages dashboard](https://dash.cloudflare.com/) → Workers & Pages → hypercube-landing → Deployments

## URLs

| URL | Purpose |
|-----|---------|
| https://hypercube-landing.pages.dev | Default Pages subdomain |
| https://landing.hypercube.lt | Preview/staging custom domain |

### landing.hypercube.lt DNS

If the wildcard `*.hypercube.lt` A record conflicts, add an explicit CNAME in Cloudflare DNS:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `landing` | `hypercube-landing.pages.dev` | Proxied |

## Re-fetch WordPress content

Edit `src/data/site.ts`, then push to `main`.

## Build settings (Cloudflare — already configured)

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Git repo:** https://github.com/irgipaulius/hypercube-landing
