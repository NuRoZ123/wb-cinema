# 🎬 **wb-cinema**

## 📝 **Description**
**wb-cinema** est une application web destinée à gérer les sessions de cinéma. Elle permet aux administrateurs de créer, modifier et gérer des sessions, tandis que les utilisateurs peuvent consulter les films disponibles et les horaires des sessions.

## 🛠 **Technologies Utilisées**
Cette application utilise les technologies et frameworks suivants :
- **backend** :
  - **TypeScript**
  - **JavaScript**
  - **Node.js**
  - **Express**
  - **Docker**
  - **TypeORM**
  - **Resend**
  - **Mysql**
  - **Swagger**
  - **Zod**
  - **BCrypt**
  - **Jest**


- **frontend** :
  - **Vue 3**
  - **Vite**
  - **TypeScript**
  - **JavaScript**
  - **Node.js**




---

## ⚙️ **Configuration et Installation**

### 1. 📄 **Configuration du fichier `.env`**
Dans le dossier `wb-cinema-back`, créez un fichier `.env` contenant les variables d'environnement qui sont définir dans le fichier `.env.exemple` :
```env
PORT=3000

DB_PORT=3306
DB_USER=
DB_PASS=
DB_NAME=
JWT_SECRET=secret
corsOrigin=*
RESEND_API_KEY=
SENDER_EMAIL=
LOCAL_URL=
```

### 2. 🐋 **Installation de la base de données et de PhpMyAdmin avec Docker Compose**
1. Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.
2. Placez-vous à la racine du projet et lancez la commande suivante pour déployer la base de données et PhpMyAdmin :
   ```sh
   docker compose up -d
   ```
3. La base de données sera accessible sur le port **5432**, et PhpMyAdmin sur le port **8080**.

### 3. 🔧 **Installation et lancement du backend**
1. Naviguez dans le dossier `wb-cinema-back` :
   ```sh
   cd wb-cinema-back
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

3. Générez la documentation Swagger :
   ```sh
   npm run generate-docs
   ```

4. Démarrez le serveur backend :
   ```sh
   npm run dev
   ```
Le backend sera disponible à l'adresse `http://localhost:300/` avec les configurations .env actuelle.

---

## 🌐 **Installation et lancement du frontend**

### 1. Naviguez dans le dossier `ws-cinema` :
```sh
cd ws-cinema
```

### 2. Installez les dépendances :
```sh
npm install
```

### 3. Lancez le serveur de développement :
```sh
npm run dev
```
Le frontend sera accessible à l'adresse `http://localhost:5173/`.

---

## 🚀 **Déploiement**

### 📋 **Workflow de déploiement**
1. Poussez vos modifications sur la branche `main`.
2. **GitHub Actions** gérera automatiquement le build et le déploiement.

---

## 📄 **Licence**

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

