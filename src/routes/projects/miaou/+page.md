# Miaou : Une Progressive Web App de Messagerie en Local

## Présentation et Définition du Projet
**Miaou** est une Progressive Web App (PWA) de messagerie que j'ai développée en side project. L'objectif de cette application est d'offrir une solution de messagerie fonctionnant avec **socket.io** tout en stockant les messages localement sur le navigateur à l'aide d'**IndexedDB**. Ce projet vise à proposer une alternative légère en limitant la dépendance au serveur.

---

## Objectifs
L'objectif principal de ce projet est de créer une application de messagerie en temps réel utilisant **socket.io** pour la communication. Une caractéristique essentielle de cette application est la possibilité de stocker les messages localement grâce à **IndexedDB**, ce qui permet aux utilisateurs de consulter leurs conversations même sans connexion Internet. Un autre défi que je me suis fixé était de développer l'ensemble de l'application sans utiliser de framework frontend, afin de mieux comprendre et maîtriser les technologies sous-jacentes.

## Contexte
Ce projet est né d'une envie d'explorer les possibilités offertes par les **PWAs**, le stockage local via **IndexedDB**, ainsi que l'utilisation de **socket.io** pour la gestion des communications en temps réel. L'idée était de concevoir une application moderne tout en minimisant l'utilisation du serveur pour le stockage des données.

## Enjeux
L'un des principaux enjeux de ce projet était d'offrir une expérience utilisateur fluide et efficace, permettant aux utilisateurs de consulter leurs anciens messages même en étant hors ligne. Il s'agissait également de démontrer mes compétences en **développement full stack** en réalisant un projet technique qui repose sur des technologies complexes sans recourir à un framework frontend.

## Risques
La mise en œuvre d'**IndexedDB** a représenté un défi technique, notamment pour assurer un stockage efficace et rapide des données en local. Un autre risque identifié concernait la prise en main de **socket.io**, une technologie que je ne maîtrisais pas entièrement au début du projet, bien que j’aie déjà étudié le fonctionnement des websockets.

---

## Étapes du Projet
### 1. Conception et Planification
Dans un premier temps, j’ai défini les fonctionnalités essentielles de l'application. Il était primordial que l'utilisateur puisse envoyer et recevoir des messages en temps réel, stocker ces messages localement avec **IndexedDB**, et gérer ses conversations de manière fluide. 

J’ai ensuite sélectionné les technologies les plus adaptées pour répondre aux besoins du projet. J’ai choisi **Node.js** pour le développement du backend, **socket.io** pour synchroniser les messages en temps réel, **IndexedDB** pour assurer un stockage local efficace, et **JavaScript** avec **CSS** pour construire l’interface utilisateur.

### 2. Développement
Le développement a débuté par la mise en place de la structure du projet et l’initialisation du backend avec **Node.js**. Par la suite, j’ai intégré **IndexedDB** afin de permettre aux utilisateurs de conserver leurs messages, même lorsqu'ils sont hors ligne. Ensuite, l’implémentation de **socket.io** a permis d’assurer la transmission des messages en temps réel lorsque les utilisateurs sont connectés. 

Le développement du frontend a été réalisé avec **JavaScript** et **CSS**, en veillant à concevoir une interface intuitive et responsive. Enfin, pour finaliser l’application et garantir son bon fonctionnement en mode PWA, j’ai ajouté un **service worker**, permettant aux utilisateurs d’installer l’application sur leur appareil et de bénéficier d’une expérience hors ligne optimisée.

### 3. Mise en Ligne
Pour l’hébergement de l’application, j’ai opté pour des solutions gratuites afin de rendre le projet accessible à tous. Le frontend a été mis en ligne via **Netlify**, tandis que le backend a été hébergé sur **Heroku**. Malheureusement, avec la fin de la gratuité de **Heroku**, l’application n’est plus active aujourd’hui.

---

## Acteurs et Interactions
Le projet **Miaou** a été réalisé en grande partie en autonomie. Toutefois, j’ai sollicité des amis pour tester l’application et recueillir leurs retours. Leurs remarques ont été précieuses pour améliorer les fonctionnalités et l’ergonomie de l’application.

---

## Résultats
### Compétences Acquises
Grâce à ce projet, j’ai renforcé mes compétences en **développement full stack**, notamment en approfondissant ma compréhension de **IndexedDB** pour le stockage local des données. J’ai également acquis une expérience précieuse dans la création de **Progressive Web Apps (PWA)** et la gestion des communications en temps réel avec **socket.io**.

### Impact
Le développement de cette application m’a permis d'expérimenter une architecture permettant un usage hors ligne sans sacrifier la fluidité de l'expérience utilisateur. Bien que l’application ne soit plus en ligne aujourd’hui, ce projet constitue une démonstration de faisabilité et pourra être repris ou amélioré dans le futur.

---

## Mon Regard Critique
### Ma Valeur Ajoutée
Ce projet représente une réalisation technique complète, allant de la conception à la mise en production. J’ai su résoudre des défis techniques complexes, notamment en assurant la bonne interaction entre **IndexedDB** et **socket.io**. De plus, le choix d’une approche sans framework frontend m’a permis de mieux comprendre les bases de la programmation côté client.

### Enseignements Tirés
Ce projet m’a permis d’apprécier les avantages et les défis liés aux **PWAs** et au stockage local des données. Il m’a également aidé à mieux comprendre la gestion des communications en temps réel avec **socket.io**, ce qui me sera utile pour de futurs projets nécessitant une synchronisation instantanée des données. Enfin, j’ai pu constater l’importance du choix des solutions d’hébergement, notamment pour garantir la pérennité d’une application gratuite.

---

## Principales Compétences Rattachées à cette Réalisation
- **Node.js** : Développement du backend et gestion des connexions avec **socket.io**.
- **socket.io** : Mise en place de la communication en temps réel.
- **IndexedDB** : Stockage local des messages pour assurer l'accès hors ligne.
- **PWA** : Intégration d'un service worker pour améliorer l'expérience utilisateur.

[Voir toutes mes réalisations](#)

