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

Keep the `/3d/login.php` location block proxying to `:8888`. Pass client IP headers through (do not overwrite with `$proxy_add_x_forwarded_for`):

```nginx
location /3d/login.php {
    proxy_pass http://192.168.2.15:8888;
    proxy_set_header Host $host;
    proxy_set_header X-Real-Client-IP $http_x_real_client_ip;
    proxy_set_header X-Forwarded-For $http_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
}
```

## Troubleshooting 522 (API not reaching home)

If `curl https://randomtest987.hypercube.lt/` returns **522**, Cloudflare cannot reach your home server on `78.62.188.61`. The Worker is fine — fix origin connectivity:

1. **Cloudflare DNS** → confirm `*.hypercube.lt` A → `78.62.188.61` (proxied orange cloud)
2. **TrueNAS reverse-proxy** → nginx running, port 443 forwarded from router
3. **nginx** → add `origin.hypercube.lt` to `server_name` (see above)
4. **Cloudflare SSL/TLS** → mode **Full** (not Strict if origin uses self-signed)
5. Test direct: `curl -skI --resolve hypercube.lt:443:78.62.188.61 https://hypercube.lt/3d/login.php` (expect Express 404 on GET)

## Verify API (after 522 is fixed)

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
