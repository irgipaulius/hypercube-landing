import type { Translation } from "../types";

const t: Translation = {
  locale: "pl",
  site: {
    name: "Hypercube",
    tagline: "Dla tych, którzy chcą pozwolić sobie na więcej",
    description: "Metodyka zarządzania wewnętrznymi zasobami człowieka — praktyki wyobraźni, uwagi i samoregulacji.",
    author: "Tomas Jacinkevičius",
  },
  nav: {
    about: "O metodyce",
    courses: "Kursy",
    testimonials: "Opinie",
    team: "Autor i instruktorzy",
    menu: "Menu",
  },
  home: {
    heroEyebrow: "Metodyka zarządzania wewnętrznymi zasobami",
    ctaCourses: "Zobacz kursy",
    ctaTeam: "Poznaj zespół",
    aboutEyebrow: "O metodyce",
    aboutTitle: "Zarządzanie wewnętrznymi zasobami człowieka",
    aboutDescription: "Praktyki wyobraźni i uwagi rozwijające inteligencję przestrzenną i aktywną samoregulację.",
    coursesEyebrow: "Ścieżka nauki",
    coursesTitle: "Kursy",
    coursesDescription: "Każdy kurs uzupełnia poprzedni — od Tesseract po narzędzia Trans-Former.",
    testimonialsEyebrow: "Doświadczenia",
    testimonialsTitle: "Opinie",
    testimonialsDescription: "Co mówią uczestnicy metodyki.",
    ctaTitle: "Gotowi rozpocząć podróż?",
    ctaDescription: "Skontaktuj się z instruktorami lub dowiedz się więcej o autorze metodyki.",
    ctaButton: "Autor i instruktorzy",
  },
  teamPage: {
    title: "Autor i instruktorzy",
    description: "Skontaktuj się bezpośrednio — każdy instruktor prowadzi kursy Tesseract w swoim regionie.",
    metaDescription: "Autor metodyki Hypercube Tomas Jacinkevičius i certyfikowani instruktorzy Tesseract.",
    eyebrow: "Zespół",
    authorSection: "Autor",
    instructorsSection: "Instruktorzy",
    contactHint: "Skontaktuj się bezpośrednio",
  },
  intro: [
    "Metodyka Hypercube służy do poznania potencjału wewnętrznych zasobów człowieka, zdobycia narzędzi do ich ujawniania i stworzenia systemu wewnętrznego zarządzania. Praktyki zarządzania wyobraźnią i uwagą rozwijają inteligencję przestrzenną i wizualną oraz wielowymiarową percepcję.",
    "Rozwinięte umiejętności aktywnej samoregulacji pomagają przeciwstawiać się zewnętrznemu wpływowi i mieć pożądaną ilość i jakość energii dla tych, którzy chcą pozwolić sobie na więcej.",
    "Podstawę metodyki stanowi system wzajemnie uzupełniających się kursów. Każdy kurs jest samowystarczalny, rozwija odpowiednie umiejętności, formuje narzędzia różnych poziomów i poszerza możliwości samoregulacji oraz interakcji z ludźmi i światem.",
  ],
  courses: [
    {
      id: "tesseract",
      title: "Tesseract",
      subtitle: "Pierwszy krok",
      description: [
        "Pierwszy krok w metodykę Hypercube. Kurs może uczęszczać każdy chętny.",
        "Podczas praktyk rozwija się rozproszona uwaga przestrzenna i kontrolowana wyobraźnia, formuje się dynamiczne wewnętrzne narzędzie 3D „Tesseract“.",
      ],
      benefits: [
        "lepiej zarządzać sobą i sytuacjami",
        "łatwiej strukturyzować duże ilości informacji",
        "korzystać z możliwości myślenia objętościowego",
        "kreatywniej rozwiązywać wyzwania życiowe",
      ],
      format: "3 miesiące",
      schedule: "12 cotygodniowych spotkań online po 2 godziny. Samodzielna praktyka: 3 minuty dziennie.",
      mediaAlt: "Wizualizacja Tesseract",
      appLinkLabel: "Aplikacja „3D Hypercube“ na Androida",
    },
    {
      id: "hypercube",
      title: "Hypercube",
      subtitle: "Drugi krok",
      prerequisite: "Wymagane uformowane narzędzie „Tesseract“",
      description: [
        "Drugi krok w opanowaniu metodyki Hypercube.",
        "Ujawniane są wewnętrzne zasoby ciała, emocji, świadomości i tożsamości. Formuje się czterowymiarowe narzędzie „Hypercube“.",
      ],
      benefits: [
        "mieć energię pożądanej jakości w ciągu kilku sekund",
        "żyć w nadmiarze energii",
        "strukturalnie zmieniać swoją percepcję",
        "korzystać z metody myślenia przestrzennego",
        "doświadczać efektu całości",
      ],
      format: "5 miesięcy",
      schedule: "20 cotygodniowych spotkań online. 4- i 6-dniowe spotkania stacjonarne (możliwość online).",
      mediaAlt: "Animacja Hypercube",
    },
    {
      id: "hypersfere",
      title: "Hypersphere",
      subtitle: "Trzeci krok",
      prerequisite: "Wymagane narzędzia „Tesseract“ i „Hypercube“",
      description: [
        "Rozwijana jest siła i wrażliwość, uczestnicy uczą się postrzegać własną i cudzą subiektywność.",
        "Po profesjonalnym opanowaniu przestrzenności uczestnicy potężnie i subtelnie wchodzą w interakcję z wewnętrzną i zewnętrzną rzeczywistością.",
      ],
      format: "3 miesiące",
      schedule: "Cotygodniowe spotkania online. 6-dniowe spotkanie stacjonarne (możliwość online).",
      mediaAlt: "Animacja Hypersphere",
    },
    {
      id: "trans-former",
      title: "Trans-Former",
      subtitle: "Czwarty krok",
      prerequisite: "Wymagane narzędzia „Tesseract“, „Hypercube“ i „Hypersphere“",
      description: [
        "Formowane są złożone wielowymiarowe narzędzia do rezonansowej interakcji z wymiarami wewnętrznej i zewnętrznej rzeczywistości.",
      ],
      format: "3 miesiące",
      schedule: "Cotygodniowe spotkania online. 6-dniowe spotkanie stacjonarne (możliwość online).",
      mediaAlt: "Wizualizacja Trans-Former",
    },
  ],
  testimonials: [
    {
      author: "Liudmila",
      quote:
        "Metodyka Hypercube pomaga wykształcić umiejętności aktywnej, dynamicznej samoregulacji — aby w realnym życiu mieć energię o pożądanej jakości, potrzebną do stawiania czoła wyzwaniom. Dzięki neuroplastyczności mózgu praktyki Hypercube pozwalają wejść w tryb wewnętrznego kierowania i przeciwstawiać się manipulacyjnemu wpływowi z zewnątrz — szczególnie ważne w czasach rosnącej wirtualnej rzeczywistości. Sterowana wyobraźnia i ustrukturyzowana, świadoma uwaga — to droga do luksusu myślenia systemowego dla tych, którzy chcą pozwolić sobie na więcej.",
    },
    {
      author: "Vika",
      quote:
        "Metodyka Hypercube nie ma granic — jest pełna możliwości. Korzysta się z niej wyjątkowo łatwo i w zabawny sposób. Przecież najważniejsze to „kierować” swoją uwagą — a właściwie widzieć, dokąd zmierza i czy to naprawdę jest to, czego teraz chcę; czasem warto poszerzyć uwagę i skierować ją tam, gdzie się chce. Dziękuję, Gita Ramana, za praktyczną umiejętność, która poszerza moje możliwości.",
    },
    {
      author: "Eglė",
      quote:
        "Podczas tego kursu nauczyłam się natychmiast być tu i teraz, poszerzać swoją wewnętrzną przestrzeń i zmieniać ją tak, jak sama chcę. Nauczyłam się naprawdę korzystać z ludzkiego doświadczenia, wzbogacając swój świat. Ciało też dziękuje — ta metodyka pozwala przyjemnie je aktywować, a nawet uzdrawiać. Bardzo polecam — wielkie DZIĘKUJĘ!",
    },
    {
      author: "Lina",
      quote:
        "Bardzo ciekawe szkolenie i sama metodyka, dzięki której można mocno rozwinąć wyobraźnię. A gdy masz wyobraźnię pod kontrolą — możesz żyć według swoich marzeń i nowych impulsów. Minimum teorii, maksimum praktyki — i świetnie, że każda lekcja jest inna, nowa, ciekawa; na pewno nie będzie nudno przy tym samym :))) Jeszcze wspaniale, że ćwiczymy nie tylko z wyobraźnią, ale i z odczuciami ciała. Życzę radosnych przeżyć i odkryć! A przy okazji — online działa świetnie :)))",
    },
  ],
  author: {
    id: "author",
    name: "Tomas Jacinkevičius",
    role: "Autor metodyki",
    location: "Litwa",
    bio: [
      "Od ponad 30 lat bada wewnętrzne zasoby człowieka. Podstawa — metodyka DFB „Ognisty kwiat“ (Igoris Kalinauskas). Instruktor od 1993 r.",
      "Od 2001 r. naucza autorskiej metodyki „RANKŲ“. Od 2014 r. w laboratorium INK stworzył metodykę Hypercube — 4-wymiarowy DFB.",
      "Metodyka jest nauczana od 2017 r. Korzysta z niej ponad 400 osób na całym świecie.",
    ],
  },
  instructors: [
    { id: "gita", name: "Gita Ramana", role: "Instruktorka „Tesseract“", location: "Litwa" },
    { id: "rimas", name: "Rimas Dubickas", role: "Instruktor „Tesseract“", location: "Norwegia" },
    { id: "milda", name: "Milda Jonikaitė", role: "Instruktorka „Tesseract“", location: "Norwegia" },
    { id: "uliana", name: "Uliana Khodorivska", role: "Instruktorka „Tesseract“", location: "Ukraina" },
  ],
  common: {
    format: "Format",
    schedule: "Harmonogram",
    email: "E-mail",
    facebook: "Facebook",
    testimonialPrev: "Poprzednia opinia",
    testimonialNext: "Następna opinia",
    testimonialSelect: "Wybierz opinię",
    footerNav: "Nawigacja",
    footerAbout: "Metodyka",
    footerTagline: "Praktyki zarządzania wyobraźnią i uwagą.",
    logoAlt: "Logo Hypercube",
    language: "Język",
  },
  footer: {
    methodology: "Autor Tomas Jacinkevičius. Praktyki zarządzania wyobraźnią i uwagą dla tych, którzy chcą pozwolić sobie na więcej.",
  },
};

export default t;
