# API REST (Node.js / Flask)

## Définition

Les **API REST** (Representational State Transfer) constituent un style d'architecture logicielle qui définit un ensemble de contraintes pour créer des services web. Elles permettent une communication stateless entre le client et le serveur, en utilisant des opérations standard telles que GET, POST, PUT et DELETE.

**Node.js** est une plateforme JavaScript côté serveur qui permet de créer des applications réseau rapides et évolutives. Associé au framework **Express**, il facilite la création d'API REST performantes et modulaires.

**Flask** est un micro-framework Python léger qui offre une grande flexibilité pour le développement d'API REST. Sa simplicité et sa modularité en font un choix privilégié pour des applications nécessitant une architecture minimaliste.

## Mes Éléments de Preuve

### Projet Androwing

Dans le cadre du projet **Androwing**, j'ai développé une **API REST** en utilisant **Flask** pour gérer l'enregistrement des performances sportives des rameurs. Cette API permettait aux applications clientes de soumettre et de récupérer des données relatives aux sessions d'entraînement, assurant ainsi une centralisation efficace des informations.

*Anecdote :* Lors de ce projet, j'ai été confronté à la nécessité de sécuriser les endpoints de l'API pour protéger les données sensibles des utilisateurs. J'ai donc implémenté des mécanismes d'authentification basés sur des tokens, renforçant ainsi la sécurité de l'application.

### Projet Miaou

Pour le projet **Miaou**, une application de messagerie instantanée, j'ai conçu le backend en utilisant **Node.js** avec le framework **Express**. Cette architecture a permis de gérer efficacement les communications en temps réel entre les utilisateurs, en assurant une gestion fluide des messages et des salons de discussion.

*Anecdote :* L'un des défis majeurs de ce projet a été d'assurer la scalabilité du système pour supporter un grand nombre d'utilisateurs simultanés. J'ai donc mis en place une architecture basée sur des microservices et utilisé des techniques de load balancing pour répartir la charge efficacement.

### Projet Flutter Miaou

Dans le projet **Flutter Miaou**, j'ai réutilisé le backend existant de **Miaou** développé en **Node.js** pour l'intégrer avec une nouvelle interface mobile créée avec **Flutter**. Cette intégration a permis de maintenir une cohérence fonctionnelle entre les versions web et mobile de l'application, tout en optimisant les performances.

*Anecdote :* L'intégration du backend existant avec Flutter a nécessité l'adaptation des endpoints de l'API pour assurer une compatibilité optimale avec les requêtes HTTP effectuées depuis l'application mobile. J'ai également implémenté des mécanismes de gestion des erreurs pour améliorer l'expérience utilisateur en cas de problèmes de connexion.

## Mon Autocritique

- **Niveau de maîtrise :** Je possède une expertise avancée dans la conception et le développement d'**API REST** avec **Node.js** et **Flask**, ayant mené plusieurs projets à bien en utilisant ces technologies.

- **Marge de progression :** Je souhaite approfondir mes compétences en matière de sécurisation des API, notamment en explorant des protocoles d'authentification et d'autorisation avancés tels que OAuth2. De plus, l'optimisation des performances des API, notamment en ce qui concerne la gestion des requêtes concurrentes et la réduction de la latence, est un domaine que je souhaite explorer davantage.

- **Importance de la compétence :** La maîtrise des **API REST** est essentielle dans le développement d'applications modernes, car elles constituent le pont entre le frontend et le backend, permettant une communication efficace et structurée. Cette compétence est donc cruciale pour tout développeur souhaitant concevoir des systèmes robustes et évolutifs.

## Mon Évolution dans cette Compétence

- **Projet futur :** Je prévois d'expérimenter avec **NestJS**, un framework progressif pour **Node.js**, afin de développer des **API REST** plus structurées et maintenables. NestJS offre une architecture modulaire qui facilite la gestion de projets complexes et l'intégration de fonctionnalités avancées.

- **Formation continue :** Je m'engage à suivre des formations et des ateliers sur les meilleures pratiques en matière de conception d'**API REST**, notamment en ce qui concerne la documentation avec des outils comme Swagger, la mise en œuvre de tests automatisés et l'utilisation de conteneurs pour le déploiement.
---
## Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>

