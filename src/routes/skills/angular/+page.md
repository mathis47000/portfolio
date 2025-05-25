# Angular

## Définition

Angular est un framework front open-source développé par Google, que j’ai découvert pendant ma formation. Il permet de créer des applications web structurées, dynamiques et maintenables, notamment en Single Page Application (SPA). Son système de composants, combiné à la liaison bidirectionnelle des données, en fait un bon outil pour les projets avec beaucoup d’interactions ou de logique à synchroniser entre l’interface et les données.

Ce qui m’a surtout marqué avec Angular, c’est son approche très “entreprise” : on est vite amené à organiser le code de manière modulaire, et à penser en termes de services, de logique réutilisable et de communication inter-composants.


## Mes Éléments de Preuve

Dans le cadre de ma formation à ESIEA j’ai eu la chance d’aborder la base d’Angular. Le routing, les interactions basiques avec une API  et aussi les formulaires. Grâce à ces connaissances, j’ai pu aborder les projets qui suivent avec plus de sérénité.

###  Projet Androwing  

Dans le cadre du projet Androwing, j’ai développé une interface administrateur en Angular permettant de gérer les utilisateurs et les sessions d’entraînement des rameurs. Cette interface permettait de visualiser les performances des adhérents du club et d’organiser les événements directement via un tableau de bord interactif.

Un des défis techniques majeurs de ce projet a été la gestion efficace des données affichées en temps réel. Pour cela, j’ai utilisé RxJS afin de gérer les objets asynchrones et d’optimiser la réactivité du tableau de bord. Cette approche a permis d’améliorer l’expérience utilisateur en rendant les interactions plus fluides et réactives.


### Projet Microbio  

Dans Microbio, j’étais sur une application de gestion de tâches en temps réel. Côté front, j’ai aussi choisi Angular, avec un backend Java en parallèle. L’objectif était de permettre à une équipe de suivre l’avancement des tâches et de communiquer dessus en direct.
C’est sur ce projet que j’ai mis en place les WebSockets “à la main” (sans passer par une librairie externe comme socket.io). J’ai aussi découvert les Subjects d’Angular, qui permettent de faire fonctionner les websockets avec un objet bien construit. C’était un peu difficile au début mais ça m’a beaucoup appris.



## Mon Autocritique

Je me considère aujourd’hui comme à l’aise avec Angular. Je maîtrise les bases (routing, services, communication inter-composants, formulaires) ainsi que des aspects plus avancés comme RxJS, la gestion d’état légère, et la consommation d’API REST.

Cependant, je vois encore des axes d’amélioration sur la lisibilité du code à grande échelle, la structuration en modules avancés, et l’optimisation des performances. Par exemple, je n’ai pas encore utilisé d’outils comme ChangeDetectionStrategy ou OnPush dans un vrai projet, et je sais que ça peut faire une vraie différence à terme.

Angular m’a aussi appris qu’un bon framework peut pousser à mieux penser l’architecture, mais qu’il ne faut pas l’utiliser “par défaut” : pour des projets simples ou des interfaces légères, je préfère désormais des solutions comme Svelte ou même du Vanilla JS structuré.


## Mon Évolution dans cette Compétence

Pour continuer à progresser, je souhaite découvrir Nx pour mieux gérer les projets Angular en monorepo, structurer les gros projets et gagner en scalabilité. Je compte aussi m’initier à la mise en place de tests unitaires et end-to-end dans Angular, en utilisant Jasmine et Cypress.

Je prévois également de comparer Angular à d’autres solutions frontend modernes dans le cadre de projets personnels ou professionnels, pour être capable de recommander la bonne stack en fonction du besoin. Enfin, je reste attentif aux évolutions du framework et à ses nouvelles pratiques, via les changelogs officiels et quelques créateurs de contenu spécialisés.

---
## Principales Réalisations Rattachées
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/microbio" color="alternative">Microbio</Button>



