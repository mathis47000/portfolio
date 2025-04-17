# Angular

## Définition

**Angular** est un framework de développement web open-source, maintenu par Google, qui permet de construire des **applications web dynamiques, réactives et évolutives**. Grâce à son architecture basée sur les **composants réutilisables** et la gestion efficace des **données en temps réel**, Angular est particulièrement adapté aux **Single Page Applications (SPAs)** et aux applications d'entreprise nécessitant une **architecture modulaire robuste**.  
L’un des atouts majeurs d’Angular est son **liaison bidirectionnelle des données (two-way binding)**, qui facilite la synchronisation entre l’interface utilisateur et la logique applicative.


## Mes Éléments de Preuve

###  Projet Androwing  

Dans le cadre du projet **Androwing**, j’ai développé une **interface administrateur** en **Angular** permettant aux administrateurs de gérer les utilisateurs et les sessions d’entraînement des rameurs. Cette interface permettait de **visualiser les performances des athlètes** et d’organiser les événements directement via un **tableau de bord interactif**.

Un des défis techniques majeurs de ce projet a été la **gestion efficace des données affichées en temps réel**. Pour cela, j’ai utilisé **RxJS** afin de gérer l’asynchronisme et d’optimiser la réactivité du tableau de bord. Cette approche a permis d’améliorer **l’expérience utilisateur** en rendant les interactions plus fluides et réactives.


### Projet Microbio  

Lors du projet **Microbio**, j’ai développé une **application de gestion de tâches** en **Angular**, connectée à un **backend en Java (Maven)**. Cette application permettait aux utilisateurs d’**assigner et de suivre des tâches en temps réel**, garantissant ainsi une meilleure organisation des processus internes.

Ce projet a été l’occasion pour moi d’implémenter **les WebSockets natifs en Angular**, afin d’assurer **une mise à jour instantanée** des tâches entre les utilisateurs. J’ai également exploré l’utilisation des **Subjects en Angular** qui est nouveau pour moi et donc un peu complexe à mettre en place avec la webscoket mais j'en ai beaucoup appris.



## Mon Autocritique

Je considère aujourd’hui avoir un niveau confirmé en Angular. J’ai pu explorer une grande variété de fonctionnalités avancées du framework, telles que la gestion fine des états, les modules lazy-loaded, ou encore la communication entre composants via des services partagés.
Cela dit, j’ai encore une marge de progression sur l’optimisation des performances, notamment en maîtrisant les stratégies avancées de détection de changements (OnPush) et en structurant mieux les monorepos sur de très larges bases de code. Ce sont des domaines clés dès que l’on travaille sur des applications de grande envergure.
Angular est une technologie très présente dans l’univers professionnel, notamment dans les secteurs réglementés comme la santé ou la banque, qui exigent des solutions robustes, testables et bien documentées. Il m’a permis d’adopter une approche orientée architecture, que je retrouve aujourd’hui dans d’autres aspects de mes projets.
Un conseil que je retiens de mon usage d’Angular : il ne faut pas l’utiliser par défaut. Il brille dans des environnements complexes, mais se révèle souvent trop lourd pour des projets simples, où des alternatives comme Vue.js ou Svelte sont plus adaptées. 


## Mon Évolution dans cette Compétence

Je prévois d’**approfondir mes compétences en Angular** en explorant **Nx**, une solution permettant de mieux gérer **les monorepos Angular** et d’améliorer la **scalabilité des applications complexes**.  

Je suis régulièrement les **mises à jour officielles d’Angular** et j’explore les **bonnes pratiques Angular** via des formations avancées et des contributions à des **projets open-source**.  

---
## Principales Réalisations Rattachées
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/microbio" color="alternative">Microbio</Button>

