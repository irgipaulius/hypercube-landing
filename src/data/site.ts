export const site = {
  name: "Hypercube",
  tagline: "Tiems, kas nori SAU leisti daugiau",
  description:
    "Žmogaus vidinių resursų valdymo metodika — vaizduotės, dėmesio ir savireguliacijos praktikos.",
  author: "Tomas Jacinkevičius",
  logo: "/wp-content/uploads/2022/09/paveikslelis-i-logo_.png",
  androidAppUrl:
    "https://play.google.com/store/apps/details?id=com.praktika.hypercube3d",
} as const;

export const intro = [
  "„Hypercube“ metodika skirta susipažinti su žmogaus vidinių resursų potencialu, įgyti jo atskleidimui skirtus instrumentus ir sukurti vidinio valdymo sistemą. Vaizduotės ir dėmesio valdymo praktikos lavina erdvinį ir vizualinį intelektus bei daugiamatį suvokimą.",
  "Išugdyti aktyvios savireguliacijos įgūdžiai padeda atsverti išorinio valdymo poveikį ir turėti norimą kiekį bei kokybę energijos, reikalingos tiems, kas nori SAU leisti daugiau.",
  "Metodikos pagrindą sudaro skirtingų vienas kitą papildančių kursų sistema. Kiekvienas kursas yra savipakankamas, vysto atitinkamus įgūdžius, suformuoja skirtingo lygio instrumentus ir praplečia savireguliacijos bei sąveikos su žmonėmis ir pasauliu galimybes.",
] as const;

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  benefits?: string[];
  format: string;
  schedule: string;
  media: { type: "video" | "image"; src: string; alt?: string };
  prerequisite?: string;
  appLink?: string;
};

export const courses: Course[] = [
  {
    id: "tesseract",
    title: "Tesseract",
    subtitle: "Pirmasis žingsnis",
    description: [
      "Pirmasis žingsnis į „Hypercube“ metodiką. Kursą gali lankyti kiekvienas norintis.",
      "Praktikų metu lavinamas išskaidytas erdvinis dėmesys ir valdoma vaizduotė, suformuojamas dinamiškas 3-matis vidinis instrumentas „Tesseract“.",
    ],
    benefits: [
      "geriau valdyti save ir situacijas",
      "lengviau struktūruoti didelius kiekius informacijos",
      "naudotis apimtinio mastymo galimybėmis",
      "kūrybiškiau pažvelgti į gyvenimo iššūkius ir rasti efektyviausius sprendimus",
    ],
    format: "3 mėnesiai",
    schedule:
      "12 kas savaitinių susitikimų po 2 valandas internetu. Savarankiška praktika: kasdien po 3 minutes kiekvieną valandą.",
    media: { type: "video", src: "/wp-content/uploads/2022/09/pavNR1.mp4", alt: "Tesseract vizualizacija" },
    appLink: site.androidAppUrl,
  },
  {
    id: "hypercube",
    title: "Hypercube",
    subtitle: "Antrasis žingsnis",
    prerequisite: "Reikalingas suformuotas „Tesseract“ instrumentas",
    description: [
      "Antrasis žingsnis „Hypercube“ metodikos įvaldymui.",
      "Praktikų metu atskleidžiami žmogaus vidiniai kūno, emocinės jausminės sferos, sąmonės ir savitapatumo resursai. Suformuojamas keturmačiais modeliais aprašytas dinamiškas vidinis instrumentas „Hypercube“.",
    ],
    benefits: [
      "turėti reikiamą kiekį norimos kokybės energijos per keliolika sekundžių",
      "gyventi energijos pertekliuje",
      "struktūriškai keisti savo suvokimą",
      "naudotis erdvinio mastymo kokybinių struktūrų metodu",
      "patirti visumos efektą",
    ],
    format: "5 mėnesiai",
    schedule:
      "20 kas savaitinių susitikimų internetu. 4 ir 6 dienų gyvi susitikimai intensyvioms situacijoms (galima dalyvauti online).",
    media: { type: "image", src: "/wp-content/uploads/2022/09/PavNr2.gif", alt: "Hypercube animacija" },
  },
  {
    id: "hypersfere",
    title: "Hypersferė",
    subtitle: "Trečiasis žingsnis",
    prerequisite: "Reikalingi „Tesseract“ ir „Hypercube“ instrumentai",
    description: [
      "Praktikų metu lavinami jėga ir jautrumas, mokomasi suvokti savo ir kitų subjektyvumą.",
      "Profesionaliai įvaldę erdviškumą, kurso dalyviai sugeba galingai ir subtiliai sąveikauti su tikrove — tiek išorine, tiek vidine.",
    ],
    format: "3 mėnesiai",
    schedule:
      "Kas savaitiniai susitikimai internetu. 6 dienų gyvas susitikimas intensyviai situacijai (galima online).",
    media: { type: "image", src: "/wp-content/uploads/2022/09/pavNR3.gif", alt: "Hypersferė animacija" },
  },
  {
    id: "trans-former",
    title: "Trans-Former",
    subtitle: "Ketvirtasis žingsnis",
    prerequisite: "Reikalingi „Tesseract“, „Hypercube“ ir „Hypersferė“ instrumentai",
    description: [
      "Suformuojami didelio sudėtingumo ir abstrakčių struktūrų daugiaapimtiniai instrumentai, skirti rezonansinėms sąveikoms su įvairiomis vidinės ir išorinės tikrovės apimtimis.",
    ],
    format: "3 mėnesiai",
    schedule:
      "Kas savaitiniai susitikimai internetu. 6 dienų gyvas susitikimas intensyviai situacijai (galima online).",
    media: { type: "video", src: "/wp-content/uploads/2022/09/PavNr4.mp4", alt: "Trans-Former vizualizacija" },
  },
];

