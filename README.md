# gestion des etudiants

**gestion des etudiants**  est une simple application web permettant de gérer les informations des étudiants. Elle inclut des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer) et permet de rechercher des étudiants dans la base de données. Le projet intègre également une tâche d'IA pour l'analyse des données des étudiants.

## Capture d'écran

Voici une capture d'écran de l'interface de l'application :

![Capture d'écran de l'application de gestion des étudiants](assets/img/screenshot.png)
 
## Fonctionnalités

- **CRUD des étudiants :**
  - Ajouter un étudiant
  - Afficher les étudiants
  - Modifier les informations d'un étudiant
  - Supprimer un étudiant

- **Recherche des étudiants :**
  - Rechercher des étudiants par nom, prénom ou email en temps réel.

- **Tâche d'IA :**
  - Fonction de Prédiction du Domaine d'Étude Basée sur le Prénom

## Technologies utilisées

- **Frontend :**
  - HTML
  - CSS (Bootstrap)
  - JavaScript (jQuery)

- **Backend :**
  - PHP
  - MySQL

- **Base de données :**
  - MySQL

- **Outils de développement :**
  - XAMPP (Apache, PHP, MySQL)
  - Visual Studio Code (éditeur de code)

## Installation

### Étapes pour exécuter le projet en local :

1. **Télécharger et installer XAMPP** :
   - Télécharger XAMPP depuis [ici](https://www.apachefriends.org/index.html).
   - Installer et démarrer Apache et MySQL via le panneau de contrôle XAMPP.

2. **Clonez le projet** :
   - Clonez ce repository sur votre machine :
     ```bash
     git clone https://github.com/YathrebSamaali/Student-CRUD.git
     ```

3. **Configurer la base de données** :
   - Ouvrez **phpMyAdmin** via `localhost/phpmyadmin` dans votre navigateur.
   - Créez une nouvelle base de données appelée `student_management`.
   - Exécutez le script SQL suivant pour créer la table des étudiants :
     ```sql
     CREATE TABLE students (
         id INT AUTO_INCREMENT PRIMARY KEY,
         nom VARCHAR(100) NOT NULL,
         prenom VARCHAR(100) NOT NULL,
         email VARCHAR(100) NOT NULL,
         date_naissance DATE NOT NULL
     );
     ```

4. **Configurer la connexion à la base de données** :
   - Dans le fichier `connect.php`, assurez-vous que les paramètres de connexion à la base de données sont corrects (par défaut : `localhost`, `root`, et mot de passe vide).

5. **Démarrer le projet** :
   - Déplacez le dossier du projet dans le répertoire `htdocs` de votre installation XAMPP (par défaut : `C:\xampp\htdocs\`).
   - Ouvrez `http://localhost/Student-CRUD` dans votre navigateur pour accéder à l'application.


## Auteur

- **Yathreb Samaali** - [GitHub](https://github.com/YathrebSamaali)

