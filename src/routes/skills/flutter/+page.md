# Flutter & Dart

## Définition
**Flutter** est un framework open-source développé par Google, permettant de créer des **applications mobiles multiplateformes** à partir d’une seule base de code écrite en **Dart**. Grâce à son moteur graphique **Skia** et à son système de **widgets personnalisables**, Flutter offre une interface utilisateur **fluide, performante et réactive**.  
Ce framework permet ainsi de **développer des applications natives** pour **Android, iOS, Windows, macOS et le web**, tout en garantissant une **expérience utilisateur homogène** et optimisée.

Ce qui m’a attiré dans Flutter c’est de pouvoir faire le développement mobile et web dans un seul environnement, tout en conservant une performance égale à un dévellopement classique. C’est pour cela que j’utilise cette technologie dés que j’ai besoin de faire du dévellopement mobile.

## Mes Éléments de Preuve

###  Projet Info’s Dom  
Dans le cadre du projet **Info’s Dom**, j’ai utilisé **Flutter** pour développer une **application mobile** destinée aux **professionnels accompagnant des personnes âgées ou en situation de handicap**.  
L’objectif principal était de **faciliter l’accès aux informations essentielles sur le domicile des bénéficiaires**, afin d’améliorer leur accompagnement quotidien.  

L’un des défis majeurs de ce projet était de concevoir une **navigation intuitive** et **accessible**, adaptée à un public **non technophile**. J’ai donc mis en place une **organisation optimisée des écrans** et une **expérience utilisateur fluide**, en appliquant les principes fondamentaux du **UX/UI Design**.  Suite à ces ajustements, mon permis de gagner beaucoup de temps au final, selon les retours des professionnels lors des entretiens utilisateurs.

En parallèle, j’ai optimisé les performances de l’application en utilisant des widgets adaptés (ListView.builder, const widgets, gestion de l’état via setState au lieu de StatefulBuilder), ce qui a amélioré la fluidité du faite que le ListView.builder est plus fait pour les données de taille variables. 



###  Projet Flutter Miaou  
Lors de mon **septième semestre**, j’ai entrepris le développement d’une **version Flutter** de l’application de **messagerie instantanée Miaou**, en réutilisant le backend existant basé sur **Node.js et Socket.io**.  
Ce projet m’a permis d’explorer **les spécificités de Flutter en gestion d’état** et **l’implémentation des WebSockets en Dart**.  

J’ai rencontré des **difficultés avec le pattern BLoC**, qui est une approche avancée pour la gestion d’état en Flutter. Face à ces challenges, j’ai expérimenté **différentes solutions** et optimisé la gestion des états de l’application, ce qui m’a permis d’acquérir une meilleure compréhension des **architectures Flutter modernes**.
Après plusieurs itérations, j’ai restructuré l’architecture en isolant les couches logiques via des
Streams, réduisant les temps de rechargement de certaines vues.
J’ai aussi intégré les WebSockets à l’aide de socket_io_client, en gérant les connexions et déconnexions via un StreamController, assurant ainsi une synchronisation temps réel sans surcharge du thread principal. Mais malheureusement dû au peu de temps je n’ai pas pu faire une sctructure bien construite pour une évolution de l’applcation possible.

Ce projet a renforcé ma compréhension de la gestion des états dans Flutter, mais aussi des pratiques d’architecture logicielle sur mobile. Mais j’ai encore du chemin pour tout comprendre à cause de la différence avec les autres framework existant.


## Mon Autocritique  

Mon niveau actuel en Flutter est intermédiaire. Je maîtrise bien les bases (navigation, widgets, performance) ainsi que des aspects plus avancés comme la gestion d’état avec BLoC, les animations, ou encore la consommation d’API REST et WebSocket.

Cependant, j’ai encore des axes d’amélioration : je souhaite approfondir ma connaissance d’architectures plus modulaires et testables, comme celle de Riverpod ou Clean Architecture, pour faciliter la maintenance de projets à plus grande échelle.
Je réalise également que certains choix faits lors de mes premiers projets auraient pu être mieux pensés avec une meilleure anticipation (ex. sur le découpage des responsabilités dans les classes).

Flutter est pour moi une compétence stratégique, car elle me permet de proposer des solutions performantes, visuellement attractives et rapidement livrables. Sa montée en puissance dans le monde professionnel renforce son intérêt. Mais très peu utilisé pour le moment parce que je ne fais plus trop de mobile donc à voir pour l’évolution de cette compétence à l’avenir.


## Mon Évolution dans cette Compétence  

Je souhaite **approfondir mes compétences en Flutter** en travaillant sur des projets plus complexes, notamment en entreprise, afin d’**optimiser des applications mobiles performantes et évolutives** (si je réussi à trouver une entreprise ou un projet l’utilisant).
Je continue à **suivre la documentation officielle Flutter** et à **expérimenter des tutoriels avancés**, afin de me perfectionner.
Mais je trouve un petit relachement de Google sur les nouveautés de cette technologie donc j’ai quelques réticences à mettre toute mon énergie dans ce framework. 

---
## Principales Réalisations Rattachées  

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/infos-dom" color="alternative">Info's Dom</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>
