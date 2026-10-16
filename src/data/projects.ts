export type Locale = 'fr' | 'en';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  role: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  stack: string[];
  year: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: 'plateforme-paiement',
    title: {fr: 'Plateforme de paiement', en: 'Payment platform'},
    summary: {
      fr: 'Dashboard de gestion et intégration de solutions de paiement mobile.',
      en: 'Management dashboard and mobile payment integrations.'
    },
    description: {
      fr: "Participation à la conception d'un dashboard de gestion pour une plateforme de paiement. Intégration de nouveaux modules en React, TypeScript et API REST, migration d'intégrations de paiement mobile (Orange Money, MTN Mobile Money) vers un backend plus récent, et mise en place d'un système de planification et de relance automatique des transactions échouées.",
      en: 'Contributed to the design of a management dashboard for a payment platform. Built new modules in React, TypeScript and REST API, migrated mobile payment integrations (Orange Money, MTN Mobile Money) to a newer backend, and implemented a scheduler with automatic retry for failed transactions.'
    },
    role: {fr: 'Développeuse frontend', en: 'Frontend developer'},
    highlights: {
      fr: [
        'Modules React + TypeScript réutilisables',
        'Migration d’intégrations de paiement mobile',
        'Système de retry automatique des transactions',
        'Collaboration back-end et produit'
      ],
      en: [
        'Reusable React + TypeScript modules',
        'Mobile payment integration migration',
        'Automatic transaction retry system',
        'Backend and product collaboration'
      ]
    },
    stack: ['React', 'TypeScript', 'API REST', 'Tailwind'],
    year: '2024 – 2025'
  },
  {
    slug: 'plateforme-emploi',
    title: {fr: 'Plateforme d’emploi', en: 'Job platform'},
    summary: {
      fr: 'Mise en relation candidats / recruteurs, interfaces fidèles au design.',
      en: 'Candidate / recruiter matching, pixel-perfect interfaces.'
    },
    description: {
      fr: "Développement d'interfaces utilisateur fidèles aux maquettes pour une plateforme d'emploi. Mise en place de fonctionnalités de mise en relation entre candidats et recruteurs, optimisation de l'expérience utilisateur et intégration avec une API Node.js.",
      en: 'Built pixel-perfect user interfaces from mockups for a job platform. Implemented candidate / recruiter matching features, improved UX, and integrated with a Node.js API.'
    },
    role: {fr: 'Développeuse frontend', en: 'Frontend developer'},
    highlights: {
      fr: ['Interfaces fidèles aux maquettes', 'Logique de matching', 'Intégration API Node.js'],
      en: ['Pixel-perfect interfaces', 'Matching logic', 'Node.js API integration']
    },
    stack: ['Next.js', 'Node.js', 'Tailwind'],
    year: '2024 – 2025'
  },
  {
    slug: 'bibliotheque-numerique',
    title: {fr: 'Bibliothèque numérique', en: 'Digital library'},
    summary: {
      fr: 'Application de gestion de bibliothèque, interface utilisateur soignée.',
      en: 'Library management app with a refined UI.'
    },
    description: {
      fr: "Application de gestion de bibliothèque pensée pour les équipes internes : catalogue, recherche, fiches détaillées. Travail approfondi sur la fidélité au design et la fluidité des interactions.",
      en: 'Library management application designed for internal teams: catalogue, search, detail pages. Deep focus on design fidelity and interaction smoothness.'
    },
    role: {fr: 'Développeuse frontend', en: 'Frontend developer'},
    highlights: {
      fr: ['Catalogue et recherche', 'Fidélité au design', 'Interactions fluides'],
      en: ['Catalogue and search', 'Design fidelity', 'Smooth interactions']
    },
    stack: ['React', 'TypeScript', 'Tailwind'],
    year: '2024 – 2025'
  },
  {
    slug: 'plateforme-votes',
    title: {fr: 'Plateforme de votes', en: 'Voting platform'},
    summary: {
      fr: 'Reproduction d’une plateforme de découverte de produits avec votes dynamiques.',
      en: 'Clone of a product discovery platform with dynamic voting.'
    },
    description: {
      fr: "Projet de validation : reproduction des fonctionnalités principales d'une plateforme de découverte de produits — gestion des produits, votes, interface dynamique. Objectif : maîtriser la gestion d'états complexes et les interactions temps réel côté front.",
      en: 'Validation project: rebuilt the core features of a product discovery platform — product management, voting, dynamic UI. Goal: master complex state management and real-time front-end interactions.'
    },
    role: {fr: 'Développeuse frontend', en: 'Frontend developer'},
    highlights: {
      fr: ['Gestion de produits', 'Système de votes', 'Interface dynamique'],
      en: ['Product management', 'Voting system', 'Dynamic interface']
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    year: '2025'
  }
];