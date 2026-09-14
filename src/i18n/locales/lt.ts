import type { Translation } from "../types";

const t: Translation = {
  locale: "lt",
  site: {
    name: "Hypercube",
    tagline: "Tiems, kas nori SAU leisti daugiau",
    description: "Žmogaus vidinių resursų valdymo metodika — vaizduotės, dėmesio ir savireguliacijos praktikos.",
    author: "Tomas Jacinkevičius",
  },
  nav: {
    about: "Apie",
    courses: "Kursai",
    testimonials: "Atsiliepimai",
    team: "Autorius ir instruktoriai",
    menu: "Meniu",
  },
  home: {
    heroEyebrow: "Vidinių resursų valdymo metodika",
    ctaCourses: "Peržiūrėti kursus",
    ctaTeam: "Susipažinti su komanda",
    aboutEyebrow: "Apie metodiką",
    aboutTitle: "Žmogaus vidinių resursų valdymas",
    aboutDescription: "Vaizduotės ir dėmesio praktikos, lavinančios erdvinį intelektą ir aktyvią savireguliaciją.",
    coursesEyebrow: "Mokymosi kelias",
    coursesTitle: "Kursai",
    coursesDescription: "Kiekvienas kursas papildo ankstesnį — nuo Tesseract iki Trans-Former instrumentų.",
    testimonialsEyebrow: "Patirtys",
    testimonialsTitle: "Atsiliepimai",
    testimonialsDescription: "Ką sako metodikos dalyviai.",
    ctaTitle: "Pasiruošę pradėti kelionę?",
    ctaDescription: "Susisiekite su instruktoriais arba sužinokite daugiau apie metodikos autorių.",
    ctaButton: "Autorius ir instruktoriai",
  },
  teamPage: {
    title: "Autorius ir instruktoriai",
    description: "Susisiekite tiesiogiai — kiekvienas instruktorius veda Tesseract kursus savo regione.",
    metaDescription: "Hypercube metodikos autorius Tomas Jacinkevičius ir sertifikuoti Tesseract instruktoriai.",
    eyebrow: "Komanda",
    authorSection: "Autorius",
    instructorsSection: "Instruktoriai",
    contactHint: "Susisiekite tiesiogiai",
  },
  intro: [
    "„Hypercube“ metodika skirta susipažinti su žmogaus vidinių resursų potencialu, įgyti jo atskleidimui skirtus instrumentus ir sukurti vidinio valdymo sistemą. Vaizduotės ir dėmesio valdymo praktikos lavina erdvinį ir vizualinį intelektus bei daugiamatį suvokimą.",
    "Išugdyti aktyvios savireguliacijos įgūdžiai padeda atsverti išorinio valdymo poveikį ir turėti norimą kiekį bei kokybę energijos, reikalingos tiems, kas nori SAU leisti daugiau.",
    "Metodikos pagrindą sudaro skirtingų vienas kitą papildančių kursų sistema. Kiekvienas kursas yra savipakankamas, vysto atitinkamus įgūdžius, suformuoja skirtingo lygio instrumentus ir praplečia savireguliacijos bei sąveikos su žmonėmis ir pasauliu galimybes.",
  ],
  courses: [
    {
      id: "tesseract",
      title: "Tesseract",
      subtitle: "Pirmasis žingsnis",
      description: [
        "Pirmasis žingsnis į „Hypercube“ metodiką. Kursą gali lankyti kiekvienas norintis.",
        "Praktikų metu lavinamas išskaidytas erdvinis dėmesys ir valdoma vaizduotė, suformuojamas dinamiškas 3D vidinis instrumentas „Tesseract“.",
      ],
      benefits: [
        "geriau valdyti save ir situacijas",
        "lengviau struktūruoti didelius kiekius informacijos",
        "naudotis apimtinio mastymo galimybėmis",
        "kūrybiškiau spręsti gyvenimo iššūkius",
      ],
      format: "3 mėnesiai",
      schedule: "12 kas savaitinių susitikimų po 2 valandas internetu. Savarankiška praktika: kasdien po 3 minutes.",
      mediaAlt: "Tesseract vizualizacija",
      appLinkLabel: "„3D Hypercube“ aplikacija Android",
    },
    {
      id: "hypercube",
      title: "Hypercube",
      subtitle: "Antrasis žingsnis",
      prerequisite: "Reikalingas suformuotas „Tesseract“ instrumentas",
      description: [
        "Antrasis žingsnis „Hypercube“ metodikos įvaldymui.",
        "Atskleidžiami vidiniai kūno, emocijų, sąmonės ir savitapatumo resursai. Suformuojamas keturmatis instrumentas „Hypercube“.",
      ],
      benefits: [
        "turėti norimos kokybės energijos per keliolika sekundžių",
        "gyventi energijos pertekliuje",
        "struktūriškai keisti savo suvokimą",
        "naudotis erdvinio mastymo metodu",
        "patirti visumos efektą",
      ],
      format: "5 mėnesiai",
      schedule: "20 kas savaitinių susitikimų internetu. 4 ir 6 dienų gyvi susitikimai (galima online).",
      mediaAlt: "Hypercube animacija",
    },
    {
      id: "hypersfere",
      title: "Hypersferė",
      subtitle: "Trečiasis žingsnis",
      prerequisite: "Reikalingi „Tesseract“ ir „Hypercube“ instrumentai",
      description: [
        "Lavinami jėga ir jautrumas, mokomasi suvokti savo ir kitų subjektyvumą.",
        "Profesionaliai įvaldę erdviškumą, dalyviai galingai ir subtiliai sąveikauja su vidine ir išorine tikrove.",
      ],
      format: "3 mėnesiai",
      schedule: "Kas savaitiniai susitikimai internetu. 6 dienų gyvas susitikimas (galima online).",
      mediaAlt: "Hypersferė animacija",
    },
    {
      id: "trans-former",
      title: "Trans-Former",
      subtitle: "Ketvirtasis žingsnis",
      prerequisite: "Reikalingi „Tesseract“, „Hypercube“ ir „Hypersferė“ instrumentai",
      description: [
        "Suformuojami sudėtingi daugiaapimčiai instrumentai rezonansinei sąveikai su vidinės ir išorinės tikrovės apimtimis.",
      ],
      format: "3 mėnesiai",
      schedule: "Kas savaitiniai susitikimai internetu. 6 dienų gyvas susitikimas (galima online).",
      mediaAlt: "Trans-Former vizualizacija",
    },
  ],
  testimonials: [
    {
      author: "Liudmila",
      quote:
        "Metodika „Hypercube“ padeda suformuoti aktyvios dinamiškos savireguliacijos įgūdžius, skirtus realiose situacijose turėti norimos kokybės energijos, reikalingos reaguoti į gyvenimo iššūkius. Dėka žmogaus smegenų neuroplastiškumo metodikos „Hypercube“ praktikos leidžia pereiti į vidinio valdymo rėžimą ir atsverti manipuliatyvų išorinio valdymo poveikį, kas ypač aktualu virtualios realybės plėtros sąlygomis. Valdoma vaizduotė ir struktūruotas sąmoningas dėmesingumas – kelias į sisteminio mąstymo prabangą tiems, kas nori SAU leisti daugiau.",
    },
    {
      author: "Vika",
      quote:
        "„Hiperkubo“ metodika neturi ribų, ji pilna galimybių. Naudoti ypač lengva ir žaisminga. Juk vis tik svarbiausia „valdyti“ savo dėmesį, o gal tiksliau sakant matyti, kur jis krypsta ir ar tai tikrai tai, ko noriu šiuo metu, nes kartais verta dėmesį praplėsti ir nukreipti norima linkme. Ačiū Gita Ramana už praktinį įgūdį, kuris leidžia praplėsti savo galimybes.",
    },
    {
      author: "Eglė",
      quote:
        "Šio kurso metu išmokau akimirksniu atsidurti čia ir dabar, išplėsti savo vidinę erdvę, keisti ją taip kaip noriu pati, išmokau realiai pasinaudoti žmonijos sukaupta patirtimi praturtindama savo pasaulį. Kūnas taip pat dėkoja, nes ši metodika leidžia be galo maloniai jį suaktyvinti ir gal net gydyti. Labai rekomenduoju ir didelis AČIŪ!",
    },
    {
      author: "Lina",
      quote:
        "Labai įdomus mokymas ir pati metodika, kurios dėka galite stipriai išlavinti savo vaizduotę. O jei turi valdomą vaizduotę, gali gyventi pagal savo svajones ir naujus impulsus. Šiame mokyme minimum teorijos ir maksimum praktikų, ir labai įdomu, kad kiekviena pamoka yra vis kita, nauja, įdomi — tikrai nereikės nuobodžiauti tam pačiam :))) Dar labai puiku, kad praktikuojama ne tik su vaizduote, bet ir su pojūčiais. Linkiu smagių patyrimų ir atradimų! Ir beje, puikiai veikia online :)))",
    },
  ],
  author: {
    id: "author",
    name: "Tomas Jacinkevičius",
    role: "Metodikos autorius",
    location: "Lietuva",
    bio: [
      "Virš 30 metų tyrinėja vidinius žmogaus resursus. Pagrindas — DFB metodika „Ugninė gėlė“ (Igoris Kalinauskas). Instruktorius nuo 1993 m.",
      "Nuo 2001 m. dėsto autorinę „RANKŲ“ metodiką. Nuo 2014 m. INK laboratorijoje sukūrė Hypercube metodiką — 4-matį DFB.",
      "Metodika dėstoma nuo 2017 m. Ja naudojasi daugiau nei 400 žmonių visame pasaulyje.",
    ],
  },
  instructors: [
    { id: "gita", name: "Gita Ramana", role: "„Tesseract“ instruktorė", location: "Lietuva" },
    { id: "rimas", name: "Rimas Dubickas", role: "„Tesseract“ instruktorius", location: "Norvegija" },
    { id: "milda", name: "Milda Jonikaitė", role: "„Tesseract“ instruktorė", location: "Norvegija" },
    { id: "uliana", name: "Uliana Khodorivska", role: "„Tesseract“ instruktorė", location: "Ukraina" },
  ],
  common: {
    format: "Formatas",
    schedule: "Tvarkaraštis",
    email: "El. paštas",
    facebook: "Facebook",
    testimonialPrev: "Ankstesnis atsiliepimas",
    testimonialNext: "Kitas atsiliepimas",
    testimonialSelect: "Pasirinkti atsiliepimą",
    footerNav: "Navigacija",
    footerAbout: "Metodika",
    footerTagline: "Vaizduotės ir dėmesio valdymo praktikos.",
    logoAlt: "Hypercube logotipas",
    language: "Kalba",
  },
  footer: {
    methodology: "Autorius Tomas Jacinkevičius. Vaizduotės ir dėmesio valdymo praktikos tiems, kas nori SAU leisti daugiau.",
  },
};

export default t;
