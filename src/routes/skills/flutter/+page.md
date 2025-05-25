# Flutter & Dart

## Définition
 Flutter  est un framework open-source développé par Google, permettant de créer des  applications mobiles multiplateformes  à partir d’une seule base de code écrite en  Dart . Grâce à son moteur graphique  Skia  et à son système de  widgets personnalisables , Flutter offre une interface utilisateur  fluide, performante et réactive .  
Ce framework permet ainsi de  développer des applications natives  pour  Android, iOS, Windows, macOS et le web , tout en garantissant une  expérience utilisateur homogène  et optimisée.

Ce qui m’a attiré dans Flutter c’est de pouvoir faire le développement mobile et web dans un seul environnement, tout en conservant une performance égale à un développement classique. C’est pour cela que j’utilise cette technologie dès que j’ai besoin de faire du développement mobile.

## Mes Éléments de Preuve

###  Projet Info’s Dom  
Sur ce projet, j’ai utilisé Flutter pour développer une application mobile à destination de professionnels intervenant auprès de personnes âgées ou en situation de handicap.

L’objectif était de rendre l’accès à l’information plus rapide et plus simple, avec une interface claire, lisible et une navigation intuitive, même pour des utilisateurs peu à l’aise avec le numérique.

J’ai passé pas mal de temps à travailler sur structuration des écrans, ergonomie, lisibilité… Résultat, les retours des utilisateurs en entretiens ont montré que l’app leur faisait gagner du temps au quotidien.

Côté technique, j’ai optimisé les perfs en utilisant des composants comme ListView.builder, des const widgets, et une gestion d’état légère avec setState. Ces choix m’ont permis de garder une app fluide, même avec des données variables. Cela m’a beaucoup fait travailler l’optimisation des listes en général sur Flutter.



###  Projet Flutter Miaou  
Lors de mon  septième semestre , j’ai fait le développement d’une  version Flutter  de l’application de  messagerie instantanée Miaou , en utilisant le backend existant basé sur  Node.js et Socket.io . Ce a été fait dans le cadre d’un cours sur Flutter.
Ce projet m’a permis d’explorer  les spécificités de Flutter en gestion d’état  et  l’implémentation des WebSockets en Dart .  

Le BLoC m’a donné pas mal de difficultés au début. Mais en testant différentes approches et en structurant mieux le code (streams, séparation des logiques métier/UI), j’ai fini par obtenir une architecture plus propre et plus performante.
Côté WebSocket, j’ai utilisé socket_io_client avec des StreamController pour gérer les connexions/déconnexions sans bloquer le thread principal. Même si le résultat était fonctionnel, je manque encore de recul pour construire une architecture scalable sur le long terme.
Ce projet m’a vraiment permis de progresser sur Flutter, mais m’a aussi montré tout ce que je devais encore apprendre, notamment en comparaison avec d’autres frameworks.


## Mon Autocritique  

Je considère mon niveau en Flutter comme intermédiaire solide. J’ai déjà développé plusieurs écrans complexes, géré le stockage local, utilisé des WebSockets, et exploré des approches comme BLoC pour la gestion d’état.

Cela dit, je sens encore des limites dès qu’il s’agit d’architecture évolutive : j’ai parfois du mal à structurer proprement mes projets dès le départ, notamment quand il faut séparer logique, données, UI, etc. Par exemple, sur Flutter Miaou, le code était fonctionnel mais difficile à maintenir, car certaines responsabilités étaient mal réparties.

Je remarque aussi que je pourrais mieux exploiter les animations, les tests, et les outils de debug propres à Flutter. C’est souvent par manque de temps ou d’anticipation que je les laisse de côté.

Malgré tout, Flutter est une techno que j’apprécie, car elle me permet de livrer rapidement un prototype fluide, ce qui est un vrai avantage quand je travaille seul ou dans un cadre pédagogique.




## Mon Évolution dans cette Compétence  

Je souhaite continuer à progresser dans Flutter en structurant mieux mes projets dès le départ. J’aimerais me familiariser avec d’autres architectures comme Riverpod ou Clean Architecture, qui me permettront de mieux séparer mes couches de code et d’améliorer la maintenabilité.

J’ai aussi l’intention de retravailler certains anciens projets comme Flutter Miaou, pour en corriger les limites techniques. L’idée serait d’adopter une architecture plus claire, d’ajouter une vraie gestion d’état et de rendre le code plus réutilisable à long terme.

Je prévois également de m’initier aux tests avec Flutter, en commençant par des tests unitaires et des widgets tests, afin de gagner en rigueur sur la qualité de mon code.

Enfin, j’aimerais garder une vision plus large du développement mobile en explorant d’autres technologies comme SwiftUI ou Kotlin Compose. Cela me permettrait de prendre du recul sur Flutter, de comparer les approches et de mieux justifier mes choix techniques dans un contexte professionnel.

---
## Principales Réalisations Rattachées  

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/infos-dom" color="alternative">Info's Dom</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>
