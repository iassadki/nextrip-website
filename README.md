# Nextrip — site vitrine

Landing page de Nextrip, construite avec React 19, TypeScript et Vite.

```bash
npm install
npm run dev     # serveur de dev
npm run build   # vérification TS + build de production
npm run lint
```

## Architecture

```
src/
├── app/                 # Composition racine (App)
├── components/
│   ├── icons/           # Logo vectoriel, icônes ligne, réseaux sociaux
│   ├── layout/          # Header, Footer
│   └── ui/              # Primitives réutilisables (Button, Card, Section, Container, Logo, PhoneFrame)
├── data/content.ts      # Tous les textes / liens du site (source unique)
├── features/landing/
│   ├── components/      # Composants propres à la landing (FeatureRow, ObjectiveCard, AppScreen…)
│   ├── sections/        # Une section de page = un composant
│   └── LandingPage.tsx
├── lib/                 # Utilitaires (cx)
└── styles/              # Design tokens (tokens.css) + reset global
```

- **Styles** : CSS Modules par composant + variables CSS dans `styles/tokens.css` (couleurs, typo, espacements, rayons).
- **Contenu** : modifier un texte = modifier `src/data/content.ts`, sans toucher aux composants.
- **Imports** : alias `@/` vers `src/`, imports directs (pas de fichiers barrel).
- **Captures de l'app** : les écrans sont des maquettes illustratives (`AppScreen`). Pour utiliser de vraies captures, déposez-les dans `src/assets/images/` et passez-les à `<PhoneFrame src={…} alt="…" />`.
