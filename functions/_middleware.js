/** Cloudflare Pages middleware — locale redirect (API proxied by zone Worker) */
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
  // Geo first — Lithuanian site; being in LT beats an English browser setting
  const country = request.cf?.country;
  if (country && COUNTRY_TO_LOCALE[country]) return COUNTRY_TO_LOCALE[country];

  const fromHeader = localeFromAcceptLanguage(request.headers.get("Accept-Language"));
  if (fromHeader) return fromHeader;

  return "lt";
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // /3d/* and /4d/* are handled by the hypercube-api-proxy Worker (see wrangler.api-proxy.toml)

  if (url.pathname === "/" || url.pathname === "/index.html") {
    const locale = detectLocale(context.request);
    return Response.redirect(`${url.origin}/${locale}/`, 302);
  }

  return context.next();
}
