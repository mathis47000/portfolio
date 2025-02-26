# Projet "Miaou"

## Présentation et Définition du Projet
---

"Miaou" est une Progressive Web App (PWA) de messagerie que j'ai développée en side project. Elle permet aux utilisateurs de communiquer via des messages stockés localement sur leur navigateur en utilisant IndexedDB, offrant ainsi une solution de messagerie légère pour le serveur.

## Objectifs
---
Créer une application de messagerie qui fonctionne entièrement avec socket.io et faire en sorte d’enregistrer les messages sur le navigateur client. Et en guise de défi je le fais sans aucun framework frontend.

## Contexte
---

Ce projet a été initié pour explorer les capacités des PWAs, d'IndexedDB et de socket.io dans la création d'applications web modernes qui dépendent le moins possible d'un serveur pour le stockage des données.

## Enjeu
---

Fournir une solution de messagerie rapide et fiable qui ne nécessite pas de connexion continue à Internet pour consulter l’historique de message.

Démontrer mes compétences en développement full stack avec une approche innovante du stockage de données.

## Risques
---

Complexité technique de l'implémentation de IndexedDB pour un stockage de données local efficace.

Ne pas comprendre la mise en place de socket.io qui est nouveau pour moi même si j’ai tout de même vu le fonctionnement d’une websocket.

## Étapes du Projet
---

### Conception et Planification

Définition des fonctionnalités principales : envoi et réception de messages, stockage local, et gestion des conversations.

Choix des technologies : Node.js pour le serveur, socket.io pour la synchronisation des messages, IndexedDB pour le stockage local, JavaScript pour les interactions côté client, et CSS pour le design.

### Développement

Mise en place de la structure du projet et initialisation du backend avec Node.js.

Implémentation de IndexedDB pour le stockage local des messages, permettant ainsi la conservation des conversations même sans connexion Internet.

Intégration de socket.io pour la transmission des messages en temps réel lorsque les utilisateurs sont en ligne.

Développement du frontend avec JavaScript et CSS pour une interface utilisateur intuitive et responsive.

Et ajout d’un service worker pour le fonctionnement de la PWA qui rend possible de télécharger sous forme d’application le site.

### Mise en Ligne

Pour la mise en ligne je voulais quelque chose de 100% gratuit. J’ai donc choisi de mettre en ligne le frontend sur netlify et le backend sur heroku. Mais malheureusement l’application n’est plus active car heroku est devenu payant.

## Acteurs et Interactions
---

Le projet "Miaou" a été principalement réalisé de manière autonome. Cependant, des interactions régulières avec mes amis ont été essentielles pour recueillir des retours et ajuster les fonctionnalités de l'application.

## Résultats
---

Renforcement de mes compétences en développement full stack, notamment en utilisant IndexedDB pour le stockage local.

Acquérir une expérience précieuse dans la création de PWAs et dans la gestion des communications en temps réel avec Websocket (socket.io). Et tout ça sans framework.

## Mon Regard Critique
---

### Ma valeur ajoutée

Développement complet de l'application, de la conception à la mise en production.

Capacité à résoudre des problèmes techniques complexes et à implémenter des solutions innovantes.

### Enseignements tirés

Appréciation des avantages et des défis des PWAs et du stockage local.Meilleur adaptation pour les prochains projets socket.io

## Principales Compétences Rattachées à cette Réalisation
---

- [**Node.js** - Développement du backend et gestion de la logique applicative.](https://nodejs.org/)
- [**socket.io** - Implémentation des communications en temps réel.](https://socket.io/)
- [**IndexedDB** - Utilisation pour le stockage local des messages.](https://developer.mozilla.org/fr/docs/Web/API/IndexedDB_API)
- [**PWA** - Utilisation comme application avec des possibilités de hors ligne.](https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps)