# Miaou : Une Progressive Web App de Messagerie en Local

## Présentation et Définition du Projet
Miaou est une Progressive Web App de messagerie instantanée développée en autonomie, en dehors des cours. Ce projet est né de ma curiosité pour les WebSockets et de mon envie de comprendre leur fonctionnement à bas niveau. J’ai voulu concevoir une application de discussion simplifiée, sans dépendre d’un backend pour le stockage, et avec une logique en temps réel via socket.io.

L’application propose une room globale où tous les utilisateurs peuvent échanger, mais aussi la possibilité d’envoyer des messages à une personne précise à l’aide d’un préfixe. Tous les messages sont stockés localement grâce à IndexedDB, permettant une consultation hors-ligne tant que le navigateur reste ouvert.


## Objectifs
L'objectif principal de ce projet est de créer une application de messagerie en temps réel utilisant  socket.io  pour la communication. Une caractéristique essentielle de cette application est la possibilité de stocker les messages localement grâce à  IndexedDB , ce qui permet aux utilisateurs de consulter leurs conversations même sans connexion Internet. Un autre défi que je me suis fixé était de développer l'ensemble de l'application sans utiliser de framework frontend, afin de mieux comprendre et maîtriser les technologies sous-jacentes.

## Contexte
Le projet Miaou est né d’un désir personnel d’approfondir la communication temps réel en JavaScript, en prolongeant mes premières découvertes sur les WebSockets. J’ai voulu aller plus loin en expérimentant l’écosystème autour de socket.io, tout en gardant le contrôle complet sur la logique applicative, sans utiliser de framework frontend.

Mon objectif était double : proposer une PWA fonctionnelle en local, même sans connexion internet grâce à IndexedDB, et construire de A à Z un système de messagerie temps réel simple, mais opérationnel. J’ai voulu me confronter à la réalité du développement full stack autonome, avec toutes les contraintes que cela implique : structure du projet, configuration du serveur, gestion des erreurs, test utilisateur, déploiement.

## Enjeux
Un des premiers enjeux a été la gestion du stockage local. IndexedDB n’est pas la technologie la plus intuitive, surtout sans wrapper ou abstraction. J’ai dû apprendre à manipuler ses API asynchrones, organiser les données sous forme d’objets clés-valeurs, et garantir que les anciens messages s’affichent correctement au chargement de l’application. Cela m’a permis de mieux comprendre les contraintes de la persistance locale côté navigateur.

Un autre défi majeur a été l’implémentation de socket.io pour permettre la réception des messages uniquement en cas de connexion active. Ce choix, volontairement minimaliste, posait la question de la fiabilité de la communication dans un contexte de PWA. J’ai fait le choix d’une unique room globale, avec la possibilité d’envoyer un message à un utilisateur spécifique via un préfixe, comme “@julie : coucou”. Le système ne garde aucune trace des messages si le destinataire n’est pas connecté, ce qui implique une logique de présence simple mais réaliste pour une V1.

Enfin, l’absence de framework frontend était un pari risqué, mais motivant. J’ai dû créer mes composants, gérer les événements DOM, et organiser le code de manière lisible, tout en assurant l’interactivité nécessaire pour une messagerie.

## Risques
La mise en œuvre d' IndexedDB  a représenté un défi technique, notamment pour assurer un stockage efficace et rapide des données en local. Un autre risque identifié concerne la prise en main de  socket.io , une technologie que je ne maîtrisais pas entièrement au début du projet, bien que j’aie déjà étudié le fonctionnement des websockets. Mais aussi que le projet ne puisse sauvegarder que si l’utilisateur est connecté au moment de recevoir le message. 

## Étapes du Projet
### 1. Conception et Planification
Avant de démarrer le développement, j’ai pris le temps de définir les grandes lignes fonctionnelles de l’application. L’idée était de créer une messagerie simple, accessible depuis un navigateur, capable d’envoyer des messages en temps réel dans une room globale, tout en permettant aussi des messages directs via un système de préfixe (par exemple, @pseudo).

J’ai rapidement opté pour une architecture sans framework frontend afin de mieux comprendre le fonctionnement natif du DOM, des événements JavaScript, et des APIs du navigateur comme IndexedDB et WebSocket. Cette décision m’a permis de repartir des bases et de développer une logique claire, bien que cela ait parfois été plus long à mettre en œuvre.

### 2. Mise en place du Backend
J’ai commencé par construire un serveur simple avec Node.js et socket.io, permettant de gérer les connexions clients, les diffusions de messages, et l’émission de messages directs selon un identifiant de socket.

Le serveur gérait une unique room publique à laquelle chaque utilisateur se connectait automatiquement. Pour les messages privés, j’ai ajouté une détection de préfixe (@) afin de filtrer les messages et les rediriger au bon destinataire en ciblant son ID socket stocké lors de la connexion.

Bien que simple, ce système a nécessité une réflexion sur la gestion des identifiants utilisateurs (pseudo) et leur réattribution dynamique, notamment en cas de reconnexion ou de changement de pseudo.

### 3. Développement du Frontend
J’ai construit toute l’interface à la main avec HTML, CSS et JavaScript natif. L’objectif était d’avoir un design minimal mais fonctionnel, avec un champ de texte pour l’écriture, un bouton d’envoi, une zone d’affichage des messages, et un bouton de déconnexion permettant de modifier son pseudo à la reconnexion.

