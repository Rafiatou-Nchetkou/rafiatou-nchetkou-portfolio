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
  cover?: string;
  chapters?: {
    title: Record<Locale, string>;
    body: Record<Locale, string>;
    image: string;
    alt: Record<Locale, string>;
  }[];
};

const projectYears = (year: string) => year.match(/\d{4}/g)?.map(Number) ?? [0];

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
    role: {fr: 'Contribution frontend', en: 'Frontend contributor'},
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
      fr: "Participation au développement d'interfaces utilisateur fidèles aux maquettes pour une plateforme d'emploi, aux fonctionnalités de mise en relation entre candidats et recruteurs, et à l'intégration avec une API Node.js.",
      en: 'Contributed to building interfaces from design mockups for a job platform, candidate / recruiter matching features, and integration with a Node.js API.'
    },
    role: {fr: 'Contribution frontend', en: 'Frontend contributor'},
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
      fr: "Participation au développement d'une application de gestion de bibliothèque pensée pour les équipes internes : catalogue, recherche et fiches détaillées, avec une attention portée à la fidélité au design et aux interactions.",
      en: 'Contributed to an internal library management application with a catalogue, search, and detailed records, with attention to design fidelity and interactions.'
    },
    role: {fr: 'Contribution frontend', en: 'Frontend contributor'},
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
      fr: "Participation à un projet de validation reproduisant les principales fonctionnalités d'une plateforme de découverte de produits : gestion des produits, votes et interface dynamique.",
      en: 'Contributed to a validation project recreating core features of a product discovery platform: product management, voting, and a dynamic interface.'
    },
    role: {fr: 'Contribution frontend', en: 'Frontend contributor'},
    highlights: {
      fr: ['Gestion de produits', 'Système de votes', 'Interface dynamique'],
      en: ['Product management', 'Voting system', 'Dynamic interface']
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    year: '2025'
  },
  {
    slug: 'allotech',
    title: {fr: 'AlloTech — backend & mobile', en: 'AlloTech — backend & mobile'},
    summary: {
      fr: 'Contribution au backend et à l’application mobile d’une plateforme de mise en relation avec des techniciens.',
      en: 'Backend and mobile contribution to a platform connecting clients with technicians.'
    },
    description: {
      fr: 'J’ai contribué au backend NestJS et à l’application mobile Flutter. Côté backend, mon activité comprend les statuts et horodatages des candidatures, la disponibilité des demandes et les informations de vérification des techniciens. Côté mobile, elle comprend l’intégration de la liste des techniciens sur l’accueil client, le parcours de profil incomplet et l’affichage des cartes et statuts de demandes.',
      en: 'I contributed to the NestJS backend and Flutter mobile app. My backend work includes application statuses and timestamps, request availability, and technician verification data. On mobile, it includes integrating the technician list into the client home screen, incomplete profile flows, and request cards and statuses.'
    },
    role: {fr: 'Contribution backend et mobile', en: 'Backend and mobile contributor'},
    highlights: {
      fr: ['Statuts et disponibilité des candidatures', 'Informations de vérification des techniciens', 'Intégration de la liste des techniciens dans l’accueil client', 'Cartes de demandes et statuts adaptés aux rôles'],
      en: ['Application statuses and availability rules', 'Technician verification data', 'Technician list integration on the client home screen', 'Role-aware request cards and statuses']
    },
    stack: ['NestJS', 'TypeScript', 'Flutter', 'Dart'],
    year: '2026'
  },
  {
    slug: 'kollecta',
    title: {fr: 'Kollecta — backend & mobile', en: 'Kollecta — backend & mobile'},
    summary: {
      fr: 'Contribution aux fonctions multi-organisation du backend et de l’application mobile.',
      en: 'Contribution to multi-organization features across the backend and mobile app.'
    },
    description: {
      fr: 'Sur le backend, j’ai travaillé sur la résolution du tenant, le provisionnement et la personnalisation par organisation, ainsi que sur des outils Platform Admin pour l’audit, la facturation, la santé du système et la gestion des utilisateurs. Sur le mobile, j’ai contribué à la résolution du tenant à l’exécution, à la personnalisation de l’écran de connexion et aux correctifs de configuration pour les essais locaux.',
      en: 'On the backend, I worked on tenant resolution, provisioning and organization branding, along with Platform Admin tools for audit, billing, system health, and user management. On mobile, I contributed to runtime tenant resolution, login screen branding, and configuration fixes for local testing.'
    },
    role: {fr: 'Contribution backend et mobile', en: 'Backend and mobile contributor'},
    highlights: {
      fr: ['Résolution du tenant et configuration multi-organisation', 'Provisionnement et personnalisation par organisation', 'Outils Platform Admin : audit, facturation et santé système', 'Résolution du tenant et personnalisation sur mobile'],
      en: ['Tenant resolution and multi-organization configuration', 'Provisioning and organization branding', 'Platform Admin tools for audit, billing, and system health', 'Mobile tenant resolution and organization branding']
    },
    stack: ['TypeScript', 'React Native', 'Expo'],
    year: '2026'
  },
  {
    slug: 'minitransfer',
    title: {fr: 'MiniTransfer', en: 'MiniTransfer'},
    summary: {fr: 'Application de portefeuille et de transfert d’argent avec historique des opérations.', en: 'A wallet and money transfer application with transaction history.'},
    description: {fr: 'Application Flutter connectée à une API Spring Boot. Le dépôt décrit l’inscription, la connexion JWT, les transferts par e-mail ou téléphone et l’historique des transactions.', en: 'A Flutter application connected to a Spring Boot API. The repository describes registration, JWT login, transfers by email or phone, and transaction history.'},
    role: {fr: 'Développement de l’application', en: 'Application development'},
    highlights: {fr: ['Inscription et connexion JWT', 'Transferts par e-mail ou téléphone', 'Historique des transactions'], en: ['Registration and JWT login', 'Transfers by email or phone', 'Transaction history']},
    stack: ['Flutter', 'Java', 'Spring Boot', 'MongoDB', 'JWT'],
    year: '2026',
    repo: 'https://github.com/Rafiatou-Nchetkou/minitransfer',
    cover: '/projects/minitransfer-wallet.svg',
    chapters: [
      {title: {fr: 'Le problème', en: 'The problem'}, body: {fr: 'Le projet explore un parcours mobile simple pour créer un compte, consulter un solde et envoyer de l’argent.', en: 'The project explores a simple mobile flow for creating an account, checking a balance, and sending money.'}, image: '/projects/minitransfer-problem.svg', alt: {fr: 'Maquette illustrative du parcours de connexion MiniTransfer', en: 'Illustrative mockup of the MiniTransfer sign-in flow'}},
      {title: {fr: 'Ce que j’ai fait', en: 'What I built'}, body: {fr: 'J’ai développé une application Flutter reliée à une API Spring Boot avec authentification JWT, transferts et historique des transactions.', en: 'I built a Flutter application connected to a Spring Boot API with JWT authentication, transfers, and transaction history.'}, image: '/projects/minitransfer-transfer.svg', alt: {fr: 'Maquette illustrative du formulaire de transfert MiniTransfer', en: 'Illustrative mockup of the MiniTransfer transfer form'}},
      {title: {fr: 'Le résultat', en: 'The result'}, body: {fr: 'Le dépôt public présente un parcours de démonstration complet et des vidéos de démonstration dans son README.', en: 'The public repository presents a complete demo flow and video demonstrations in its README.'}, image: '/projects/minitransfer-history.svg', alt: {fr: 'Maquette illustrative de l’historique MiniTransfer', en: 'Illustrative mockup of MiniTransfer transaction history'}}
    ]
  },
  {
    slug: 'bankflow',
    title: {fr: 'BankFlow', en: 'BankFlow'},
    summary: {fr: 'Application bancaire fullstack avec authentification et gestion des rôles.', en: 'A full-stack banking application with authentication and role management.'},
    description: {fr: 'Projet fullstack React et Node.js. Le dépôt mentionne l’authentification JWT, la gestion des rôles RBAC, le chiffrement des données et des pratiques de sécurité liées à OWASP Top 10.', en: 'A React and Node.js full-stack project. The repository describes JWT authentication, RBAC role management, data encryption, and security practices related to OWASP Top 10.'},
    role: {fr: 'Développement fullstack', en: 'Full-stack development'},
    highlights: {fr: ['Authentification JWT', 'Contrôle d’accès RBAC', 'Sécurité et chiffrement des données'], en: ['JWT authentication', 'RBAC access control', 'Security and data encryption']},
    stack: ['React', 'TypeScript', 'Node.js', 'JWT', 'RBAC'],
    year: '2026',
    repo: 'https://github.com/Rafiatou-Nchetkou/Bankflow-App',
    cover: '/projects/bankflow-dashboard.svg',
    chapters: [
      {title: {fr: 'Le problème', en: 'The problem'}, body: {fr: 'Une interface bancaire doit rendre les informations de compte lisibles tout en protégeant l’accès aux opérations sensibles.', en: 'A banking interface needs to make account information clear while protecting access to sensitive actions.'}, image: '/projects/bankflow-problem.svg', alt: {fr: 'Maquette illustrative du tableau de bord BankFlow', en: 'Illustrative mockup of the BankFlow dashboard'}},
      {title: {fr: 'Ce que j’ai fait', en: 'What I built'}, body: {fr: 'Le dépôt associe une interface React/TypeScript à un backend Node.js, une authentification JWT et des contrôles d’accès selon les rôles.', en: 'The repository pairs a React/TypeScript interface with a Node.js backend, JWT authentication, and role-based access controls.'}, image: '/projects/bankflow-security.svg', alt: {fr: 'Maquette illustrative des contrôles d’accès BankFlow', en: 'Illustrative mockup of BankFlow access controls'}},
      {title: {fr: 'Le résultat', en: 'The result'}, body: {fr: 'Le projet public présente une application bancaire fullstack organisée autour des comptes et de contrôles d’accès par rôle.', en: 'The public project presents a full-stack banking application organized around accounts and role-based access controls.'}, image: '/projects/bankflow-accounts.svg', alt: {fr: 'Maquette illustrative de la vue comptes BankFlow', en: 'Illustrative mockup of the BankFlow accounts view'}}
    ]
  },
  {
    slug: 'product-discovery',
    title: {fr: 'Product Hunt — plateforme de découverte', en: 'Product Hunt — discovery platform'},
    summary: {fr: 'Application communautaire pour présenter des produits, voter et commenter.', en: 'A community app for showcasing products, voting, and commenting.'},
    description: {fr: 'Prototype React avec gestion d’état Redux et services Firebase. Il comprend des cartes produit, l’ajout de produits, l’authentification Google, les votes et les commentaires.', en: 'A React prototype with Redux state management and Firebase services. It includes product cards, product submission, Google sign-in, voting, and comments.'},
    role: {fr: 'Développement frontend', en: 'Frontend development'},
    highlights: {fr: ['Présentation et ajout de produits', 'Authentification Google', 'Votes et commentaires'], en: ['Product discovery and submission', 'Google sign-in', 'Voting and comments']},
    stack: ['React', 'Redux', 'Firebase'],
    year: '2025',
    repo: 'https://github.com/Rafiatou-Nchetkou/product-hunt-projet-test',
    cover: '/projects/product-discovery-feed.svg',
    chapters: [
      {title: {fr: 'Le problème', en: 'The problem'}, body: {fr: 'Une plateforme de découverte doit aider les visiteurs à parcourir les lancements et comprendre chaque produit.', en: 'A discovery platform should help visitors browse launches and understand each product.'}, image: '/projects/product-discovery-problem.svg', alt: {fr: 'Maquette illustrative du fil de découverte', en: 'Illustrative mockup of the discovery feed'}},
      {title: {fr: 'Ce que j’ai fait', en: 'What I built'}, body: {fr: 'J’ai construit des cartes produit, l’ajout de produits, l’authentification Google, les votes et les commentaires, avec Redux et Firebase.', en: 'I built product cards, product submission, Google sign-in, voting, and comments using Redux and Firebase.'}, image: '/projects/product-discovery-voting.svg', alt: {fr: 'Maquette illustrative des votes et commentaires', en: 'Illustrative mockup of voting and comments'}},
      {title: {fr: 'Le résultat', en: 'The result'}, body: {fr: 'Le dépôt contient un prototype interactif où les visiteurs peuvent explorer des produits et participer.', en: 'The repository contains an interactive prototype where visitors can explore products and participate.'}, image: '/projects/product-discovery-detail.svg', alt: {fr: 'Maquette illustrative de la fiche produit', en: 'Illustrative mockup of a product detail card'}}
    ]
  }
].sort((a, b) => {
  const yearsA = projectYears(a.year);
  const yearsB = projectYears(b.year);
  const latestYear = yearsB[yearsB.length - 1] - yearsA[yearsA.length - 1];
  const startYear = yearsB[0] - yearsA[0];

  return latestYear || startYear;
});
