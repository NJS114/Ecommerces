This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
#npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 # L'architecture du projet
L'architecture du projet est basée sur une application Next.js, qui est un framework React optimisé pour les applications web.

## Structure du projet :

pages/ : Contient les fichiers qui définissent les routes de ton application. Par exemple :
index.tsx : Page d'accueil.
login.tsx, signup.tsx : Pages de connexion et d'inscription.
profile.tsx : Page pour afficher les informations du profil de l'utilisateur.
products/ : Dossier pour afficher les produits disponibles dans ton e-commerce.
cart.tsx : Page pour afficher le panier d'achats.
components/ : Contient des composants réutilisables tels que le header, footer, boutons, etc.
styles/ : Contient les fichiers CSS/SCSS pour le style de l'application, y compris le fichier TailwindCSS.
public/ : Contient les fichiers statiques (images, polices, etc.) accessibles publiquement.

## Fonctionnalités principales :

Authentification : Gestion des utilisateurs via next-auth pour la connexion et l'inscription.
Gestion des produits : Affichage des produits disponibles dans la boutique.
Panier d'achat : Ajout, suppression, et affichage du panier d'achats.
Paiement : Intégration de Stripe pour gérer les paiements en ligne.
Gestion des utilisateurs : Affichage et modification des informations du profil utilisateur.

 #2. Packages et leur utilité :
Dépendances :

@reduxjs/toolkit et react-redux : Gestion d'état avec Redux. @reduxjs/toolkit simplifie l'utilisation de Redux, et react-redux permet de connecter les composants React à l'état global de Redux.
@stripe/react-stripe-js et @stripe/stripe-js : Packages pour intégrer Stripe et gérer les paiements en ligne sur ton site.
axios : Utilisé pour effectuer des requêtes HTTP à un backend API.
bootstrap et react-bootstrap : Framework CSS populaire pour la création d'interfaces réactives. react-bootstrap est la version React du framework.
crypto-js : Librairie de cryptographie utilisée pour le chiffrement/déchiffrement de données.
framer-motion : Librairie de gestion des animations pour React.
next-auth : Système d'authentification pour Next.js, permettant une gestion facile des sessions d'utilisateurs.
react-gravatar : Utilisé pour afficher les avatars Gravatar des utilisateurs.
react-toastify : Permet d'afficher des notifications toast (alertes temporaires) à l'utilisateur.
redux-logger : Middleware de Redux pour afficher les actions Redux dans la console pour un débogage facilité.
styled-components : Librairie CSS-in-JS permettant de définir des styles directement dans les composants React.
zustand : Une bibliothèque pour la gestion d'état, plus légère et plus simple à utiliser que Redux.

## Dépendances de développement :
@types/ : Fournit les définitions de type pour TypeScript pour des packages comme axios, crypto-js, react-redux, etc.
eslint et eslint-config-next : Outils pour vérifier la qualité et la cohérence du code avec des règles définies.
postcss : Outil de transformation CSS, utilisé avec Tailwind CSS pour générer le CSS final.
tailwindcss : Framework CSS utilitaire permettant de créer des interfaces rapidement avec des classes prédéfinies.
typescript : TypeScript permet d'ajouter des types statiques à JavaScript, ce qui améliore la maintenabilité et la sécurité du code.

# 3. Fonctionnalités principales à intégrer :
Page d'accueil : Présente les catégories et les produits.
Pages de produit : Affiche les détails des produits avec la possibilité d'ajouter au panier.
Gestion du panier : Permet d'ajouter, de supprimer, et de modifier les quantités des produits dans le panier.
Authentification : Inscription, connexion et gestion de la session utilisateur avec next-auth.
Paiement avec Stripe : Intégration de Stripe pour gérer les paiements en ligne.
Dashboard utilisateur : Permet à un utilisateur connecté de voir ses informations, ses commandes, etc.
Notifications : Utilisation de react-toastify pour afficher des messages de succès ou d'erreur pendant les interactions.
Navigation responsive : Avec @headlessui/react et tailwindcss, crée un menu mobile qui peut se dérouler avec des animations.

# 4. Développement à venir :
Optimisation SEO avec next-seo.
Gestion des erreurs : Améliorer la gestion des erreurs dans les formulaires (connexion, paiement).
Améliorations UI : Affiner l'interface utilisateur avec des animations (via framer-motion).
