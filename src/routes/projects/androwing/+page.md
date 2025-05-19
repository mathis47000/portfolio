# Androwing : Une Application Android pour le Suivi des Performances en Aviron

## Présentation et Définition du Projet
	Client : L'Aviron Agenais est un club d'aviron situé à Agen, en France. Le club propose des activités d'aviron tout au long de l'année, avec des horaires d'ouverture variés. Les activités ont repris depuis le 27 mai 2021, en respectant les mesures sanitaires en vigueur. Le club organise également des événements estivaux, tels que des séjours sportifs et des initiations à l'aviron.
  
 J’ai participé au développement d’Androwing, une application Android permettant aux rameurs du club d’Aviron Agenais d’enregistrer et de consulter leurs performances sportives. Le projet s’est déroulé durant mon semestre 5 à l’ESIEA et s’est étalé sur environ trois mois.

Cette application avait pour but de remplacer des outils trop complexes ou génériques comme Strava, en proposant une solution sur mesure, intuitive, et facile à utiliser pour des utilisateurs non technophiles. Nous avons travaillé en équipe, avec une répartition des tâches assez claire entre le mobile, l’API et le système.
## Objectifs
L’objectif principal était de créer un outil simple, efficace, et accessible pour suivre les performances sportives des membres du club. Je devais permettre à un utilisateur de consulter ses données (temps, distance, vitesse) mais aussi de visualiser ses évolutions.

J'ai utilisé Java pour le développement Android, Flask pour l’API, et PostgreSQL pour la base de données. L’enjeu était également de déployer cette API sur un vrai serveur Fedora, accessible au club via internet, ce qui représentait un défi technique supplémentaire pour moi à ce stade de ma formation.

Au-delà des aspects techniques, l’enjeu majeur était de comprendre les attentes du client (le président du club) et de faire des choix adaptés à des utilisateurs réels, peu familiers avec les applications sportives classiques.

## Identité visuelle
Pour donner à Androwing une identité reconnaissable, nous avons aussi réfléchi à un logo et une charte graphique cohérente. L’idée était de mêler univers sportif et référence technologique. Le logo représentait un robot Android stylisé en rameur, avec une posture évoquant l’effort et la coordination. Les couleurs reprenaient celles du club Aviron Agenais : un bleu pour rappeler l’eau et un vert vif associé à la mascotte Android.
Cette identité visuelle a été utilisée pour nos supports de présentation, les écrans de l’application, et même l’habillage de notre stand final. Elle a permis de créer un lien fort entre l’application et son environnement réel.

