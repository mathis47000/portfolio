# Info’s Dom : Une Application Mobile pour l'Accompagnement des Personnes Âgées et en Situation de Handicap

## Présentation et Définition du Projet
Info’s Dom est une application mobile développée seul, en Flutter, dans le cadre d’un projet étudiant en partenariat avec une entreprise d’architecture. L’objectif était de concevoir un outil numérique à destination des professionnels intervenant auprès de personnes âgées ou en situation de handicap, afin de faciliter l’accès aux informations essentielles sur leur lieu de vie.

Le projet visait à offrir une interface simple et intuitive, consultable sur mobile, permettant de centraliser les données relatives au domicile des bénéficiaires : aménagement, équipements, habitudes de vie, liste de courses. L’ensemble devait améliorer la qualité des interventions et fluidifier leur organisation quotidienne.

## Objectifs
Mon objectif principal était de créer un prototype fonctionnel du frontend en Flutter, structuré et clair, pouvant servir de base à une future application professionnelle complète. Il s’agissait de :

- Concevoir une navigation fluide entre différentes sections métiers (logement, matériel, habitudes de vie, courses).

- Organiser les données de manière claire grâce à des composants personnalisés.

- Proposer une structure d’authentification sécurisée, bien que non implémentée faute de backend.

- Offrir un prototype utilisable en démonstration, respectant les besoins exprimés par la cliente.

Chaque fonctionnalité a été pensée pour répondre à des besoins concrets exprimés lors de la première réunion, où la cliente a détaillé les cas d’usage.

## Contexte
Ce projet a été pour moi une première approche du développement mobile avec Flutter. Travaillant seul, j’ai découvert une nouvelle manière de concevoir des interfaces Android, à travers le prisme du développement cross-platform. L’absence d’équipe m’a amené à gérer moi-même l’ensemble de l’organisation du projet, depuis le suivi Git jusqu’à la conception visuelle et fonctionnelle de l’application.

J’ai rencontré la cliente à trois reprises : une première fois pour recueillir les besoins, puis deux fois pour présenter mes avancées. Malheureusement, les échanges se sont arrêtés après la troisième réunion. Malgré cela, j’ai continué à avancer sur le projet en rendant visible mon travail à travers le dépôt Git, qui a fait office de livrable final.

## Enjeux
Le premier enjeu était technique : développer une application entièrement en Flutter, sans backend, tout en garantissant une navigation claire et logique. Il fallait structurer les données de manière à pouvoir facilement connecter une base plus tard, sans avoir à revoir tout le code existant.

Le second enjeu était organisationnel. J’ai dû tout gérer seul : les choix techniques, l’architecture, la communication avec la cliente, les démonstrations, la gestion de version. Cela m’a obligé à gagner rapidement en autonomie et à m’adapter à un cadre semi-professionnel avec un client réel.

Enfin, je devais trouver des solutions élégantes pour simuler certaines fonctionnalités, notamment la gestion des utilisateurs et des accès, afin de donner une idée concrète du fonctionnement de l’application malgré l’absence de backend.

## Risques
L’un des principaux risques était l’abandon du projet par manque de retour client. C’est ce qui s’est produit après la troisième réunion, ce qui m’a forcé à continuer en autonomie sans feedback.

L’autre difficulté était liée à la nature statique de l’application : sans backend, impossible de gérer de vraies données dynamiques, ce qui limitait les possibilités d’interaction.

Enfin, le fait de travailler seul présentait un risque organisationnel : sans validation régulière, il était difficile de confirmer que l’application répondait à 100 % aux besoins exprimés. J’ai donc misé sur la clarté du code, la documentation, et la rigueur de la présentation pour rassurer sur la qualité du travail accompli.

## Étapes du Projet
### 1. Cadrage et Analyse des Besoins
Le projet a commencé par une première réunion avec la cliente, une professionnelle du secteur de l’architecture. Lors de cet échange, elle m’a présenté un document contenant les maquettes fonctionnelles de base, centrées sur les informations essentielles à afficher dans les différentes pages. Ces maquettes étaient très simples, sans précisions sur le design ou les interactions, ce qui m’a laissé une grande liberté sur l’ergonomie et la structuration de l’application.

J’ai analysé les informations à intégrer et défini une structure d’application Flutter adaptée. Chaque section correspondait à un module : logement, matériel, habitudes, liste de courses, etc. J’ai pris soin de découper l’interface pour favoriser une organisation claire, pensée pour des professionnels de terrain.

### 2. Mise en place du projet Flutter
Le projet a été initié directement en Flutter. Je n’ai pas utilisé de solution de design UI externe, car aucune directive n’avait été donnée sur l’aspect visuel. J’ai donc fait le choix d’un style épuré et sobre, en accord avec le contexte professionnel de l’application. La navigation principale a été pensée en plusieurs vues, accessibles via une barre inférieure intuitive.

