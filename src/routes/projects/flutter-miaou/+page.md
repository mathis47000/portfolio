# Flutter Miaou : Une Application Mobile de Messagerie Instantanée

## Présentation et Définition du Projet
Flutter Miaou est une application de messagerie instantanée que j’ai développée seul durant le semestre 7, dans le cadre d’un cours consacré à la découverte du framework Flutter. Ce projet reprenait les bases fonctionnelles de mon application web "Miaou", déjà développée en PWA, mais en les transposant dans un environnement mobile cross-platform. L’objectif était de produire en une semaine un prototype opérationnel de messagerie en temps réel, simple mais fonctionnel, pour tester mes capacités à m’adapter à une nouvelle technologie.

Contrairement à la version web initiale, cette version mobile se concentrait uniquement sur une room de chat unique, dans laquelle tous les utilisateurs pouvaient échanger des messages. Le projet avait donc une portée volontairement réduite, mais servait de terrain concret pour expérimenter Flutter, socket.io et le stockage local dans un cadre mobile.

## Objectifs
Le projet avait plusieurs objectifs clairs et complémentaires. Le premier était de découvrir Flutter de manière autonome, sans recourir à des outils externes ou à des packages complexes, afin de comprendre les fondations du framework. Le second objectif était d’intégrer un backend déjà existant, développé en Node.js avec socket.io, pour permettre la communication temps réel.

Je voulais aussi tester la capacité de Flutter à gérer du stockage local, afin que les messages ne disparaissent pas à chaque redémarrage de l’application. Le tout devait rester léger, fluide, et utilisable dès la fin de la semaine de développement. Enfin, j’avais pour contrainte de livrer une application mobile cross-platform, fonctionnelle à la fois sur Android et iOS, en m’appuyant uniquement sur Flutter et Dart.

## Contexte
Le projet a été réalisé dans le cadre d’un cours court mais intense, dédié à Flutter. L’objectif pédagogique était de concevoir une application fonctionnelle et adaptée au mobile, en partant de zéro ou en reprenant un projet personnel.

J’ai choisi de réutiliser la logique de mon application web Miaou, car elle me permettait de rester concentré sur l’essentiel : l’apprentissage de Flutter. Cette contrainte de temps m’a forcé à faire des choix techniques pragmatiques, à prioriser la stabilité et la simplicité, et à livrer un MVP opérationnel à la fin de la semaine.

Cette expérience m’a permis de me rendre compte du potentiel de Flutter pour des projets rapides, mais aussi des limites à surmonter dès que l’on souhaite aller plus loin (gestion d’état, modularité du code, accessibilité, etc.).

## Enjeux
Plusieurs défis majeurs ont émergé au cours du développement de cette application. Le premier consistait à  comprendre l’écosystème Flutter  et ses principes fondamentaux, tels que la gestion des widgets, le cycle de vie des composants et l’architecture globale d’une application mobile développée avec ce framework. Un autre enjeu important était d’ intégrer les WebSockets avec socket.io , afin d’assurer une communication en temps réel fluide et efficace entre les utilisateurs. Enfin, un des aspects techniques essentiels du projet résidait dans la  gestion du stockage des messages en local , qui devait être adaptée aux spécificités des plateformes Android et iOS.

## Risques
Ce projet comportait certains risques et difficultés techniques. Le principal défi technique concernait  l’implémentation correcte de socket.io dans Flutter , notamment en raison d’un  manque d’expérience avec le pattern BLoC , qui est souvent utilisé pour gérer l’état des applications Flutter de manière optimale. Un autre risque notable était  la contrainte de temps , qui imposait de  simplifier certaines fonctionnalités  pour respecter le délai imparti d’une semaine et livrer un prototype fonctionnel.

## Étapes du Projet
### 1. Conception et Planification
La première étape a été de définir précisément le périmètre fonctionnel du projet. L'objectif était de reproduire, de manière simplifiée, le fonctionnement de l'application web Miaou, en se concentrant uniquement sur une room de chat commune accessible à tous les utilisateurs.

N’ayant qu’une semaine pour réaliser ce projet dans le cadre du cours, j’ai opté pour une architecture sobre et directe. J’ai choisi Flutter pour le frontend afin de tirer parti du développement cross-platform, et Node.js/socket.io pour le backend existant. À ce stade, j’ai pris la décision de ne pas ajouter de fonctionnalités secondaires (comme les messages privés ou la gestion d’état complexe) pour rester concentré sur la robustesse du chat global.

Pour l’interface, j’ai adopté une approche minimaliste avec les composants Material 3 intégrés à Flutter, en structurant l’application autour d’un Scaffold classique. Cela m’a permis d’obtenir rapidement une interface cohérente et responsive, sans ajouter de dépendances externes.

### 2. Développement
Le développement s’est organisé en plusieurs phases courtes et efficaces :

Connexion utilisateur : j’ai conçu une page d’accueil simple où l’utilisateur saisit son pseudo. Ce pseudo est ensuite utilisé pour l’affichage dans la room globale. Le changement de pseudo nécessite une reconnexion.

