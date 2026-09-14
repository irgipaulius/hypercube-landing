export const locales = ["lt", "en", "ru", "uk", "cz", "sk", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "lt";

export const localeLabels: Record<Locale, string> = {
  lt: "Lietuvių",
  en: "English",
  ru: "Русский",
  uk: "Українська",
  cz: "Čeština",
  sk: "Slovenčina",
  pl: "Polski",
};

export const htmlLang: Record<Locale, string> = {
  lt: "lt",
  en: "en",
  ru: "ru",
  uk: "uk",
  cz: "cs",
  sk: "sk",
  pl: "pl",
};

export type CourseTranslation = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  benefits?: string[];
  format: string;
  schedule: string;
  mediaAlt: string;
  prerequisite?: string;
  appLinkLabel?: string;
};

export type TestimonialTranslation = { quote: string; author: string };

export type PersonTranslation = {
  id: string;
  name: string;
  role: string;
  location: string;
  bio?: string[];
};

export type Translation = {
  locale: Locale;
  site: {
    name: string;
    tagline: string;
    description: string;
    author: string;
  };
  nav: {
    about: string;
    courses: string;
    testimonials: string;
    team: string;
    menu: string;
  };
  home: {
    heroEyebrow: string;
    ctaCourses: string;
    ctaTeam: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutDescription: string;
    coursesEyebrow: string;
    coursesTitle: string;
    coursesDescription: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  teamPage: {
    title: string;
    description: string;
    metaDescription: string;
    eyebrow: string;
    authorSection: string;
    instructorsSection: string;
    contactHint: string;
  };
  intro: [string, string, string];
  courses: CourseTranslation[];
  testimonials: TestimonialTranslation[];
  author: PersonTranslation;
  instructors: PersonTranslation[];
  common: {
    format: string;
    schedule: string;
    email: string;
    facebook: string;
    testimonialPrev: string;
    testimonialNext: string;
    testimonialSelect: string;
    footerNav: string;
    footerAbout: string;
    footerTagline: string;
    logoAlt: string;
  };
  footer: {
    methodology: string;
  };
};
