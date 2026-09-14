import type { CourseTranslation, Locale, Translation } from "./types";
import { defaultLocale, htmlLang, localeLabels, locales } from "./types";
import { courseMedia, personContacts, personPhotos, siteAssets } from "./media";

import lt from "./locales/lt";
import en from "./locales/en";
import ru from "./locales/ru";
import uk from "./locales/uk";
import cz from "./locales/cz";
import sk from "./locales/sk";
import pl from "./locales/pl";

export { locales, defaultLocale, localeLabels, htmlLang, siteAssets };
export type { Locale, Translation, CourseTranslation };

const translations: Record<Locale, Translation> = { lt, en, ru, uk, cz, sk, pl };

export function getTranslation(locale: Locale): Translation {
  return translations[locale] ?? translations[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a localized path, e.g. localePath('en', 'author-and-instructors') → /en/author-and-instructors/ */
export function localePath(locale: Locale, ...segments: string[]): string {
  const rest = segments.filter(Boolean).join("/");
  return rest ? `/${locale}/${rest}/` : `/${locale}/`;
}

/** Same page in another language (preserves subpath after locale) */
export function switchLocalePath(currentPath: string, target: Locale): string {
  const stripped = currentPath.replace(/^\/(lt|en|ru|uk|cz|sk|pl)(\/|$)/, "/");
  const sub = stripped === "/" ? "" : stripped.replace(/^\//, "").replace(/\/$/, "");
  return localePath(target, sub);
}

export function getCourseWithMedia(course: CourseTranslation) {
  const media = courseMedia[course.id as keyof typeof courseMedia];
  return {
    ...course,
    media: media
      ? {
          type: media.type,
          src: media.src,
          alt: course.mediaAlt,
          appLink: "appLink" in media ? media.appLink : undefined,
        }
      : { type: "image" as const, src: siteAssets.logo, alt: course.mediaAlt },
    appLink: media && "appLink" in media ? media.appLink : undefined,
    appLinkLabel: course.appLinkLabel,
  };
}

export function getPersonWithContact(person: Translation["author"] | Translation["instructors"][0]) {
  const photo = personPhotos[person.id as keyof typeof personPhotos];
  const contact = personContacts[person.id as keyof typeof personContacts];
  return { ...person, photo, ...contact };
}

export function getNavItems(t: Translation, locale: Locale) {
  const base = `/${locale}`;
  return [
    { href: `${base}/#apie`, label: t.nav.about },
    { href: `${base}/#kursai`, label: t.nav.courses },
    { href: `${base}/#atsiliepimai`, label: t.nav.testimonials },
    { href: `${base}/author-and-instructors/`, label: t.nav.team },
  ];
}
