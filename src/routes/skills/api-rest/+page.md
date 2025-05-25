# API REST (Node.js / Flask)

## Définition

Les  API REST  (Representational State Transfer) constituent un style d'architecture logicielle qui définit un ensemble de contraintes pour créer des services web. Elles permettent une communication stateless entre le client et le serveur, en utilisant des opérations standard telles que GET, POST, PUT et DELETE.

 Node.js  est une plateforme JavaScript côté serveur qui permet de créer des applications réseau rapides et évolutives. Associé au framework  Express , il facilite la création d'API REST performantes et modulaires.

 Flask  est un micro-framework Python léger qui offre une grande flexibilité pour le développement d'API REST. Sa simplicité et sa modularité en font un choix privilégié pour des applications nécessitant une architecture minimaliste.

## Mes Éléments de Preuve

### Projet Androwing

Sur le projet Androwing, j’ai créé une API REST en Flask pour centraliser les données des rameurs : envoi des performances, récupération des séances, etc. L’objectif était d’avoir un échange fluide entre l’application cliente et la base de données.

Lors de ce projet j'ai dû sécuriser les endpoints de l'API pour protéger les données sensibles des utilisateurs. J'ai donc implémenté des mécanismes d'authentification basés sur des tokens renforçant ainsi la sécurité de l'application. En utilisant Flask j’ai pu découvrir une façon de faire une API bien plus simple que Java Maven mais en moins performant.	

### Projet Miaou

Pour le projet  Miaou , une application de messagerie instantanée, j'ai conçu le backend en utilisant  Node.js  avec le framework  Express . Cette architecture a permis de gérer efficacement les communications en temps réel entre les utilisateurs en assurant une gestion fluide des messages et des salons de discussion.

L'un des défis majeurs de ce projet a été d'assurer un grand nombre d'utilisateurs simultanés. J'ai donc mis en place une architecture basée sur socket.io qui est une avancée dans ma découverte dans la technologie websocket. J’ai beaucoup appris de cette implémentation API rest avec en parallèle ce flux de données en temps réel.

### Projet Flutter Miaou
Pour Flutter Miaou, une version mobile du même projet, j’ai repris tout le backend existant en Node.js. L’idée était de réutiliser l’API sans avoir à tout recoder, mais en adaptant certains endpoints à Flutter, notamment ceux qui géraient les WebSockets.
J’ai aussi pris le temps de traiter les erreurs de connexion côté mobile pour améliorer l’expérience utilisateur. Le projet était assez court, donc je n’ai pas pu structurer ça autant que je l’aurais voulu, mais j’ai appris à faire au mieux avec les contraintes.
 Et je n’ai pas eu de grand problème du fait de mon expérience sur le projet Miaou mais je regrette le peu de temps alloué à ce projet qui ne me permet pas une structure optimale.

## Mon Autocritique
Je me considère aujourd’hui à l’aise dans la conception d’API REST simples à intermédiaires. J’ai développé des réflexes sur la structuration des routes, la gestion des erreurs, et l’interfaçage avec des bases de données. Je commence aussi à intégrer des notions de sécurité comme les tokens ou la séparation des rôles.

Mais je sais que je peux aller plus loin, notamment sur les aspects de performance (caching, pagination, optimisation SQL) et sur des notions comme les middlewares avancés, la validation automatique de schémas ou la gestion de la montée en charge. Je manque aussi encore de recul sur le versionnage et la maintenance d’une API sur le long terme.

Enfin, je pense que je peux progresser dans l’automatisation des tests d’API et la documentation dynamique.

## Mon Évolution dans cette Compétence

Pour faire évoluer mes compétences, je souhaite apprendre à structurer mes projets backend de manière plus professionnelle. Je compte explorer NestJS pour bénéficier d’une architecture modulaire, rigoureuse et plus adaptée à de gros projets.

Je veux aussi approfondir la documentation automatique avec Swagger ou Postman, mettre en place des tests unitaires et fonctionnels pour mes routes, et utiliser Docker pour rendre mes API facilement déployables.

L’objectif est de passer d’une API fonctionnelle à une API maintenable, testée, sécurisée et prête à être utilisée en production sans friction.
---
## Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>



