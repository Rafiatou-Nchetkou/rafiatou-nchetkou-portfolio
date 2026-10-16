# Portfolio — Rafiatou Nchetkou

Portfolio personnel de Rafiatou Nchetkou, développeuse web spécialisée en React, Next.js et TypeScript. Le site présente son parcours, ses compétences et ses projets, avec une interface disponible en français et en anglais.

## Fonctionnalités

- Pages d’accueil, À propos, projets et contact
- Études de cas pour les projets
- Interface française par défaut et version anglaise accessible sous `/en`
- Thème clair/sombre et mise en page responsive
- Animations et transitions
- Métadonnées Open Graph et icônes du site

## Technologies

- Next.js 16 avec App Router
- React 19 et TypeScript
- Tailwind CSS 4
- next-intl pour les traductions
- Motion pour les animations

## Démarrer en local

Prérequis : Node.js et npm.

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Commandes

```bash
npm run dev    # serveur de développement
npm run lint   # vérification ESLint
npm run build  # compilation de production
npm run start  # serveur de production après compilation
```

## Organisation

```text
src/
├── app/[locale]/       # pages localisées
├── components/         # composants et sections du site
├── data/projects.ts    # contenu des projets
├── i18n/               # configuration du routage et des traductions
└── proxy.ts            # routage des locales
messages/               # traductions française et anglaise
public/                 # images et ressources statiques
```

## Formulaire de contact

Le formulaire envoie les messages via [Resend](https://resend.com/). Pour l’activer, copiez `.env.example` en `.env.local`, renseignez votre clé API Resend ainsi qu’une adresse d’expédition vérifiée dans Resend, puis configurez l’adresse de réception. La clé API reste côté serveur et ne doit jamais être préfixée par `NEXT_PUBLIC_`.

## Déploiement

Le projet peut être déployé sur une plateforme compatible avec Next.js, comme [Vercel](https://vercel.com/). Vérifiez la configuration du formulaire de contact avant la mise en production.