### Logo
![Androwing](https://antoinepru.net/assets/img/projects/androwing/logo.png) 

## Contexte
Pour ce projet, j’ai travaillé en équipe avec trois autres étudiants, chacun ayant des affinités techniques différentes. L’école nous laissait une certaine liberté dans le choix de la stack, tant que nous respections un cadre professionnel : travailler avec un vrai client, livrer une solution fonctionnelle, et présenter régulièrement nos avancées. Notre client, l’association Aviron Agenais, était particulièrement investi, ce qui a rendu l’expérience encore plus engageante.

Dès les premières réunions, j’ai compris que leur demande allait bien au-delà d’un simple outil de suivi d’entraînement. Ils voulaient une application mobile simple, fiable, accessible sans formation, qui puisse être utilisée immédiatement après une session de rame. Cette exigence de clarté et d’efficacité nous a naturellement orientés vers le développement d’une application native Android, connectée à un backend aussi léger que possible, basé sur Flask.

J’ai rapidement perçu l’importance d’impliquer le client à chaque étape. Lors de notre première démonstration, notre API n’était pas encore prête. Pour pouvoir présenter quelque chose, j’ai simulé les données côté Android. Ce moment m’a appris à ne pas attendre que tout soit parfait pour tester une idée ou recueillir un retour utilisateur.

Ces échanges réguliers m’ont permis de sortir d’une posture purement technique. À plusieurs reprises, j’ai dû revoir certaines idées de fonctionnalités. Par exemple, nous avions initialement imaginé des graphiques très détaillés, avec des courbes empilées, des filtres avancés, etc. Le client, lui, nous a recadrés très simplement : il voulait voir la distance parcourue, le temps, et une progression claire. Ce retour m’a appris à construire avec l’utilisateur, et pas juste pour lui.

L’un des moments les plus marquants du projet a été la mise en production simulée sur un serveur Fedora. Aucun de nous n’avait de réelle expérience dans ce domaine, et il a fallu collaborer avec des étudiants en spécialité réseau pour comprendre comment faire fonctionner notre backend en environnement réel. C’était parfois chaotique — je me souviens d’un bug spécifique au serveur, lié à un mauvais chemin de fichier dans la configuration Android, qui nous a bloqués pendant des heures. On l’a finalement corrigé à trois, en séance de projet, dans une sorte de session de debugging collective improvisée. Ça reste pour moi un vrai souvenir de collaboration technique efficace.

Tout au long du projet, cette dynamique de retours réguliers et de confrontation à un usage réel m’a permis de progresser. Elle m’a surtout appris à garder le cap sur ce qui compte vraiment : livrer une application utile, utilisable, et utilisée.

## Enjeux
Le premier enjeu majeur pour moi était de concevoir une application réellement utilisable par des rameurs non technophiles. L’association Aviron Agenais rassemble des profils très variés, dont certains peu à l’aise avec les outils numériques. Je savais qu’une interface trop complexe ou des fonctionnalités mal intégrées risquaient de freiner l’adoption. J’ai donc orienté mes choix de design vers la simplicité : des écrans épurés, des interactions limitées au strict nécessaire, pour permettre une prise en main rapide, même juste après l’effort.

Le second enjeu, tout aussi important, concernait ma montée en compétence sur des technologies que je ne maîtrisais pas encore. Avant ce projet, je n’avais jamais mis en place de backend Flask structuré autour d’une API REST. Il a donc fallu apprendre en faisant, souvent dans l’urgence, notamment pour réussir à faire dialoguer efficacement l’application Android avec notre API. Un exemple marquant : la gestion des erreurs 400 et 500, que Retrofit ne remontait pas clairement sans configuration manuelle. J’ai dû apprendre à décoder les logs, structurer les réponses côté serveur, et implémenter un système de gestion d’erreurs lisible pour l’utilisateur. Ce défi, bien que stressant sur le moment, m’a énormément appris. Il m’a forcé à adopter une posture plus rigoureuse, proche de celle attendue d’un ingénieur.

## Risques
Le principal risque du projet résidait dans mon manque d’expérience sur l’ensemble du stack technique. Je découvrais à la fois Android Java, Retrofit, Flask, l’architecture REST, mais aussi la gestion d’une base de données distante et les bases de la mise en production sur un serveur Fedora. Chaque étape technique représentait donc un risque potentiel de blocage, par manque de recul ou de documentation vraiment adaptée à notre contexte.

Un second risque est apparu en cours de route, lorsque j’ai décidé de développer une interface d’administration web pour permettre aux encadrants de gérer les utilisateurs et les entraînements. Cette fonctionnalité, non prévue initialement, m’a poussé à intégrer Angular dans la stack, un framework que je ne maîtrisais pas à l’époque.

Enfin, j’ai sous-estimé la dette technique accumulée au fil des sprints. Par manque de temps, j’ai parfois écrit certaines parties du code un peu trop vite, sans anticiper leur maintenabilité. Cela m’a obligé à revenir sur des choix précipités à quelques jours de la présentation, notamment concernant certains graphiques, ce qui a généré une pression supplémentaire en fin de projet.  

## Étapes du Projet
### 1. Conception et Planification
Dès le lancement du projet, j’ai participé à la définition des fonctionnalités principales de l’application avec le reste de l’équipe. L’objectif était clair : permettre aux rameurs d’enregistrer leurs temps, distances et vitesses d’entraînement, tout en leur offrant une visualisation simple et rapide de leur progression.

Pour poser les bases du projet, j’ai réalisé des maquettes rapides, principalement sur les pages principales (écran d’accueil, saisie d’un entraînement, graphique de progression). Ces croquis ont été utiles pour se mettre d’accord rapidement sur une interface sobre, épurée, adaptée aux utilisateurs visés.

J’ai aussi pris l’initiative de mettre en place un Trello, que j’ai organisé selon les phases du projet et les priorités des fonctionnalités. J’y ai rédigé des user stories pour clarifier le point de vue utilisateur et faciliter la répartition des tâches : par exemple, "en tant qu’adhérent, je veux voir mon classement hebdomadaire dans mon club", ou "en tant qu’entraîneur, je veux pouvoir modifier les données d’un rameur".

Concernant les  technologies utilisées , nous avons choisi :
-  Java Android  pour le développement du frontend mobile.
-  Python Flask  pour la création du backend et de l’API REST.
-  Retrofit  pour permettre la récupération des données depuis le backend vers l’application mobile.
-  Fedora  pour la mise en production simulée du backend.
-  Angular  pour la page admin pour gérer les utilisateurs et les différents club.

### 2. Développement
Le développement s’est déroulé en plusieurs sprints de 1 à 2 semaines, avec des démonstrations intermédiaires devant nos encadrants. J’ai commencé par construire les premiers écrans Android et les connecter progressivement à l’API. J’ai intégré Retrofit dans l’application et géré l’envoi et la réception des données liées aux performances.

J’ai aussi contribué au backend : j’ai développé plusieurs routes REST (enregistrement, récupération, suppression d’une performance) et structuré les schémas de données dans PostgreSQL. La communication mobile-API a parfois nécessité des ajustements très fins, notamment pour gérer les erreurs HTTP (400, 500) que Retrofit n’affichait pas toujours clairement. J’ai alors mis en place une structure d’erreur lisible et centralisée, côté serveur.

Concernant l’organisation technique de l’équipe, j’ai joué un rôle de référence sur Git avec un camarade. Je me suis assurés que les branches étaient correctement nommées, les merges testés localement, et que personne ne poussait directement sur la branche principale sans revue. Ce rôle m’a permis de mieux comprendre la gestion collaborative du code source et d’éviter plusieurs conflits critiques.

Enfin, j’ai été impliqué dans la mise en production sur un serveur Fedora, en partenariat avec des étudiants réseau. J’ai appris à configurer un reverse proxy, à surveiller les logs système, et à résoudre des problèmes liés aux chemins relatifs. C’était une première expérience sur ce type de déploiement, qui m’a vraiment permis de consolider mes bases système.

Vers la fin du projet, j'ai intégré Angular pour développer une interface d’administration web. Je me suis chargé de l’affichage des utilisateurs, du tri des performances et de la suppression de doublons. Bien que novice sur ce framework à l’époque, j’ai réussi à livrer un module simple, mais fonctionnel.

### 3. Présentation du Projet
Lors du TechDay organisé en janvier, notre stand était installé avec un téléphone Android connecté à un grand écran via Chromecast, ce qui permettait de faire des démonstrations en direct. Pour pousser l’immersion, l’association nous avait prêté un rameur d’entraînement, identique à ceux utilisés en salle. On l’a placé à côté de l’écran, ce qui a tout de suite attiré l’attention. Un poster reprenant notre logo et nos couleurs complétait la présentation visuelle.

Pendant l’événement, j’ai assuré une grande partie des démonstrations techniques : création d’un entraînement, consultation du graphique de progression, participation à un challenge… Cela a donné lieu à pas mal de discussions avec les visiteurs, aussi bien sur l’ergonomie que sur la logique de navigation.

Le jury a apprécié la clarté du parcours utilisateur, l’identité visuelle bien intégrée, et la cohérence technique entre les différentes briques du projet. On a terminé dans le top 5 sur 14 projets présentés, ce qui était une belle reconnaissance.

## Acteurs et Interactions
J’ai travaillé sur ce projet en collaboration avec trois camarades, avec qui nous avons réparti les responsabilités selon nos compétences respectives. De mon côté, j’ai été souvent en lien direct avec les membres de l’association Aviron Agenais. Ces échanges réguliers nous ont permis de mieux comprendre leurs attentes, de reformuler certains besoins et surtout d’adapter nos choix fonctionnels et ergonomiques en conséquence.

Cette collaboration client a été très formatrice : elle m’a appris à poser les bonnes questions, à écouter activement, et à faire des compromis techniques pour répondre à un usage réel. Les retours qu’ils nous ont faits, parfois très concrets, ont clairement orienté certaines décisions, comme la simplification des graphiques ou le choix d’une interface mobile épurée.

J’ai également travaillé avec des étudiants spécialisés en réseau, notamment pour la mise en production de notre API sur Fedora. Cette interaction inter-projets a été précieuse pour moi, car elle m’a permis de découvrir une autre facette du développement logiciel, celle de l’infrastructure et de l’administration système. On a appris à collaborer sur des domaines qu’on ne maîtrisait pas encore, et ça a renforcé ma capacité à m’adapter et à m’intégrer dans une équipe pluridisciplinaire.

## Résultats
![Androwing](https://antoinepru.net/assets/img/androwing.png)
### Compétences Acquises
Ce projet m’a permis de renforcer mes compétences en développement full stack, en particulier sur des technologies que je ne maîtrisais pas au départ. J’ai pu travailler à la fois sur le mobile Android natif en Java, et sur la création d’un backend en Flask, structuré autour d’une API REST.

J’ai aussi beaucoup appris sur la gestion des échanges entre client et serveur via Retrofit, ainsi que sur la mise en place d’une base de données PostgreSQL et sa communication avec l’API. Enfin, le déploiement sur un serveur Fedora m’a initié à des notions que je n’avais encore jamais abordées, comme la configuration d’un reverse proxy, la lecture de logs système ou la sécurisation d’un backend.

### Impact
L’application a été bien accueillie lors de la présentation finale, notamment par les membres de l’association Aviron Agenais qui ont reconnu l’utilité d’un outil aussi simple et adapté à leurs pratiques. Le fait d’avoir conçu un produit en lien avec un vrai besoin utilisateur m’a permis de donner du sens à mon développement.

Au-delà des aspects techniques, ce projet m’a permis d’appliquer une démarche complète, proche de ce que l’on pourrait rencontrer dans une PME ou une startup : expression de besoin, conception, choix d’architecture, réalisation, tests, déploiement et communication.

### Livrables remis
À la fin du projet, nous avons rédigé plusieurs livrables pour faciliter l’exploitation et la reprise du projet. J’ai participé à la rédaction d’un petit guide utilisateur à destination des membres du club, expliquant comment s’inscrire, enregistrer une séance, ou participer à un challenge.

Nous avons aussi fourni une documentation technique décrivant l’API, les schémas de la base MySQL, les routes principales, ainsi qu’un guide de déploiement pour l’hébergement sur Fedora. Cela permet au club ou à un futur développeur de pouvoir faire évoluer l’application si besoin.

## Mon Regard Critique
### Ma Valeur Ajoutée
J’ai été impliqué dans toutes les grandes étapes du projet, de la conception des premières maquettes au développement mobile, en passant par l’intégration du backend, la gestion des appels API et la mise en production sur Fedora. J’ai souvent été moteur sur les aspects techniques, notamment dans la mise en place de Retrofit et la structuration des échanges avec le backend.

J’ai aussi assuré un rôle de garant technique avec un camarade sur l’organisation du projet via Git, pour éviter les erreurs de branche ou les conflits non maîtrisés, ce qui a permis de garder un code propre et stable tout au long du développement.

### Enseignements Tirés
Ce projet a été pour moi un véritable tremplin. Il m’a appris à sortir de ma zone de confort, à travailler avec des technologies que je ne connaissais pas, et à apprendre en avançant. J’ai mieux compris l’importance de la clarté côté utilisateur, de l’anticipation des problèmes techniques, mais aussi du dialogue entre développeurs et non-techniciens.

Je retiens aussi que, même dans un cadre scolaire, une bonne organisation (Trello, user stories, Git, répartition claire des tâches) change radicalement la qualité du travail final. Ce projet m’a permis de me sentir plus légitime techniquement et de confirmer mon envie de continuer à évoluer dans des environnements techniques riches et concrets.

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