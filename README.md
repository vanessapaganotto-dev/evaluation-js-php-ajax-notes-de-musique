🇬🇧 Version anglaise disponible : [README_EN.md](README_EN.md)


# Projet Notation AJAX

## Description

Cette application web permet de gérer une interface de notation utilisant AJAX pour communiquer avec un backend PHP.  
Elle contient une page HTML simple avec deux boutons :  

- **Notation** : pour ouvrir un formulaire de notation chargé dynamiquement  
- **Fermer** : pour fermer le formulaire  

Le formulaire et les résultats de la notation sont affichés sans rechargement de la page grâce à AJAX.

---

## Contenu du projet

- `index.html` : page principale HTML  
- `style.css` : styles CSS pour la mise en forme  
- `script.js` : script JavaScript pour gérer les requêtes AJAX et l'interaction utilisateur  
- Backend PHP pour recevoir les données AJAX et traiter la notation

---

## Fonctionnalités

- Chargement dynamique du formulaire de notation via AJAX  
- Envoi asynchrone des notes au serveur PHP  
- Affichage des résultats sans rechargement  
- Interface simple et responsive

---

## Installation et utilisation

- Cloner ce dépôt ou copier les fichiers dans votre serveur local (ex. Apache avec PHP)  
- S’assurer que PHP est configuré et que les fichiers PHP backend sont présents (à implémenter selon besoin)  
- Ouvrir `index.html` dans un navigateur web compatible (Chrome, Firefox, Edge...)  
- Cliquer sur le bouton **Notation** pour afficher le formulaire et commencer à noter  
- Cliquer sur **Fermer** pour cacher le formulaire

---

## Technologies utilisées

- HTML5  
- CSS3  
- JavaScript (AJAX)  
- PHP (backend)

--- 

## À compléter

Le backend PHP qui gère les requêtes AJAX pour :  

- Afficher le formulaire de notation  
- Enregistrer les notes reçues  
- Retourner le résultat à afficher

--- 

## Auteur

Vanessa PAGANOTTO 

---

## Licence

Ce projet est sous licence MIT.
