# Deploy

## Workflow

**Git push → Cloudflare Pages auto-build** for the static site.

**API proxy Worker** (one-time / when `workers/` changes):

```bash
npx wrangler deploy --config wrangler.api-proxy.toml
```

## Architecture

```text
hypercube.lt/3d/login.php
  → hypercube-api-proxy Worker (zone route, runs BEFORE Pages)
  → origin.hypercube.lt (wildcard DNS → home nginx)
  → Node :8888 on TrueNAS

hypercube.lt/*
  → Cloudflare Pages (Astro site)
```

## Required DNS (Cloudflare zone hypercube.lt)

| Record | Target | Proxy |
|--------|--------|-------|
| `@` | Cloudflare Pages (hypercube-landing) | Proxied |
| `www` | Cloudflare Pages | Proxied |
| `*.hypercube.lt` OR `origin` | `78.62.188.61` (home reverse-proxy) | Proxied |

**Do not** add `origin.hypercube.lt` as a Pages custom domain.

## Required nginx (reverse-proxy jail)

Add `origin.hypercube.lt` to `server_name` so TLS/SNI works when Cloudflare connects:

```nginx
server_name hypercube.lt www.hypercube.lt origin.hypercube.lt;
```

Keep the `/3d/login.php` location block proxying to `:8888`.

## Verify API

```bash
curl -X POST https://hypercube.lt/3d/login.php \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "group=7&index=7&key=WRONG"
# Expect: UNAUTHORIZED (not error 1019/522)
```

Check CSV on TrueNAS for a new row with your test values.

## Build settings (Pages)

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Output directory:** `dist`
