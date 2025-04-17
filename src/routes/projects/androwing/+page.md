# Androwing : Une Application Android pour le Suivi des Performances en Aviron

## Présentation et Définition du Projet
	Client : L'Aviron Agenais est un club d'aviron situé à Agen, en France. Le club propose des activités d'aviron tout au long de l'année, avec des horaires d'ouverture variés. Les activités ont repris depuis le 27 mai 2021, en respectant les mesures sanitaires en vigueur. Le club organise également des événements estivaux, tels que des séjours sportifs et des initiations à l'aviron.
  
**Androwing** est une application Android développée au cours de mon **semestre 5** à l'école **In'tech (Esiea)** en collaboration avec trois camarades. Nous avons chaque semestre un projet attribué avec différentes entreprises qui propose de petites réalisation accessible pour des étudiants. Nous avons choisi l’entreprise Aviron Agenais avec un côté sportif qui nous a beaucoup plu. Donc ce projet a été conçu pour répondre aux besoins spécifiques de l’association **Aviron Agenais**, qui souhaitait disposer d’une solution inspirée de Strava permettant de suivre et d’analyser les performances de ses rameurs. L’application permet ainsi d’enregistrer les **temps et distances des entraînements** et de les visualiser sous forme de graphiques. Malgrès le fait que l’association utilise déjà Strava, il est plus facile et pertinent d’avoir un application avec des visualisations et des customisations propre à l’association et au rameur.

## Objectifs
L’objectif principal de ce projet était de concevoir une **application Android** dédiée à l’enregistrement et à l’analyse des performances sportives. Tel que un classement des adhérents, des graphiques personels sur les entrées d’entrainement et aussi une fonctionnalité de club pour chaque club de l’association. Pour cela, nous avons dû **développer un backend en Python (Flask)**, capable de gérer les données via une **API REST**, et générer des **graphiques simples** pour la visualisation des entraînements. Et surtout, c’est de créer une synergie entre les adhérents.

## Contexte
Pour ce projet, nous étions une équipe de quatre étudiants, chacun avec des affinités techniques différentes. L’école nous avait laissé une certaine liberté dans le choix de la stack, à condition de respecter un cadre professionnel, avec un client réel, des livrables fonctionnels et des démonstrations régulières. Le client (l’association Aviron Agenais) était particulièrement impliqué. Nous avons pu échanger avec eux dès le lancement du projet, ce qui nous a permis de construire des fonctionnalités vraiment en phase avec leurs attentes.

Dès les premières réunions, on s’est rendu compte que leur demande allait bien au-delà d’un simple suivi d’entraînement. Ils voulaient un outil simple, fiable, utilisable sans formation, et surtout accessible sur mobile. Cette contrainte a tout de suite orienté nos choix vers une application native Android, couplée à un backend Flask aussi léger que possible.
Nous avons adopté une organisation en sprints, avec démonstrations intermédiaires devant les encadrants et les représentants de l’association. Je me souviens que lors de la première démo, notre API n’était pas encore fonctionnelle et nous avions simulé les données dans l’app.
Ce genre de retours concrets nous a poussé à ne pas rester “entre développeurs”, mais à toujours confronter nos idées à la réalité du terrain. Par exemple, nous avions initialement prévu des graphiques très détaillés, avec beaucoup de courbes et de filtres. Le client, lui, voulait simplement un affichage clair : distance, temps, progression.
Un moment marquant du projet a été la mise en production simulée sur Fedora. Aucun de nous n’avait d’expérience sérieuse en déploiement serveur. On a dû collaborer avec les étudiants réseau de notre promo pour comprendre la son fonctionnement. C’était parfois chaotique, mais aussi très formateur. Je me souviens d’un bug qui n’apparaissait que sur le serveur : un simple chemin mal codé dans la configuration de Android, corrigé après trois heures de debugging collectif en cours de projet informatique.
Tout au long du projet, cette dynamique de retours réguliers et de confrontation à un usage réel nous a aidés à progresser et surtout à garder le cap sur ce qui comptait vraiment : livrer une application utile et utilisée.

## Enjeux
Le premier enjeu majeur était l’utilisabilité de l’application par des rameurs non technophiles. L’association Aviron Agenais regroupe des profils très variés, dont certains peu à l’aise avec les outils numériques. Nous savions qu’une interface trop complexe, ou des fonctionnalités mal intégrées, risquaient de décourager l’adoption. Il fallait donc concevoir un outil simple, instinctif, utilisable rapidement après l’effort. Cela a fortement orienté nos choix de design, avec des écrans épurés et des interactions limitées au strict nécessaire.
Le second enjeu résidait dans la montée en compétence sur des technologies inconnues. Aucun membre de l’équipe n’avait mis en place un backend Flask structuré autour d’une API REST avant ce projet. Cela a généré un véritable effort d’autoformation, parfois dans l’urgence, notamment lorsqu’il fallait faire dialoguer efficacement l’application Android et notre API. Un exemple marquant : la gestion des erreurs 400 et 500, que Retrofit ne remontait pas de manière très lisible sans configuration manuelle. Il a donc fallu apprendre à décoder les logs, structurer nos réponses côté serveur, et mettre en place un système de gestion des erreurs clair, tout en avançant sur les autres tâches du sprint. Ce défi, bien que stressant sur le moment, a été extrêmement formateur et nous a obligés à adopter une posture d’ingénieur.

