# Microbio : Une Application Web pour le Suivi des Tâches et la Communication en Temps Réel

## Présentation et Définition du Projet
 Microbio  est une application web développée au cours du  semestre 4  à l’école  Intech (Esiea)  en collaboration avec le même groupe que le projet  Androwing . Ce projet a été réalisé pour  Qsa Conseil , une entreprise spécialisée dans les analyses biologiques, qui avait besoin d’un outil efficace pour  optimiser la gestion interne . L’application permet un  suivi des tâches en temps réel  et propose une  fonctionnalité de chat en direct , facilitant la communication entre les employés.

## Objectifs
L’objectif principal du projet était de concevoir une  application web dynamique  permettant de suivre l’avancement des tâches en temps réel de la même façon que trello pour les activités au sein du laboratoire. Pour cela, il était nécessaire de :
- Mettre en place une  WebSocket simple  pour la synchronisation des tâches, sans utiliser de frameworks comme  socket.io .
- Intégrer une fonctionnalité de  chat en direct  pour fluidifier les échanges entre collaborateurs.
- Appliquer les bases de la méthodologie  Scrum , avec une gestion efficace des tâches et des  daily meetings  pour organiser le travail.

## Contexte

Parmi l’ensemble des projets menés au cours de ma formation, MicroBio se distingue comme une expérience particulièrement marquante. Réalisé durant le quatrième semestre à l’ESIEA, ce projet s’inscrivait dans le cadre d’un Projet Informatique (PI), avec un enjeu concret et professionnalisant : répondre aux besoins d’un client réel, le laboratoire QSA Conseil, spécialisé en microbiologie alimentaire.

Ce partenariat avec une structure externe nous a permis de sortir du cadre académique pour concevoir une application web sur mesure, pensée pour résoudre des problématiques métiers précises. Le projet visait à améliorer l'organisation quotidienne des laborantins, dans un environnement exigeant où temps, rigueur et ergonomie sont des paramètres essentiels.

QSA Conseil est un laboratoire indépendant fondé en 1993 et implanté à l’Agropole d’Agen. Il accompagne les professionnels de l’agroalimentaire grâce à des analyses microbiologiques précises, des audits réglementaires, et des formations adaptées. Avec près de 50 000 analyses par an pour plus de 350 clients, l’entreprise joue un rôle clé dans le contrôle sanitaire des produits alimentaires en France.

## Enjeux


Sur le plan technique, le principal défi consistait à mettre en place une communication en temps réel entre les utilisateurs sans utiliser de bibliothèques spécialisées comme Socket.IO. Il a fallu concevoir et implémenter une architecture WebSocket robuste et performante, en maîtrisant les échanges entre le frontend Angular et le backend Java Spring, tout en assurant la synchronisation des tâches et des messages.

L'enjeu humain était également important. Le travail en équipe demandait une organisation rigoureuse, une répartition claire des rôles et une bonne coordination, d’autant plus que les profils et les niveaux techniques étaient variés. La gestion de projet en mode agile, avec des revues fréquentes, des ajustements réguliers et une communication continue, a été essentielle à la réussite du projet.

Enfin, la qualité logicielle représentait un autre enjeu central. Il fallait produire un code propre, structuré et maintenable, tout en respectant les délais imposés. Le contexte semi-professionnel et l’implication d’un client extérieur exigeaient un niveau d’exigence supérieur en termes de rigueur, de documentation et de fiabilité du produit final.

## Risques
Plusieurs risques ont été identifiés dès le début du projet. Le premier concernait l’adoption de l’application par les utilisateurs finaux, notamment dans un environnement professionnel déjà structuré où les habitudes étaient bien ancrées. Il y avait un réel danger que l’outil ne soit pas adopté si celui-ci était perçu comme trop complexe ou mal adapté aux besoins réels des laborantins. Cela aurait entraîné un rejet de la solution et un retour aux méthodes traditionnelles.

