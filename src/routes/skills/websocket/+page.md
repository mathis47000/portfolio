# WebSockets

## Ma Définition

**WebSockets** est un protocole de communication qui permet une interaction bidirectionnelle en temps réel entre un client (comme un navigateur web) et un serveur. Contrairement au protocole HTTP traditionnel, où le client doit initier chaque requête, WebSockets établit une connexion persistante, permettant au serveur d'envoyer des données au client sans sollicitation préalable. Cette technologie est particulièrement utile pour des applications nécessitant une mise à jour continue des données, telles que les chats en ligne, les jeux multijoueurs ou les tableaux de bord financiers.

## Mes Éléments de Preuve

### Projet Miaou

Dans le cadre du projet **Miaou**, j'ai implémenté un système de messagerie en temps réel en utilisant **socket.io**, une bibliothèque facilitant l'utilisation des WebSockets avec Node.js.

Lors du développement de Miaou, l'un des défis majeurs était d'assurer une communication fluide et sans latence entre les utilisateurs. L'intégration de **socket.io** a permis de gérer efficacement les connexions simultanées et d'aborder le concept de room pour cloisonné différentes sessions de méssageries.

### Projet Microbio

Pour le projet **Microbio**, j'ai opté pour l'utilisation de WebSockets natifs afin de gérer le suivi des tâches en temps réel au sein d'un laboratoire.

L'utilisation de WebSockets natifs m'a permis de mieux comprendre les mécanismes sous-jacents de la communication en temps réel. C’était une première pour moi et c’est sur ce projet que j’ai appris le fonctionnement de cette technologie vraiment pratique pour les messageries mais pas que.

### Projet Flutter Miaou

Dans le projet **Flutter Miaou**, j'ai adapté les WebSockets en **Dart** pour développer une version mobile de l'application de messagerie.

L'intégration des WebSockets en Dart a présenté des défis uniques, notamment en ce qui concerne la gestion de l'état de l'application et la garantie de la stabilité des connexions sur des plateformes mobiles variées. J’ai eu des difficultés à intégrer la websocket au système d’état de flutter qui est différent de tout ce que j’ai connu donc côté application client l’implémentation reste imparfaite.

## Mon Autocritique

Je considère avoir un niveau intermédiaire sur cette compétence. J’ai suffisamment de recul pour savoir quel outil utiliser selon le contexte (WebSocket natif ou avec abstraction), mais je reste encore limité sur les aspects plus avancés comme la reconnexion automatique, la gestion fine de rooms ou la tolérance aux pertes de connexion prolongées.

Ce que je retiens surtout, c’est qu’il ne suffit pas d’échanger des messages en temps réel : il faut aussi garantir la stabilité de la connexion, l’évolutivité et la gestion des erreurs, surtout dans des environnements mobiles où la connectivité est incertaine.

## Mon Évolution dans cette Compétence

Je prévois de tester l'intégration des WebSockets avec **NestJS**, un framework Node.js progressif, pour bénéficier d'une architecture modulaire et évolutive.

---
## Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/microbio" color="alternative">Microbio</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>


