import type { Translation } from "../types";

const t: Translation = {
  locale: "sk",
  site: {
    name: "Hypercube",
    tagline: "Pre tých, ktorí si chcú dovoliť viac",
    description: "Metodika riadenia vnútorných zdrojov človeka — praktiky predstavivosti, pozornosti a sebaregulácie.",
    author: "Tomas Jacinkevičius",
  },
  nav: {
    about: "O metodike",
    courses: "Kurzy",
    testimonials: "Referencie",
    team: "Autor a inštruktori",
    menu: "Menu",
  },
  home: {
    heroEyebrow: "Metodika riadenia vnútorných zdrojov",
    ctaCourses: "Prezrieť kurzy",
    ctaTeam: "Spoznať tím",
    aboutEyebrow: "O metodike",
    aboutTitle: "Riadenie vnútorných zdrojov človeka",
    aboutDescription: "Praktiky predstavivosti a pozornosti rozvíjajúce priestorovú inteligenciu a aktívnu sebareguláciu.",
    coursesEyebrow: "Cesta učenia",
    coursesTitle: "Kurzy",
    coursesDescription: "Každý kurz nadväzuje na predchádzajúci — od Tesseract po nástroje Trans-Former.",
    testimonialsEyebrow: "Skúsenosti",
    testimonialsTitle: "Referencie",
    testimonialsDescription: "Čo hovoria účastníci metodiky.",
    ctaTitle: "Pripravení začať cestu?",
    ctaDescription: "Kontaktujte inštruktorov alebo sa dozviete viac o autorovi metodiky.",
    ctaButton: "Autor a inštruktori",
  },
  teamPage: {
    title: "Autor a inštruktori",
    description: "Kontaktujte priamo — každý inštruktor vedie kurzy Tesseract vo svojom regióne.",
    metaDescription: "Autor metodiky Hypercube Tomas Jacinkevičius a certifikovaní inštruktori Tesseract.",
    eyebrow: "Tím",
    authorSection: "Autor",
    instructorsSection: "Inštruktori",
    contactHint: "Kontaktujte priamo",
  },
  intro: [
    "Metodika Hypercube je určená na spoznanie potenciálu vnútorných zdrojov človeka, získanie nástrojov na ich odhalenie a vytvorenie systému vnútorného riadenia. Praktiky riadenia predstavivosti a pozornosti rozvíjajú priestorovú a vizuálnu inteligenciu a viacrozmerné vnímanie.",
    "Rozvinuté zručnosti aktívnej sebaregulácie pomáhajú odolávať vonkajšiemu ovplyvňovaniu a mať požadované množstvo a kvalitu energie pre tých, ktorí si chcú dovoliť viac.",
    "Základom metodiky je systém vzájomne doplňujúcich sa kurzov. Každý kurz je sebestačný, rozvíja príslušné zručnosti, formuje nástroje rôznej úrovne a rozširuje možnosti sebaregulácie a interakcie s ľuďmi a svetom.",
  ],
  courses: [
    {
      id: "tesseract",
      title: "Tesseract",
      subtitle: "Prvý krok",
      description: [
        "Prvý krok do metodiky Hypercube. Kurzu sa môže zúčastniť každý, kto má záujem.",
        "Počas praktík sa rozvíja rozčlenená priestorová pozornosť a riadená predstavivosť, formuje sa dynamický 3D vnútorný nástroj „Tesseract“.",
      ],
      benefits: [
        "lepšie riadiť seba a situácie",
        "ľahšie štruktúrovať veľké množstvá informácií",
        "využívať možnosti objemového myslenia",
        "kreatívnejšie riešiť životné výzvy",
      ],
      format: "3 mesiace",
      schedule: "12 týždenných online stretnutí po 2 hodinách. Samostatná prax: 3 minúty denne.",
      mediaAlt: "Vizualizácia Tesseract",
      appLinkLabel: "Aplikácia „3D Hypercube“ pre Android",
    },
    {
      id: "hypercube",
      title: "Hypercube",
      subtitle: "Druhý krok",
      prerequisite: "Vyžaduje vytvorený nástroj „Tesseract“",
      description: [
        "Druhý krok v osvojovaní metodiky Hypercube.",
        "Odhaľujú sa vnútorné zdroje tela, emócií, vedomia a sebaidentifikácie. Formuje sa štvorrozmerný nástroj „Hypercube“.",
      ],
      benefits: [
        "mať energiu požadovanej kvality počas niekoľkých sekúnd",
        "žiť v prebytku energie",
        "štrukturálne meniť svoje vnímanie",
        "využívať metódu priestorového myslenia",
        "zažívať efekt celistvosti",
      ],
      format: "5 mesiacov",
      schedule: "20 týždenných online stretnutí. 4- a 6-dňové osobné stretnutia (možnosť online).",
      mediaAlt: "Animácia Hypercube",
    },
    {
      id: "hypersfere",
      title: "Hypersphere",
      subtitle: "Tretí krok",
      prerequisite: "Vyžadujú sa nástroje „Tesseract“ a „Hypercube“",
      description: [
        "Rozvíja sa sila a citlivosť, účastníci sa učia vnímať svoju aj cudziu subjektivitu.",
        "Po profesionálnom zvládnutí priestorovosti účastníci silno a jemne interagujú s vnútornou a vonkajšou realitou.",
      ],
      format: "3 mesiace",
      schedule: "Týždenné online stretnutia. 6-dňové osobné stretnutie (možnosť online).",
      mediaAlt: "Animácia Hypersphere",
    },
    {
      id: "trans-former",
      title: "Trans-Former",
      subtitle: "Štvrtý krok",
      prerequisite: "Vyžadujú sa nástroje „Tesseract“, „Hypercube“ a „Hypersphere“",
      description: [
        "Formujú sa zložité viacrozmerné nástroje na rezonančnú interakciu s dimenziami vnútornej a vonkajšej reality.",
      ],
      format: "3 mesiace",
      schedule: "Týždenné online stretnutia. 6-dňové osobné stretnutie (možnosť online).",
      mediaAlt: "Vizualizácia Trans-Former",
    },
  ],
  testimonials: [
    {
      author: "Liudmila",
      quote:
        "Metodika Hypercube pomáha vytvoriť zručnosti aktívnej, dynamickej sebaregulácie — aby ste v reálnom živote mali energiu potrebnej kvality na reakciu na životné výzvy. Vďaka neuroplasticite mozgu praktiky Hypercube umožňujú prejsť do režimu vnútorného riadenia a vzdorovať manipulatívnemu vonkajšiemu vplyvu — obzvlášť aktuálne v podmienkach rastúcej virtuálnej reality. Ovládaná predstavivosť a štruktúrovaná vedomá pozornosť — cesta k luxusu systémového myslenia pre tých, čo si chcú dovoliť viac.",
    },
    {
      author: "Vika",
      quote:
        "Metodika Hypercube nemá hraníc — je plná možností. Používa sa obzvlášť ľahko a hravo. Veď najdôležitejšie je „riadiť“ svoju pozornosť — alebo presnejšie vidieť, kam smeruje a či je to naozaj to, čo práve teraz chcem; niekedy stojí za to pozornosť rozšíriť a nasmerovať ju, kam si želám. Ďakujem, Gita Ramana, za praktickú zručnosť, ktorá rozširuje moje možnosti.",
    },
    {
      author: "Eglė",
      quote:
        "Počas tohto kurzu som sa naučila okamžite byť tu a teraz, rozšíriť svoj vnútorný priestor a meniť ho, ako sama chcem. Naučila som sa skutočne využiť ľudskú skúsenosť a obohacovať svoj svet. Telo tiež ďakuje — táto metodika umožňuje príjemne ho aktivovať a dokonca liečiť. Veľmi odporúčam — veľké ĎAKUJEM!",
    },
    {
      author: "Lina",
      quote:
        "Veľmi zaujímavé školenie a samotná metodika, vďaka ktorej môžete silno rozvinúť svoju predstavivosť. A keď máte predstavivosť pod kontrolou, môžete žiť podľa svojich snov a nových impulzov. Minimum teórie, maximum praxe — a skvelé, že každá lekcia je iná, nová, zaujímavá; rozhodne sa nebudete nudiť stále tým istým :))) Ešte skvelé, že cvičíme nielen s predstavivosťou, ale aj s pocitovým vnímaním. Prajem radostné prežívania a objavy! A mimochodom — online to funguje skvele :)))",
    },
  ],
  author: {
    id: "author",
    name: "Tomas Jacinkevičius",
    role: "Autor metodiky",
    location: "Litva",
    bio: [
      "Viac ako 30 rokov skúma vnútorné zdroje človeka. Základ — metodika DFB „Ohnivá kvetina“ (Igoris Kalinauskas). Inštruktor od roku 1993.",
      "Od roku 2001 vyučuje autorskú metodiku „RANKŲ“. Od roku 2014 v laboratóriu INK vytvoril metodiku Hypercube — 4rozmerný DFB.",
      "Metodika sa vyučuje od roku 2017. Používa ju viac ako 400 ľudí po celom svete.",
    ],
  },
  instructors: [
    { id: "gita", name: "Gita Ramana", role: "Inštruktorka „Tesseract“", location: "Litva" },
    { id: "rimas", name: "Rimas Dubickas", role: "Inštruktor „Tesseract“", location: "Nórsko" },
    { id: "milda", name: "Milda Jonikaitė", role: "Inštruktorka „Tesseract“", location: "Nórsko" },
    { id: "uliana", name: "Uliana Khodorivska", role: "Inštruktorka „Tesseract“", location: "Ukrajina" },
  ],
  common: {
    format: "Formát",
    schedule: "Rozvrh",
    email: "E-mail",
    facebook: "Facebook",
    testimonialPrev: "Predchádzajúca referencia",
    testimonialNext: "Ďalšia referencia",
    testimonialSelect: "Vybrať referenciu",
    footerNav: "Navigácia",
    footerAbout: "Metodika",
    footerTagline: "Praktiky riadenia predstavivosti a pozornosti.",
    logoAlt: "Logo Hypercube",
    language: "Jazyk",
  },
  footer: {
    methodology: "Autor Tomas Jacinkevičius. Praktiky riadenia predstavivosti a pozornosti pre tých, ktorí si chcú dovoliť viac.",
  },
};

export default t;