export type Testimonial = { quote: string; author: string };

export const testimonials: Testimonial[] = [
  {
    author: "Liudmila",
    quote:
      "Metodika „Hypercube“ padeda suformuoti aktyvios dinamiškos savireguliacijos įgūdžius, skirtus realiose situacijose turėti norimos kokybės energijos. Valdoma vaizduotė ir struktūruotas sąmoningas dėmesingumas – kelias į sisteminio mąstymo prabangą.",
  },
  {
    author: "Vika",
    quote:
      "„Hiperkubo“ metodika neturi ribų, ji pilna galimybių. Naudoti ypač lengva ir žaisminga. Svarbiausia matyti, kur krypsta dėmesys — ir kartais jį praplėsti norima linkme. Ačiū Gita Ramana už praktinį įgūdį.",
  },
  {
    author: "Eglė",
    quote:
      "Išmokau akimirksniu atsidurti čia ir dabar, išplėsti savo vidinę erdvę, keisti ją taip, kaip noriu pati. Kūnas taip pat dėkoja — metodika leidžia maloniai jį suaktyvinti. Labai rekomenduoju.",
  },
  {
    author: "Lina",
    quote:
      "Labai įdomus mokymas — minimum teorijos, maksimum praktikų. Kiekviena pamoka vis kita, nauja, įdomi. Puiku, kad praktikuojama ne tik su vaizduote, bet ir su pojūčiais. Puikiai veikia online.",
  },
];

export type Person = {
  name: string;
  role: string;
  photo: string;
  location: string;
  phone?: string;
  bio?: string[];
  email?: string;
  facebook?: string;
  featured?: boolean;
};

export const author: Person = {
  name: "Tomas Jacinkevičius",
  role: "Metodikos autorius",
  photo: "/wp-content/uploads/2022/09/foto-NR1.jpg",
  location: "Lietuva",
  phone: "+37061184427",
  email: "tomas.jacinkevicius@gmail.com",
  facebook: "https://www.facebook.com/IRGITOMAS",
  featured: true,
  bio: [
    "Metodikos „Hypercube“ autorius virš 30 metų tyrinėja vidinius žmogaus resursus, jų lavinimo ir valdymo galimybes. Tyrinėjimų pagrindas — DFB metodika „Ugninė gėlė“ (Igoris Kalinauskas). Tomas aktyviai praktikuoja nuo 1992 m., o 1993 m. įgijo instruktoriaus kvalifikaciją.",
    "Nuo 1993 m. atlieka masažų praktiką, o nuo 2001 m. dėsto autorinę „RANKŲ“ metodiką. Nuo 2000 m. dirba Igorio Kalinausko Sodyboje „Jėgos vieta“. Nuo 2014 m. aktyviai dalyvavo INK laboratorijoje, kur sukūrė Hypercube metodiką — Igoris Kalinauskas ją pavadino 4-mačiu DFB.",
    "Metodika sėkmingai dėstoma nuo 2017 m. Ja naudojasi jau daugiau nei 400 žmonių iš viso pasaulio.",
  ],
};

export const instructors: Person[] = [
  {
    name: "Gita Ramana",
    role: "„Tesseract“ instruktorė",
    photo: "/wp-content/uploads/2022/09/fotoNR2.jpg",
    location: "Lietuva",
    phone: "+37067210540",
    email: "gita.ramane.gl@gmail.com",
    facebook: "https://www.facebook.com/GyvenimoLatoratorija",
  },
  {
    name: "Rimas Dubickas",
    role: "„Tesseract“ instruktorius",
    photo: "/wp-content/uploads/2024/06/viber_image_2024-06-23_20-48-14-761-e1719478439433.jpg",
    location: "Norvegija",
    phone: "+4746378519",
    email: "rimas.04@gmail.com",
    facebook: "https://m.facebook.com/rimas.tesseract/",
  },
  {
    name: "Milda Jonikaitė",
    role: "„Tesseract“ instruktorė",
    photo: "/wp-content/uploads/2024/06/milda.jpg",
    location: "Norvegija",
    phone: "+4796887384",
    email: "mjonikaite10@gmail.com",
    facebook: "https://m.facebook.com/milda.jonikaite.9/",
  },
  {
    name: "Uliana Khodorivska",
    role: "„Tesseract“ instruktorė",
    photo: "/wp-content/uploads/2022/09/fotoNR3.jpg",
    location: "Ukraina",
    phone: "+380675512455",
    email: "maslova.um@gmail.com",
    facebook: "https://www.facebook.com/khodorivska",
  },
];

export const nav = [
  { href: "/#apie", label: "Apie" },
  { href: "/#kursai", label: "Kursai" },
  { href: "/#atsiliepimai", label: "Atsiliepimai" },
  { href: "/author-and-instructors/", label: "Autorius ir instruktoriai" },
] as const;
