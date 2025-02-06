# Documentation des Choix Techniques

## 1. Introduction

Ce document explique nos choix techniques réalisés pour le projet wb-cinema avec un backend en Node.js/Express et un frontend en Vue.js. Le but est de garantir un développement efficace, maintenable et évolutif.

---

## 2. Technologies utilisées

### 2.1 Backend

- **Node.js** : Environnement d'exécution JavaScript asynchrone et performant.
- **TypeScript** : Superset de JavaScript ajoutant du typage statique pour une meilleure maintenabilité.
- **Express.js** : Framework minimaliste pour créer une API REST rapide et légère.
- **MySQL** : Base de données relationnelle robuste et bien supportée.
- **TypeORM** : ORM permettant une gestion simplifiée des modèles et des migrations de base de données.
- **Zod** : Bibliothèque de validation des données d'entrée.
- **Swagger** : Génération automatique de documentation API.
- **Resend** : Service pour l'envoi d'emails transactionnels.

### 2.2 Frontend

- **Vue.js** : Framework progressif pour la création d'interfaces utilisateur dynamiques.
- **Pinia** : Store de gestion d'état léger et performant.
- **TypeScript** : Superset de JavaScript ajoutant du typage statique pour une meilleure maintenabilité.

---

## 3. Justification des choix

### 3.1 Backend

#### **Node.js & TypeScript**

- TypeScript apporte un meilleur typage, réduisant les erreurs en production.
- Node.js est bien adapté aux applications à forte charge asynchrone.

#### **Express.js**

- Léger et flexible, il permet de structurer facilement une API RESTful.
- Large écosystème de middlewares.

#### **MySQL & TypeORM**

- MySQL est performant pour les relations complexes.
- TypeORM facilite la gestion des entités et des migrations.

#### **Zod**

- Validation des entrées des utilisateurs pour éviter les erreurs et les failles de sécurité.

#### **Swagger**

- Génération et visualisation de la documentation de l'API facilitant le travail des développeurs front-end.

#### **Resend**

- Simplifie l'envoi d'emails avec une API moderne et efficace.

### 3.2 Frontend

#### **Vue.js**

- Framework léger et performant, bien adapté aux applications SPA (Single Page Application).
- Bon support pour la composition des composants et la gestion réactive des données.

#### **Pinia Store**

- Alternative plus moderne à Vuex, offrant une API plus simple et intuitive.
- Meilleure gestion des performances avec un modèle réactif propre.

#### **TypeScript**

- TypeScript apporte un meilleur typage, réduisant les erreurs en production.

---

## 4. Architecture du projet

### **Backend**

- Architecture en couches : contrôleurs, services, repositories.
- Middleware pour la gestion des erreurs et de l'authentification.
- Utilisation de Docker pour la gestion des dépendances.

### **Frontend**

- Découpage en composants réutilisables.
- Pinia pour centraliser les données partagées.
- Vue Router pour la gestion des pages et de la navigation.
