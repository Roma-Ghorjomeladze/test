export const navigation = {
  angebot: {
    index: 1,
    default: {
      label: 'Angebot',
      href: '/angebot',
      isNotLink: true,
    },
    options: [
      {
        label: 'Craniosacral Therapie',
        href: '/angebot/craniosacral-therapie',
        index: 1,
        options: [
          {
            label: 'Schwangerschaft',
            href: '/angebot/craniosacral-therapie/schwangerschaft',
            index: 'a',
          },
          {
            label: 'Nach der Geburt',
            href: '/angebot/craniosacral-therapie/nach-der-geburt',
            index: 'b',
          },
          {
            label: 'Kinder und Familien',
            href: '/angebot/craniosacral-therapie/kinder-und-familien',
            index: 'c',
          },

          {
            label: 'Anwendungsbereiche',
            href: '/angebot/craniosacral-therapie/anwendungsbereiche',
            index: 'd',
          },
        ],
      },
      {
        label: 'Pränatal therapie',
        href: '/angebot/praental-therapie',
        index: 2,
      },
      {
        label: 'Prozessbegleitung',
        href: '/angebot/prozessbegleitung',
        index: 3,
      },
      {
        label: 'Systemische-Arbeit',
        href: '/angebot/systemische-arbeit',
        index: 4,
      },

      {
        label: 'Trauma-Arbeit',
        href: '/angebot/trauma-arbeit',
        index: 5,
      },
      {
        label: 'Astrologische Psychologie',
        href: '/angebot/astrologische-psychologie',
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
        href: '/organisationals/ablauf-einer-sitzung',
        index: 1,
      },
      {
        label: 'Kosten und Krankenkasse',
        href: '/organisationals/kosten-und-krankenkasse',
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
      href: '/andrea-schuppli',
      index: 1,
    },
    index: 3,
    options: [
      {
        label: 'Vita',
        href: '/andrea-schuppli',
        index: 1,
      },
    ],
  },
  other: {
    default: {
      label: 'Sonstiges',
      href: '/sonstiges',
      index: 1,
      isNotLink: true,
    },
    index: 4,
    options: [
      {
        label: 'Wasserfilter',
        href: '/sonstiges/wasserfilter',
        index: 1,
      },
      {
        label: 'Kunst',
        href: '/sonstiges/kunst',
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
    options: [],
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
