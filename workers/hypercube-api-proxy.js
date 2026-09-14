/**
 * Zone Worker — handles /3d/* and /4d/* before Cloudflare Pages.
 * Proxies to home nginx via origin.hypercube.lt (wildcard → TrueNAS).
 * Public URL stays hypercube.lt/3d/login.php for the mobile app.
 */
const PUBLIC_HOST = "hypercube.lt";
const ORIGIN_HOST = "origin.hypercube.lt";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const upstream = new URL(url.pathname + url.search, `https://${ORIGIN_HOST}`);

    const headers = new Headers();
    headers.set("Host", PUBLIC_HOST);
    headers.set("X-Forwarded-Proto", "https");

    const clientIp = request.headers.get("CF-Connecting-IP");
    if (clientIp) headers.set("X-Forwarded-For", clientIp);

    const contentType = request.headers.get("Content-Type");
    if (contentType) headers.set("Content-Type", contentType);

    const accept = request.headers.get("Accept");
    if (accept) headers.set("Accept", accept);

    const body =
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.arrayBuffer();

    return fetch(upstream.toString(), {
      method: request.method,
      headers,
      body,
      redirect: "manual",
    });
  },
};
