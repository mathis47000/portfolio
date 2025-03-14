# Flutter Miaou : Une Application Mobile de Messagerie Instantanée

## Présentation et Définition du Projet
**Flutter Miaou** est une application de messagerie instantanée que j’ai développée durant mon **semestre 7**, dans le cadre d’un cours dédié à **Flutter**. L’objectif principal de ce projet était de **découvrir et maîtriser le framework Flutter** en réalisant une version mobile simplifiée de l’application **Miaou**, initialement développée en **Progressive Web App (PWA)**. Cette version mobile se concentre uniquement sur une **room de chat unique**, permettant aux utilisateurs de communiquer en temps réel.

## Objectifs
Le projet avait pour but d’atteindre plusieurs objectifs clés. Tout d’abord, il s’agissait de **se familiariser avec Flutter** et d’appliquer ses concepts fondamentaux au développement mobile cross-platform. Ensuite, il était nécessaire de **réutiliser et adapter le backend existant de Miaou**, basé sur **Node.js et socket.io**, afin qu’il fonctionne correctement avec l’application mobile. Une autre priorité était de **simplifier l’application** en ne conservant que l’essentiel, à savoir une **room de chat en temps réel**. Enfin, un des objectifs techniques était d’**implémenter un système de stockage local**, permettant de conserver l’historique des messages en fonction de la plateforme utilisée, qu’il s’agisse d’Android ou d’iOS.

## Contexte
Ce projet a été réalisé dans un **cadre académique**, avec une contrainte de **temps d’une semaine** pour produire un prototype fonctionnel. L’idée principale était de transposer un projet web préexistant en une **application mobile**, tout en explorant l’architecture **Flutter** et en expérimentant son approche **cross-platform**.

## Enjeux
Plusieurs défis majeurs ont émergé au cours du développement de cette application. Le premier consistait à **comprendre l’écosystème Flutter** et ses principes fondamentaux, tels que la gestion des widgets, le cycle de vie des composants et l’architecture globale d’une application mobile développée avec ce framework. Un autre enjeu important était d’**intégrer les WebSockets avec socket.io**, afin d’assurer une communication en temps réel fluide et efficace entre les utilisateurs. Enfin, un des aspects techniques essentiels du projet résidait dans la **gestion du stockage des messages en local**, qui devait être adaptée aux spécificités des plateformes Android et iOS.

## Risques
Ce projet comportait certains risques et difficultés techniques. Le principal défi technique concernait **l’implémentation correcte de socket.io dans Flutter**, notamment en raison d’un **manque d’expérience avec le pattern BLoC**, qui est souvent utilisé pour gérer l’état des applications Flutter de manière optimale. Un autre risque notable était **la contrainte de temps**, qui imposait de **simplifier certaines fonctionnalités** pour respecter le délai imparti d’une semaine et livrer un prototype fonctionnel.

## Étapes du Projet
### 1. Conception et Planification
Lors de la phase de conception, j’ai défini les **fonctionnalités essentielles** de l’application. L’objectif était de proposer une **interface intuitive et fonctionnelle**, permettant à plusieurs utilisateurs d’échanger des messages en temps réel dans une seule et unique room de discussion. 

Les **technologies utilisées** pour ce projet étaient les suivantes :
- **Flutter & Dart** pour le développement de l’interface mobile et la gestion de l’interaction utilisateur.
- **Node.js et socket.io** pour la gestion du backend et la transmission des messages en temps réel.
- **WebSockets** pour assurer une communication rapide et efficace entre les clients et le serveur.
- **SharedPreferences et Local Storage** pour le stockage local des messages, selon la plateforme (Android ou iOS).

### 2. Développement
Le développement de **Flutter Miaou** s’est déroulé en plusieurs étapes bien définies. La première phase consistait à **concevoir et implémenter l’interface utilisateur avec Flutter**, en adoptant une approche **minimaliste et responsive**, afin d’assurer une compatibilité optimale sur différentes tailles d’écrans.

Ensuite, j’ai travaillé sur **l’intégration des WebSockets**, permettant d’établir une connexion stable avec le serveur et d’assurer une transmission en temps réel des messages échangés dans la room de discussion. Parallèlement, j’ai mis en place un **système de stockage local**, en utilisant **SharedPreferences pour Android et Local Storage pour iOS**, afin de permettre aux utilisateurs de retrouver leurs messages même après la fermeture de l’application.

Enfin, j’ai ajouté un **système d’identification simple**, dans lequel chaque utilisateur doit saisir un pseudo au démarrage de l’application pour pouvoir accéder au chat.

### 3. Présentation et Test
En fin de projet, une **démonstration a été réalisée en classe**, durant laquelle plusieurs appareils et fenêtres de l’application ont été ouverts simultanément afin de tester la fluidité des échanges de messages en conditions réelles.

Les **tests effectués ont été concluants**, validant ainsi l’intégration des WebSockets et la gestion efficace du stockage local.

## Acteurs et Interactions
Ce projet a été réalisé **de manière autonome**, dans le cadre du cours dédié à Flutter. Cependant, j’ai bénéficié des **retours du professeur**, ainsi que des tests effectués en **conditions réelles avec plusieurs utilisateurs**, ce qui m’a permis d’apporter des ajustements techniques et d’optimiser certains aspects du fonctionnement de l’application.

## Résultats
### Compétences Acquises
Grâce à ce projet, j’ai pu développer et renforcer plusieurs compétences techniques essentielles. J’ai appris à **concevoir une application mobile complète en Flutter**, en comprenant les principes fondamentaux du framework. J’ai également expérimenté **l’intégration des WebSockets dans une application mobile**, et j’ai approfondi mes connaissances sur la **gestion du stockage local sur différentes plateformes**.

### Impact
L’application développée était **fonctionnelle en temps réel**, et permettait à plusieurs utilisateurs de communiquer simultanément. Ce projet a représenté une **première expérience concrète sur Flutter**, tout en mettant en évidence certains points d’amélioration, notamment sur l’implémentation avancée de **socket.io et du pattern BLoC**, qui pourront être approfondis dans de futurs projets.

## Mon Regard Critique
### Ma Valeur Ajoutée
Dans ce projet, j’ai assuré l’intégralité du **développement full stack**, en intégrant un **backend existant** avec un **nouveau frontend mobile**. J’ai démontré ma **capacité à m’adapter rapidement** à un nouvel environnement technologique, en apprenant et appliquant Flutter en seulement une semaine.

### Enseignements Tirés
Ce projet m’a permis d’**assimiler les bases de Flutter** et de comprendre son cycle de vie. J’ai également appris à gérer **le stockage local des données** sur différentes plateformes mobiles et identifié des axes d’amélioration concernant **l’implémentation avancée des WebSockets et l’optimisation du pattern BLoC**.

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