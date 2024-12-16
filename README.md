# **Gestion des Articles avec Django** 📝

Ce projet implémente un CRUD (Créer, Lire, Mettre à jour, Supprimer) pour gérer une liste d'articles. Il utilise **Django** comme framework backend et **Bootstrap** pour une interface utilisateur moderne et responsive.

---

## **Aperçu du Projet**

![Image de l'interface](https://via.placeholder.com/800x400.png?text=Interface+CRUD+Django)

---

## **Fonctionnalités**

- 🔍 **Liste des articles**  
- ✏️ **Création d'un nouvel article** via un formulaire convivial  
- 🛠️ **Modification et suppression** des articles existants  
- 🌐 **Interface utilisateur simple et responsive** grâce à **Bootstrap**

---

## **Installation et Configuration**

### **1. Prérequis**

- **Python 3.x** (minimum 3.8 recommandé)  
- **Django 4.x** ou supérieur  
- Navigateur Web

---

### **2. Étapes d’installation**

#### **a. Configuration de l'environnement**

1. Créez un environnement virtuel :

   ```bash
   python -m venv env
   source env/bin/activate       # Linux/Mac
   env\Scripts\activate          # Windows

2. Installez Django et les dépendances nécessaires :

   ```bash
   pip install django

---

#### **b. Configuration du projet**
1. clonez ou créez un nouveau projet Django :

   ```bash
   django-admin startproject article_management
   cd article_management

2. Créez une application Django pour la gestion des articles :

   ```bash
   python manage.py startapp blog

3. Exécutez les migrations pour créer les tables de base de données :

   ```bash
   python manage.py migrate

---

#### **c. Lancer le serveur de développement**
1. Exécutez le serveur Django :
   
   ```bash
   python manage.py runserver
2. Accédez au projet dans votre navigateur à l'adresse suivante :

http://127.0.0.1:8000

