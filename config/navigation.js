export const navigation = {
  angebot: {
    index: 1,
    default: {
      label: 'Angebot',
      href: 'angebot',
      isNotLink: true,
    },
    options: [
      {
        label: 'Craniosacral Therapie',
        href: 'angebot/craniosacralTherapie',
        index: 1,
        options: [
          {
            label: 'Schwangerschaft',
            href: '/angebot/craniosacralTherapie/schwangerschaft',
            index: 'a',
          },
          {
            label: 'Nach Der Geburt',
            href: '/angebot/craniosacralTherapie/nachDerGeburt',
            index: 'b',
          },
          {
            label: 'Kinder und Familien',
            href: '/angebot/craniosacralTherapie/kinderUndFamilien',
            index: 'c',
          },

          {
            label: 'Anwendungsbereiche',
            href: '/angebot/craniosacralTherapie/anwendungsbereiche',
            index: 'd',
          },
        ],
      },
      {
        label: 'Pränataltherapie',
        href: '/angebot/prantalTherapie',
        index: 2,
      },
      {
        label: 'Prozessbegleitung',
        href: '/angebot/prozessbegleitung',
        index: 3,
      },
      {
        label: 'Systemische-Arbeit',
        href: '/angebot/systemischeArbeit',
        index: 4,
      },

      {
        label: 'Trauma-Arbeit',
        href: '/angebot/traumaArbeit',
        index: 5,
      },
      {
        label: 'Astrologische Psychologie',
        href: '/angebot/astrologischePsychologie',
        index: 6,
      },
    ],
  },
  organisationals: {
    default: {
      label: 'Organisatorisches',
      href: '/organisationals',
      index: 1,
      isNotLink: true,
    },
    index: 2,
    options: [
      {
        label: 'Ablauf einer Sitzung',
        href: '/organisationals/ablaufEinerSitzung',
        index: 1,
      },
      {
        label: 'Kosten und Krankenkasse',
        href: '/organisationals/kostenUndKrankenkasse',
        index: 2,
      },
      {
        label: 'Gutscheine',
        href: '/organisationals/gutscheine',
        index: 3,
      },
      {
        label: 'Klientenstimmen',
        href: '/organisationals/klientenstimmen',
        index: 4,
      },
      {
        label: 'Fachliteratur',
        href: '/organisationals/fachliteratur',
        index: 5,
      },
    ],
  },
  andrea: {
    default: {
      label: 'Andrea Schuppli',
      href: '/andrea',
      index: 1,
    },
    index: 3,
    options: [
      {
        label: 'Vita',
        href: '/andrea/vita',
        index: 1,
      },
    ],
  },
  other: {
    default: {
      label: 'Sonstiges',
      href: '/other',
      index: 1,
    },
    index: 4,
    options: [
      {
        label: 'Wasserfilter',
        href: '/other/wasserfilter',
        index: 1,
      },
      {
        label: 'Kunst',
        href: '/other/kunst',
        index: 2,
      },
    ],
  },
  contacts: {
    default: {
      label: 'Kontakt',
      href: '/contacts',
      index: 1,
    },
    index: 5,
    options: [
      {
        label: 'Praxis Schaffhausen',
        href: '/contacts/praxisSchaffhausen',
        index: 1,
      },
      {
        label: 'Praxis Frauenfeld',
        href: '/contacts/praxisFrauenfeld',
        index: 2,
      },
      {
        label: 'Termin vereinbaren',
        href: '/contacts/terminVereinbaren',
        index: 3,
      },
    ],
  },
}

export const homeNavigation = {
  default: {
    label: 'Home',
    href: '/',
  },
  options: [],
  index: 0,
}