Connexion socket.io : j’ai mis en place la communication temps réel en connectant l’application Flutter au backend existant via socket.io. Chaque message envoyé est immédiatement émis sur la socket, et tous les messages reçus sont affichés dans l’interface s’il y a une connexion active. En l’état, les messages ne sont pas reçus si l’utilisateur est déconnecté.

Affichage et gestion des messages : j’ai utilisé une ListView.builder pour afficher dynamiquement les messages reçus, après avoir testé et comparé avec d’autres approches moins performantes dans ce contexte. La logique de chat reste très simple, sans système de cache avancé ni de file d’attente hors ligne.

Stockage local : j’ai implémenté une sauvegarde des messages à l’aide de SharedPreferences sur Android, afin de conserver un minimum d’historique au redémarrage de l’application. Cette implémentation reste rudimentaire mais fonctionnelle.

Commandes spéciales : j’ai intégré un système de message direct via un préfixe spécifique (par exemple : /pseudo message), permettant de s’adresser à un utilisateur précis dans la room, bien que cette fonctionnalité reste expérimentale.

### 3. Présentation et Tests
À la fin du développement, j’ai réalisé une démonstration en classe. J’ai connecté plusieurs instances de l’application sur différents appareils afin de valider le bon fonctionnement du chat temps réel.

La communication entre utilisateurs s’est révélée fluide, et les premiers retours ont confirmé la simplicité d’utilisation et la stabilité du système de socket.

## Acteurs et Interactions
Ce projet a été réalisé entièrement en autonomie, dans le cadre d’un cours de Flutter à l’ESIEA. Même si aucun travail de groupe n’était prévu, j’ai profité de quelques échanges informels avec mes camarades pour tester l’envoi et la réception de messages entre appareils. Ces essais m’ont permis de vérifier le bon fonctionnement du système de socket et de détecter des erreurs que je n’aurais pas repérées seul.

Le professeur a également pu tester brièvement l’application lors de la démonstration finale et m’a apporté quelques remarques sur la structure générale et la sobriété de l’interface, confirmant la pertinence de mon choix de rester sur une architecture épurée.
## Résultats
### Compétences Acquises
Ce projet m’a permis de découvrir concrètement Flutter et de réaliser un projet mobile de A à Z, en un temps restreint. J’ai appris à structurer une application avec Scaffold, à gérer des états simples sans bloc complexe, et à mettre en place un système de messagerie temps réel via WebSockets. C’était aussi ma première utilisation de SharedPreferences, une solution simple mais efficace pour stocker des données localement.

J’ai également consolidé ma compréhension du fonctionnement de socket.io, déjà amorcée avec ma PWA "Miaou", et je suis maintenant plus à l’aise avec les mécanismes de communication serveur-client.

### Impact
Flutter Miaou a rempli les objectifs pédagogiques fixés : produire une application fonctionnelle, communicante en temps réel, avec une interface compatible Android/iOS, dans un délai d’une semaine. Même si le projet reste perfectible, il m’a permis d’aller à l’essentiel et de mieux comprendre ce que propose Flutter, sans dépendre de packages tiers ou d’architectures complexes.

C’est aussi une première base que je pourrais faire évoluer plus tard, notamment en intégrant un système d’identification plus complet, une gestion multi-rooms ou un stockage plus robuste.

## Mon Regard Critique
### Ma Valeur Ajoutée
J’ai assuré la totalité du développement, du setup initial à l’implémentation finale, en m’appuyant uniquement sur des ressources officielles ou issues de forums. L’intégration de socket.io dans Flutter, bien que peu documentée, a été réalisée sans plugin spécialisé, ce qui m’a obligé à bien comprendre les couches basses de la communication temps réel.

J’ai également fait le choix d’un design simple mais cohérent, en me basant uniquement sur Material 3, ce qui m’a permis de livrer une application visuellement propre et immédiatement utilisable, sans surcharge inutile.

### Enseignements Tirés
Ce projet m’a permis de confirmer que Flutter était une solution très pertinente pour des projets mobiles simples et rapides à mettre en place. J’ai aussi réalisé que certaines bonnes pratiques (comme l’utilisation d’un pattern comme BLoC ou Riverpod) deviennent vite nécessaires quand le projet prend de l’ampleur.

À l’avenir, je compte approfondir la gestion d’état avec Flutter, explorer l’utilisation de Provider ou Riverpod, et revoir l’intégration WebSocket avec des messages différés et des historiques plus complets. Cette semaine de projet m’a donné envie d’explorer Flutter davantage, aussi bien sur des projets personnels que dans un cadre professionnel.

---

## Principales Compétences Rattachées à cette Réalisation
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/flutter" color="alternative">Flutter</Button>
<Button pill href="/skills/websocket" color="alternative">Websocket</Button>
<Button pill href="/skills/storage" color="alternative">Stockage</Button>
<Button pill href="/skills/api-rest" color="alternative">Api REST</Button>
<Button pill href="/skills/com" color="alternative">Communication</Button>
<Button pill href="/skills/autonome" color="alternative">Autonomie</Button>