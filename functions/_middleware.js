/** Cloudflare Pages middleware — API proxy + locale redirect */
const HOME_ORIGIN_IP = "78.62.188.61";
const PUBLIC_HOST = "hypercube.lt";

const COUNTRY_TO_LOCALE = {
  LT: "lt",
  PL: "pl",
  CZ: "cz",
  SK: "sk",
  UA: "uk",
  BY: "ru",
  RU: "ru",
  KZ: "ru",
  US: "en",
  GB: "en",
  IE: "en",
  AU: "en",
  CA: "en",
  NZ: "en",
  ZA: "en",
  SG: "en",
  IN: "en",
};

const ACCEPT_LANG_TO_LOCALE = {
  lt: "lt",
  en: "en",
  ru: "ru",
  uk: "uk",
  cs: "cz",
  sk: "sk",
  pl: "pl",
};

function localeFromAcceptLanguage(header) {
  if (!header) return null;

  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const primary = tag.split("-")[0];
    if (ACCEPT_LANG_TO_LOCALE[primary]) return ACCEPT_LANG_TO_LOCALE[primary];
  }

  return null;
}

function detectLocale(request) {
  const fromHeader = localeFromAcceptLanguage(request.headers.get("Accept-Language"));
  if (fromHeader) return fromHeader;

  const country = request.cf?.country;
  if (country && COUNTRY_TO_LOCALE[country]) return COUNTRY_TO_LOCALE[country];

  return "lt";
}

function isApiPath(pathname) {
  return pathname.startsWith("/3d/") || pathname.startsWith("/4d/");
}

/** Proxy app API to home nginx — same URL, DB and Node stay on TrueNAS */
async function proxyToHomeServer(request, url) {
  const upstream = new URL(url.pathname + url.search, `https://${PUBLIC_HOST}`);
  const headers = new Headers(request.headers);
  headers.set("Host", PUBLIC_HOST);

  return fetch(upstream.toString(), {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "manual",
    cf: { resolveOverride: HOME_ORIGIN_IP },
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (isApiPath(url.pathname)) {
    return proxyToHomeServer(context.request, url);
  }

  if (url.pathname === "/" || url.pathname === "/index.html") {
    const locale = detectLocale(context.request);
    return Response.redirect(`${url.origin}/${locale}/`, 302);
  }

  return context.next();
}