## Risques
Le principal risque du projet résidait dans notre manque d’expérience sur l’ensemble du stack technique. Nous découvrions à la fois Android Java, Retrofit, Flask, l’architecture REST, mais aussi la gestion d’une base de données distante et les bases de la mise en production sur un serveur Fedora. Chaque étape technique présentait donc un risque potentiel de blocage, faute de recul ou de documentation parfaitement adaptée à notre cas.
Un second risque est apparu en cours de projet, lorsqu’il a été décidé de développer une interface d’administration web afin que les encadrants puissent gérer les utilisateurs et les entraînements. Cette fonctionnalité, non prévue initialement, nous a amenés à intégrer Angular dans notre stack, un framework que nous ne maîtrisions à l’époque.
Enfin, nous avons sous-estimé la dette technique accumulée au fil des sprints. Par manque de temps, certaines parties du code ont été écrites trop vite, sans prise en compte de leur maintenabilité. Cela nous a obligés à revenir sur des choix précipités à quelques jours de la présentation, notamment sur certains graphiques, ce qui a généré une pression supplémentaire en fin de projet.

## Étapes du Projet
### 1. Conception et Planification
Dès le début du projet, nous avons défini les **fonctionnalités principales** de l’application. Celles-ci incluent l’**enregistrement des performances sportives**, la **création de graphiques de suivi** et la mise en place d’une **API REST** pour la gestion des données.

Concernant les **technologies utilisées**, nous avons choisi :
- **Java Android** pour le développement du frontend mobile.
- **Python Flask** pour la création du backend et de l’API REST.
- **Retrofit** pour permettre la récupération des données depuis le backend vers l’application mobile.
- **Fedora** pour la mise en production simulée du backend.
- **Angular** pour la page admin pour gérer les utilisateurs et les différents club.

### 2. Développement
Le développement s’est déroulé en plusieurs phases. Tout d’abord, nous avons structuré l’application Android et implémenté les **premières interfaces utilisateur**. Ensuite, nous avons créé un **backend en Flask**, chargé de stocker les performances des utilisateurs et de fournir ces données via une **API REST**.

L’intégration de **Retrofit** dans l’application Android a permis de récupérer et d’afficher les données du backend directement sur l’interface mobile. Enfin, nous avons collaboré avec des étudiants spécialisés en **réseaux (SI)** pour simuler une **mise en production sur un serveur Fedora**.

### 3. Présentation du Projet
En fin de projet, nous avons participé à une **journée de présentation**, où nous avons tenu un stand décoré afin d’expliquer notre travail. Ce fut l’occasion de démontrer le fonctionnement de l’application et d’échanger avec les visiteurs. À l’issue de l’événement, le projet a été **évalué et classé**, mettant en avant les efforts fournis et les compétences acquises.

## Acteurs et Interactions
Le projet **Androwing** a été réalisé en **collaboration avec trois camarades**. Nous avons également travaillé en étroite interaction avec **l’association Aviron Agenais**, qui nous a fourni des retours précieux sur leurs attentes et besoins. Cette collaboration nous a permis d’affiner les fonctionnalités de l’application et d’optimiser son utilisation pour les rameurs. Enfin, nous avons bénéficié du soutien des étudiants en **spécialité réseau**, qui nous ont aidés dans la mise en production sur **Fedora**.

## Résultats
![Androwing](https://antoinepru.net/assets/img/androwing.png)
### Compétences Acquises
Grâce à ce projet, j’ai pu **renforcer mes compétences en développement full stack**, en travaillant aussi bien sur la partie **mobile Android** que sur la **gestion d’un backend Flask**.

### Impact
L’application a été bien accueillie lors des présentations et a démontré son utilité pour l’association **Aviron Agenais**. Ce projet nous a permis d’appliquer des concepts techniques dans un cadre réel et d’apprendre à gérer un projet de développement en équipe.


## Mon Regard Critique
### Ma Valeur Ajoutée
Mon rôle dans ce projet a été d’intervenir à **toutes les étapes du développement**, allant de la conception du frontend Android jusqu’à la mise en production du backend. J’ai également contribué à **la résolution de problèmes techniques complexes**, notamment en ce qui concerne l’implémentation de **Retrofit**.

### Enseignements Tirés
Ce projet m’a permis d’approfondir ma compréhension du **développement mobile Android** et de mieux maîtriser les outils liés aux **API REST**. J’ai également découvert les défis liés à la **mise en production d’un backend**, ainsi que l’importance de la **collaboration inter-équipe**, en particulier avec les étudiants en réseau.

---

## Principales Compétences Rattachées à cette Réalisation

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/java" color="alternative">Android</Button>
<Button pill href="/skills/api-rest" color="alternative">Flask</Button>
<Button pill href="/skills/angular" color="alternative">Angular</Button>
<Button pill href="/skills/storage" color="alternative">Stockage</Button>
<Button pill href="/skills/team" color="alternative">Travail en équipe</Button>
<Button pill href="/skills/com" color="alternative">Communication</Button>
<Button pill href="/skills/gestion" color="alternative">Gestion de projet</Button>