L’un des défis majeurs a été la mise en place d’un stockage local avec IndexedDB. Au départ, j’ai expérimenté des solutions plus complexes comme localForage, mais je suis finalement resté sur l’API native pour mieux comprendre son fonctionnement. Cela m’a permis de stocker les messages localement, pour qu’ils soient toujours consultables après un rechargement, même sans connexion au serveur.

J’ai mis en place un système basique de persistance : lors de chaque réception d’un message, celui-ci était stocké dans la base IndexedDB et immédiatement affiché. Si l’utilisateur rechargeait la page, les messages précédents étaient rechargés automatiquement depuis la base locale. En revanche, aucun message n’était reçu rétroactivement en cas de reconnexion, ce qui constitue un axe d’amélioration futur.

### 4. Gestion des états et flux utilisateur
Le changement de pseudo se faisait via un bouton de déconnexion. Cela réinitialisait la connexion socket et permettait à l’utilisateur d’en saisir un nouveau. J’ai mis en place une logique simple côté client pour lier un pseudo à une session, sans authentification complexe, car le but était avant tout de démontrer la logique fonctionnelle et non de simuler une sécurité complète.

Un bouton permettait aussi de vider l’historique local, pour simuler un "reset" utilisateur sans toucher au serveur.

### 5. Mise en ligne
Pour la mise en production, j’ai utilisé Netlify pour héberger le frontend, et Heroku (à l’époque gratuit) pour le backend. La configuration a été rapide grâce à la simplicité du projet, mais j’ai appris à créer un build cohérent, à gérer les versions, et à vérifier la compatibilité PWA (notamment l’ajout du manifest.json et d’un service worker basique pour permettre l’installation sur mobile).

Suite à l’arrêt de la gratuité de Heroku, l’application n’est aujourd’hui plus disponible en ligne. Néanmoins, le code reste exploitable et pourra être redéployé sur une autre plateforme si besoin.

## Acteurs et Interactions
Le projet  Miaou  a été réalisé en grande partie en autonomie. Toutefois, j’ai sollicité des amis pour tester l’application et recueillir leurs retours. Leurs remarques ont été précieuses pour améliorer les fonctionnalités et l’ergonomie de l’application.

## Résultats
### Compétences Acquises
Ce projet m’a permis de progresser significativement dans la manipulation de technologies comme IndexedDB, socket.io, les WebSockets en général, et les concepts de PWA. J’ai également renforcé ma capacité à structurer une application en autonomie, à gérer un backend Node.js simple, et à réaliser des tests fonctionnels avec des utilisateurs.

J’ai appris à me débrouiller avec peu : peu de documentation claire sur IndexedDB, pas d’outillage frontend avancé, et une logique métier à concevoir seul. Ce type de projet m’a aidé à consolider mes réflexes techniques.

### Impact
Même si l’application n’est plus active en ligne, faute d’hébergement gratuit sur Heroku, le projet Miaou m’a servi de tremplin pour mieux comprendre l’équilibre entre persistance locale et communication serveur. Il m’a aussi préparé à des projets plus complexes où l’optimisation des performances, la gestion des erreurs ou la scalabilité deviennent prioritaires.

J’envisage aujourd’hui de reprendre ce projet pour y intégrer un système de cache plus robuste, une gestion des messages différés, et pourquoi pas un backend en Deno ou Bun pour explorer d’autres environnements JavaScript modernes.


## Mon Regard Critique
### Ma Valeur Ajoutée
Miaou est l’un de mes premiers projets complets conçus seul, de l’idée à la mise en ligne. J’ai géré aussi bien la partie serveur (Node.js + socket.io) que la partie frontend sans framework. J’ai aussi fait l’effort d’exploiter IndexedDB malgré sa complexité, et même si le système est encore perfectible, il m’a permis de poser des bases techniques solides.

J’ai appris à réfléchir aux cas de déconnexion, à structurer une logique de pseudo persisté, à différencier les messages envoyés dans la room publique ou de manière ciblée. Ce projet m’a aussi permis de réaliser mes premières expériences d’hébergement, de debugging en production et d’échanges avec des utilisateurs.

### Enseignements Tirés
Ce projet m’a permis de découvrir les limitations de IndexedDB, notamment en matière de lisibilité, de performances ou d’ergonomie quand on débute. Il m’a aussi montré la complexité de maintenir une communication en temps réel sans gestion d’état évoluée. Le fait que les messages ne soient reçus que si l’utilisateur est connecté est une contrainte forte que j’aimerais résoudre dans une future version.

Enfin, ce projet m’a renforcé dans l’idée qu’un backend léger (type socket.io) couplé à une PWA bien pensée peut suffire à répondre à des besoins simples de communication locale, sans avoir besoin d’infrastructure lourde.

---

## Principales Compétences Rattachées à cette Réalisation
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/websocket" color="alternative">WebSocket</Button>
<Button pill href="/skills/storage" color="alternative">Sotockage local</Button>
<Button pill href="/skills/api-rest" color="alternative">Api REST</Button>
<Button pill href="/skills/autonome" color="alternative">Autonomie</Button>

