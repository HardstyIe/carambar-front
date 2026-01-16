# 🍬 Carambar Jokes - Frontend

Interface web pour consulter et ajouter des blagues Carambar - Projet de sélection CDA

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://hardstyie.github.io/carambar-front)
[![React](https://img.shields.io/badge/react-19.x-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-4.x-38bdf8)](https://tailwindcss.com/)

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Technologies](#technologies)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Pages](#pages)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)

---

## 🎯 Aperçu

Application web React permettant de consulter, découvrir et ajouter des blagues Carambar. L'interface est colorée, interactive et responsive, avec des cartes de blagues qui se retournent au clic pour révéler la réponse.

**🔗 Liens utiles :**
- 🌐 Application : https://hardstyie.github.io/carambar-front
- 🔗 Backend API : https://carambar-api-pepi.onrender.com
- 📚 API Swagger : https://carambar-api-pepi.onrender.com/api-docs

---

## 🛠️ Technologies

### Stack principale
- **Framework** : React 19
- **Langage** : TypeScript
- **Routing** : React Router v6 (HashRouter pour GitHub Pages)
- **Styling** : Tailwind CSS 4
- **Build Tool** : Vite
- **Hébergement** : GitHub Pages

### Features
- **Responsive Design** : Mobile, tablette, desktop
- **Animations CSS** : Flip cards, transitions fluides
- **TypeScript** : Typage strict pour la maintenabilité
- **HashRouter** : Compatible avec GitHub Pages

---

## ✨ Fonctionnalités

- ✅ **Page d'accueil** : Présentation du projet avec CTA
- ✅ **Toutes les blagues** : Grille de cartes flip interactive
- ✅ **Blague aléatoire** : Tirage instantané sans reload
- ✅ **Ajouter une blague** : Formulaire avec validation
- ✅ **Détails d'une blague** : Vue complète avec navigation
- ✅ **Design Carambar** : Couleurs jaune, orange, rouge, bleu
- ✅ **Cartes flip 3D** : Animation de retournement au clic
- ✅ **Navigation fluide** : Sans rechargement de page
- ✅ **Mobile-first** : Responsive sur tous les écrans

---

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Étapes

```bash
# Cloner le repository
git clone https://github.com/HardstyIe/carambar-front.git
cd carambar-front

# Installer les dépendances
npm install

# Créer le fichier .env
cp .env.example .env

# Lancer en développement
npm run dev
```

L'application démarre sur `http://localhost:5173`

---

## ⚙️ Configuration

Créez un fichier `.env` à la racine :

```env
VITE_API_BASE_URL=https://carambar-api-pepi.onrender.com/api/v1
```

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `VITE_API_BASE_URL` | URL de l'API backend | https://carambar-api-pepi.onrender.com/api/v1 |

---

## 🚀 Utilisation

### Scripts disponibles

```bash
# Développement avec hot-reload
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Déployer sur GitHub Pages
npm run deploy

# Linter
npm run lint
```

---

## 📄 Pages

### 🏠 Home (`/`)

Page d'accueil avec :
- Hero section avec logo Carambar
- 3 CTA interactifs (Toutes les blagues, Random, Ajouter)
- Section features expliquant le concept
- Section statistiques
- Design coloré et animé

**Features spéciales** :
- Les CTA affichent le composant inline (pas de changement de page)
- Bouton "Retour à l'accueil" pour revenir
- Préchargement des blagues pour une navigation instantanée

### 📚 Toutes les blagues (`/jokes`)

Grid responsive de toutes les blagues :
- Cartes flip 3D (question → réponse au clic)
- Layout adaptatif (1, 2 ou 3 colonnes selon l'écran)
- Badge avec numéro de blague
- Lien vers les détails

### 🎲 Blague aléatoire (`/random`)

Affichage d'une blague au hasard :
- Changement instantané sans fetch (préchargement)
- Bouton "Autre blague" pour changer
- Animation de transition fluide
- Pas de reload visible

### ➕ Ajouter une blague (`/jokes/add`)

Formulaire de création :
- Champs question et réponse
- Validation côté client (longueur)
- Feedback de succès/erreur
- Compteur de caractères
- Redirection après ajout

### 🔍 Détails d'une blague (`/jokes/:id`)

Vue détaillée :
- Question et réponse affichées côte à côte
- Design coloré avec emojis
- Navigation vers autres pages
- Metadata (date de création)

---

## 🎨 Design System

### Couleurs Carambar

```css
--color-carambar-yellow: #FFD700;  /* Jaune Carambar */
--color-carambar-red: #E63946;     /* Rouge Carambar */
--color-carambar-blue: #1D3557;    /* Bleu Carambar */
--color-carambar-orange: #F77F00;  /* Orange Carambar */
--color-carambar-light: #FFF8DC;   /* Fond crème */
```

### Typographie

- **Font principale** : Comic Sans MS, Comic Neue (fun et lisible)
- **Tailles** : De 1xl (18px) à 7xl (72px)
- **Weights** : Normal, semibold, bold

### Composants

#### JokeCard

Carte interactive avec effet flip 3D :
- **Face avant** : Question avec emoji ❓
- **Face arrière** : Réponse avec emoji 😂
- **Animation** : Rotation 3D sur l'axe Y
- **Interaction** : Clic pour flip

#### Navbar

Navigation sticky avec :
- Logo Carambar
- Liens desktop (3 pages)
- Menu burger mobile
- Active state sur la page courante

#### Footer

Footer informatif avec :
- Description du projet
- Liens rapides
- Liens vers l'API et Swagger
- Copyright

---

## 🌐 Déploiement

### GitHub Pages

L'application est déployée automatiquement sur GitHub Pages via `gh-pages`.

**URL** : https://hardstyie.github.io/carambar-front

### Processus de déploiement

```bash
# Build et déploiement automatique
npm run deploy
```

Le script :
1. Build le projet avec Vite (`npm run build`)
2. Déploie le contenu de `dist/` sur la branche `gh-pages`
3. GitHub Pages sert automatiquement le contenu

### Configuration GitHub

1. Aller dans **Settings → Pages**
2. Source : `gh-pages` branch
3. L'URL sera : `https://USERNAME.github.io/REPO`

---

## 📁 Structure du projet

```
carambar-front/
├── public/
│   └── carambar.png          # Logo Carambar
├── src/
│   ├── api/
│   │   └── jokes.ts          # Appels API
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── Footer.tsx        # Pied de page
│   │   └── JokeCard.tsx      # Carte de blague flip
│   ├── routes/
│   │   ├── Home.tsx          # Page d'accueil
│   │   ├── AllJokes.tsx      # Toutes les blagues
│   │   ├── RandomJoke.tsx    # Blague aléatoire
│   │   └── jokes/
│   │       ├── AddJoke.tsx   # Ajouter une blague
│   │       └── JokeById.tsx  # Détails d'une blague
│   ├── types/
│   │   └── jokeType.ts       # Types TypeScript
│   ├── App.tsx               # Router principal
│   ├── app.css               # Styles globaux + Tailwind
│   └── main.tsx              # Point d'entrée
├── .env.example              # Template variables d'env
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```
---

## 🔧 Développement

### Guidelines

- **Code style** : ESLint + Prettier
- **TypeScript** : Typage strict activé

### Best practices appliquées

- ✅ Composants fonctionnels avec Hooks
- ✅ Gestion d'état locale (useState)
- ✅ Effet de bord contrôlés (useEffect)
- ✅ Props typées avec interfaces
- ✅ Gestion d'erreurs avec try-catch
- ✅ Loading states pour UX
- ✅ Responsive design mobile-first
- ✅ Accessibilité (semantic HTML)

---

## 🚀 Optimisations

### Performance

- **Code splitting** : Route-based avec React Router
- **Lazy loading** : Images et composants
- **Memoization** : useCallback pour éviter re-renders
- **Préchargement** : Toutes les blagues chargées une fois
- **Pas de rechargement** : Navigation SPA fluide

### SEO & Accessibilité

- Meta tags appropriés
- Semantic HTML (nav, main, footer, section)
- Alt text sur les images
- Aria labels sur les boutons interactifs
- Contrastes de couleurs respectés

---

## 🐛 Troubleshooting

### L'API ne répond pas

Vérifier que l'URL dans `.env` est correcte :
```env
VITE_API_BASE_URL=https://carambar-api-pepi.onrender.com/api/v1
```

### Erreur CORS

L'API doit autoriser l'origine du front. Contacter l'admin du backend.

### Build échoue

```bash
# Nettoyer et réinstaller
rm -rf node_modules dist
npm install
npm run build
```

---

## 👤 Auteur

**Dylan Duchemin**  
Projet CDA - Wild Code School

---

## 📄 Licence

MIT License

---

## 🙏 Remerciements

- Wild Code School pour la formation
- Carambar & Co pour l'inspiration
- La communauté React/TypeScript

---

**Made with 💙, React and Tailwind CSS**
