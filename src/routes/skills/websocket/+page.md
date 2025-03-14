# WebSockets

## Ma Définition

**WebSockets** est un protocole de communication qui permet une interaction bidirectionnelle en temps réel entre un client (comme un navigateur web) et un serveur. Contrairement au protocole HTTP traditionnel, où le client doit initier chaque requête, WebSockets établit une connexion persistante, permettant au serveur d'envoyer des données au client sans sollicitation préalable. Cette technologie est particulièrement utile pour des applications nécessitant une mise à jour continue des données, telles que les chats en ligne, les jeux multijoueurs ou les tableaux de bord financiers.

## Mes Éléments de Preuve

### Projet Miaou

Dans le cadre du projet **Miaou**, j'ai implémenté un système de messagerie en temps réel en utilisant **socket.io**, une bibliothèque facilitant l'utilisation des WebSockets avec Node.js.

**Anecdote** : Lors du développement de Miaou, l'un des défis majeurs était d'assurer une communication fluide et sans latence entre les utilisateurs. L'intégration de **socket.io** a permis de gérer efficacement les connexions simultanées et d'offrir une expérience utilisateur réactive.

### Projet Microbio

Pour le projet **Microbio**, j'ai opté pour l'utilisation de WebSockets natifs afin de gérer le suivi des tâches en temps réel au sein d'un laboratoire.

**Anecdote** : L'utilisation de WebSockets natifs m'a permis de mieux comprendre les mécanismes sous-jacents de la communication en temps réel, sans l'abstraction offerte par des bibliothèques tierces. Cela a conduit à une implémentation plus légère et adaptée aux besoins spécifiques du projet.

### Projet Flutter Miaou

Dans le projet **Flutter Miaou**, j'ai adapté les WebSockets en **Dart** pour développer une version mobile de l'application de messagerie.

**Anecdote** : L'intégration des WebSockets en Dart a présenté des défis uniques, notamment en ce qui concerne la gestion de l'état de l'application et la garantie de la stabilité des connexions sur des plateformes mobiles variées.

## Mon Autocritique

**Niveau de maîtrise** : Je me situe à un niveau **intermédiaire**, avec une bonne compréhension des concepts fondamentaux des WebSockets, tout en identifiant des axes d'optimisation.

**Marge de progression** : Je souhaite approfondir la gestion des événements complexes et explorer les mécanismes de reconstructions automatiques des connexions pour améliorer la résilience des applications.

**Importance de la compétence** : La maîtrise des WebSockets est essentielle pour le développement d'applications modernes nécessitant une communication en temps réel, telles que les plateformes de messagerie, les systèmes de notification ou les applications collaboratives.

## Mon Évolution dans cette Compétence

**Projet futur** : Je prévois de tester l'intégration des WebSockets avec **NestJS**, un framework Node.js progressif, pour bénéficier d'une architecture modulaire et évolutive.

---
## Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/microbio" color="alternative">Microbio</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>
