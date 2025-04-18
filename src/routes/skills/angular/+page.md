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

Je considère aujourd’hui avoir un niveau confirmé en Angular. J’ai touché à pas mal d’aspects : routing, formulaires, gestion d’état, services partagés, WebSockets, etc.
Mais j’ai encore une marge de progression sur l’optimisation des performances, notamment en maîtrisant toutes les fonctions de lifecyle et en structurant mieux mon code.
Angular est une technologie très présente dans l’univers professionnel, notamment dans les secteurs réglementés comme la santé ou la banque, qui exigent des solutions robustes, testables et bien documentées. Il m’a permis d’adopter une approche orientée architecture et très stricte, que je retrouve aujourd’hui dans d’autres aspects de mes projets.
Un conseil que je retiens de mon usage d’Angular est qu’il ne faut pas l’utiliser par défaut pour tout type de projet. Il est très performant dans des environnements complexes, mais se devient souvent trop lourd pour des projets simples où des alternatives comme Vue.js ou Svelte sont plus adaptées. 


## Mon Évolution dans cette Compétence

Je prévois d’approfondir mes compétences en Angular en explorant Nx qui permet de mieux gérer les monorepos Angular et d’améliorer la scalabilité des applications complexes.  

Je suis régulièrement les mises à jour officielles d’Angular et j’explore les bonnes pratiques Angular via des formations avancées et des contributions à des projets open-source.  

---
## Principales Réalisations Rattachées
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/microbio" color="alternative">Microbio</Button>



