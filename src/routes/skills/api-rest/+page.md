# API REST (Node.js / Flask)

## Définition

Les **API REST** (Representational State Transfer) constituent un style d'architecture logicielle qui définit un ensemble de contraintes pour créer des services web. Elles permettent une communication stateless entre le client et le serveur, en utilisant des opérations standard telles que GET, POST, PUT et DELETE.

**Node.js** est une plateforme JavaScript côté serveur qui permet de créer des applications réseau rapides et évolutives. Associé au framework **Express**, il facilite la création d'API REST performantes et modulaires.

**Flask** est un micro-framework Python léger qui offre une grande flexibilité pour le développement d'API REST. Sa simplicité et sa modularité en font un choix privilégié pour des applications nécessitant une architecture minimaliste.

## Mes Éléments de Preuve

### Projet Androwing

Sur le projet Androwing, j’ai créé une API REST en Flask pour centraliser les données des rameurs : envoi des performances, récupération des séances, etc. L’objectif était d’avoir un échange fluide entre l’application cliente et la base de données.

Lors de ce projet j'ai dû sécuriser les endpoints de l'API pour protéger les données sensibles des utilisateurs. J'ai donc implémenté des mécanismes d'authentification basés sur des tokens renforçant ainsi la sécurité de l'application. En utilisant Flask j’ai pu découvrir une façon de faire une API bien plus simple que Java Maven mais en moins performant.	

### Projet Miaou

Pour le projet **Miaou**, une application de messagerie instantanée, j'ai conçu le backend en utilisant **Node.js** avec le framework **Express**. Cette architecture a permis de gérer efficacement les communications en temps réel entre les utilisateurs en assurant une gestion fluide des messages et des salons de discussion.

L'un des défis majeurs de ce projet a été d'assurer un grand nombre d'utilisateurs simultanés. J'ai donc mis en place une architecture basée sur socket.io qui est une avancée dans ma découverte dans la technologie websocket. J’ai beaucoup appris de cette implémentation API rest avec en parallèle ce flux de données en temps réel.

### Projet Flutter Miaou
Pour Flutter Miaou, une version mobile du même projet, j’ai repris tout le backend existant en Node.js. L’idée était de réutiliser l’API sans avoir à tout recoder, mais en adaptant certains endpoints à Flutter, notamment ceux qui géraient les WebSockets.
J’ai aussi pris le temps de traiter les erreurs de connexion côté mobile pour améliorer l’expérience utilisateur. Le projet était assez court, donc je n’ai pas pu structurer ça autant que je l’aurais voulu, mais j’ai appris à faire au mieux avec les contraintes.
 Et je n’ai pas eu de grand problème du fait de mon expérience sur le projet Miaou mais je regrette le peu de temps alloué à ce projet qui ne me permet pas une structure optimale.

## Mon Autocritique

Aujourd’hui je me sens à l’aise pour développer des API REST en Node.js et Flask, que ce soit sur des petits projets ou des applications un peu plus ambitieuses.
Je commence aussi à prendre en compte la sécurité (authentification, gestion des droits), mais c’est un point que je veux continuer à creuser, notamment avec OAuth2 et d’autres méthodes plus avancées.

Côté performance, je vois encore pas mal de choses à travailler comme la gestion de la concurrence ou la réduction de la latence, surtout si je travaille sur une API qui monte en charge.

C’est une compétence que je retrouve partout dans mes projets, et que je considère comme centrale aujourd’hui. Presque tout passe par une API REST, donc savoir en faire une propre, lisible et sécurisée, c’est devenu essentiel.

## Mon Évolution dans cette Compétence

Je pense me pencher bientôt sur NestJS, un framework basé sur Node mais bien plus structuré qu’Express. Il impose une vraie organisation modulaire, ce qui est parfait pour les gros projets.

Je compte aussi approfondir la documentation d’API avec Swagger, automatiser les tests et mieux gérer le déploiement via Docker, pour rendre mes API vraiment pro, de bout en bout.
---
## Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>