J’ai géré l’intégralité du code sur un dépôt Git personnel, en poussant régulièrement mes avancements entre chaque réunion. Cette gestion m’a permis de maintenir une trace claire de l’évolution du projet, tout en montrant à la cliente les différentes versions lors de nos échanges.

### 3. Développement des pages et gestion des données statiques
Chaque page a été conçue indépendamment avec Flutter. J’ai rencontré quelques difficultés techniques au moment d’intégrer certaines listes, notamment à cause d’un mauvais usage entre ListView et ListView.builder. Ces erreurs m’ont poussé à mieux comprendre le fonctionnement du rendu dynamique dans Flutter.

J’ai développé toutes les pages statiquement, en affichant des données types directement dans le code. Le module de "Liste de courses", par exemple, permet d’ajouter des articles, de les modifier ou de les supprimer, avec une logique locale de mise à jour de l’interface.

### 4. Présentations intermédiaires et ajustements
Deux autres réunions ont eu lieu pendant le développement. À chacune, j’ai présenté les avancées du prototype, en détaillant les nouvelles pages réalisées, les interactions possibles et la structuration choisie. Ces démonstrations ont permis à la cliente de suivre l’évolution du projet, même si les retours étaient assez succincts.

Après la troisième présentation, je n’ai plus eu de retour de la part du commanditaire. L’application n’a donc pas pu évoluer vers une phase de tests ou d’intégration serveur. En revanche, j’ai continué à documenter mes choix et à maintenir un dépôt Git propre, remis à la fin du projet.

### 5. Livraison
Faute d’un backend ou d’un hébergement prévu, l’application n’a pas été publiée. Le projet a été livré sous forme de code source complet, accompagné d’un aperçu fonctionnel local, utilisable sur tout émulateur Flutter. Cette livraison comprenait :

L’interface complète de navigation

Les pages statiques fonctionnelles

Les interactions locales (ex : gestion de liste, cases à cocher)

Un code structuré, facilement extensible pour une future intégration avec un backend

## Acteurs et Interactions
Le projet s’est déroulé sans équipe, ce qui m’a permis d’expérimenter pleinement la gestion d’un projet individuel, avec tous les choix à ma charge. J’ai collaboré directement avec une cliente architecte, dont les retours ont orienté le projet au début. Chaque réunion m’a permis d’ajuster les éléments graphiques ou structurels, comme la place des modules ou l’intitulé des sections.

Même si le projet n’a pas été poursuivi, ces échanges ont été enrichissants. Ils m’ont appris à écouter, reformuler des attentes, proposer des solutions réalistes, et défendre mes choix en tant que développeur.


## Résultats
Le prototype livré contenait toutes les pages principales prévues, organisées dans une navigation fluide et logique. Chaque section était illustrée, parfois interactive, pour simuler un usage réel. L’application a été testée localement et partagée via Git.

Malgré l’absence de backend, la démonstration a permis à la cliente d’avoir une vision concrète de la future application. Ce projet m’a aussi servi de première expérience de gestion complète d’un projet mobile, de la conception à la livraison.


## Mon Regard Critique
### Ma Valeur Ajoutée
J’ai conçu l’ensemble du frontend, de l’arborescence de navigation jusqu’à la logique des écrans. J’ai également géré le dépôt Git, les réunions client, les démonstrations, et l’ensemble des échanges.

Chaque écran a été pensé pour respecter les besoins exprimés, avec un soin particulier apporté à la clarté, à la hiérarchie visuelle, et à la possibilité d’évolution future.

### Enseignements Tirés
Ce projet m’a appris à être autonome, à prendre des décisions techniques cohérentes, et à documenter rigoureusement mon travail. J’ai aussi découvert Flutter, et plus généralement le développement mobile cross-platform, avec ses spécificités et ses avantages.

Même si le projet n’a pas abouti à un produit final, il m’a permis d’expérimenter une relation client réelle, de travailler avec rigueur, et de concevoir un outil structuré malgré l’absence de backend.

---

## Documents d'échanges

<img src="../../../../Infos Dom-1.png">
<img src="../../../../Infos Dom-2.png">
<img src="../../../../Infos Dom-3.png">
<img src="../../../../Info&apos;s Dom.docx-1.png">
<img src="../../../../Info&apos;s Dom.docx-2.png">

## Principales Compétences Rattachées à cette Réalisation

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/flutter" color="alternative">Flutter</Button>
<Button pill href="/skills/team" color="alternative">Travail en équipe</Button>
<Button pill href="/skills/com" color="alternative">Communication</Button>
<Button pill href="/skills/gestion" color="alternative">Gestion de projet</Button>
<Button pill href="/skills/autonome" color="alternative">Autonomie</Button>