Un autre risque majeur était lié à la performance de l’application. Dans un environnement de laboratoire, chaque seconde compte, et un outil trop lent ou avec des bugs récurrents risquait de nuire à l’efficacité du personnel. La gestion de la base de données MySQL et l’optimisation des requêtes SQL étaient cruciales pour éviter des lenteurs dans l’affichage des tâches ou des messages.

Le troisième risque concernait l’intégration du chat textuel dans un environnement professionnel strictement réglementé. La communication en temps réel pouvait entraîner des problèmes de conformité, surtout si certains messages contenaient des informations sensibles ou importantes. Il était donc primordial d’implémenter ce chat de manière simple et non intrusive, tout en veillant à la sécurité et à la confidentialité des échanges.

Enfin, le dernier risque portait sur la gestion de projet en mode agile. La méthodologie exigeait une forte réactivité et des ajustements fréquents. Il y avait un risque de déviation du projet si les priorités n’étaient pas régulièrement réévaluées, notamment en raison de la complexité des tâches à réaliser et des retours constants du client.

## Étapes du Projet
### 1. Conception et Planification
Avant de commencer le développement, nous avons pris le temps de définir les  fonctionnalités essentielles  de l’application. Il était indispensable d’assurer un  suivi des tâches en temps réel  et d’intégrer une  messagerie instantanée .

En ce qui concerne les  technologies utilisées , nous avons opté pour :
-  Angular  pour le développement du frontend.
-  Java Maven  pour la gestion du backend et de la logique applicative.
-  WebSocket  pour assurer la communication en temps réel.

### 2. Développement
Le développement s’est déroulé en plusieurs étapes clés :
- Mise en place de  l’architecture du projet  en Angular et Java Maven.
- Intégration de  WebSocket  pour synchroniser les tâches et gérer la messagerie instantanée.
- Développement du  frontend avec Angular , en exploitant les  Subjects  pour assurer une mise à jour fluide des données en temps réel.
- Développement du  backend avec Java Maven , permettant de stocker et gérer les informations liées aux tâches et aux messages échangés.

### 3. Présentation du Projet
En fin de projet, nous avons participé à une  journée de présentation  lors de laquelle nous avons présenté  Microbio  sur un stand décoré, à l’image de ce que nous avions fait pour  Androwing .
Le projet a rencontré un franc succès et a obtenu la  première place  lors de l’évaluation finale.


## Acteurs et Interactions
Nous avons bénéficié d’ échanges réguliers avec Qsa Conseil , qui nous a fourni des retours constructifs nous permettant d’adapter notre solution à leurs besoins réels.


## Résultats
### Compétences Acquises
Grâce à ce projet, j’ai pu  renforcer mes compétences en développement full stack , notamment dans l’intégration des  WebSockets  et la gestion des flux de données en  Angular . J’ai également acquis une  expérience concrète en méthodologie Scrum .

### Impact
L’application a été  très bien accueillie  lors des présentations et a démontré son  utilité pour l’entreprise cliente . Ce projet nous a permis de mettre en pratique des concepts avancés en développement web et de mieux comprendre la  gestion de projet agile .


## Mon Regard Critique
### Ma Valeur Ajoutée
Dans ce projet, j’ai joué un rôle clé en assurant la  coordination et l’animation  de l’équipe en tant que  Scrum Master . J’ai également pris en charge le  développement des fonctionnalités en temps réel  avec  WebSocket , sans utiliser de framework préexistant, ce qui a constitué un véritable défi technique.

### Enseignements Tirés
Ce projet m’a permis de mieux appréhender les  WebSockets  et leur intégration dans une  application full stack . J’ai également développé des  compétences avancées sur les Subjects Angular , qui sont essentiels pour gérer les flux de données en temps réel dans une application moderne.

---
## Principales Compétences Rattachées à cette Réalisation

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/java" color="alternative">Java</Button>
<Button pill href="/skills/angular" color="alternative">Angular</Button>
<Button pill href="/skills/websocket" color="alternative">WebSocket</Button>
<Button pill href="/skills/team" color="alternative">Travail en équipe</Button>
<Button pill href="/skills/com" color="alternative">Communication</Button>
<Button pill href="/skills/gestion" color="alternative">Gestion de projet</Button>
