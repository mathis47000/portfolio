# Flutter & Dart

## Définition
**Flutter** est un framework open-source développé par Google, permettant de créer des **applications mobiles multiplateformes** à partir d’une seule base de code écrite en **Dart**. Grâce à son moteur graphique **Skia** et à son système de **widgets personnalisables**, Flutter offre une interface utilisateur **fluide, performante et réactive**.  
Ce framework permet ainsi de **développer des applications natives** pour **Android, iOS, Windows, macOS et le web**, tout en garantissant une **expérience utilisateur homogène** et optimisée.

Ce qui m’a attiré dans Flutter c’est de pouvoir faire le développement mobile et web dans un seul environnement, tout en conservant une performance égale à un développement classique. C’est pour cela que j’utilise cette technologie dès que j’ai besoin de faire du développement mobile.

## Mes Éléments de Preuve

###  Projet Info’s Dom  
Sur ce projet, j’ai utilisé Flutter pour développer une application mobile à destination de professionnels intervenant auprès de personnes âgées ou en situation de handicap.

L’objectif était de rendre l’accès à l’information plus rapide et plus simple, avec une interface claire, lisible et une navigation intuitive, même pour des utilisateurs peu à l’aise avec le numérique.

J’ai passé pas mal de temps à travailler sur structuration des écrans, ergonomie, lisibilité… Résultat, les retours des utilisateurs en entretiens ont montré que l’app leur faisait gagner du temps au quotidien.

Côté technique, j’ai optimisé les perfs en utilisant des composants comme ListView.builder, des const widgets, et une gestion d’état légère avec setState. Ces choix m’ont permis de garder une app fluide, même avec des données variables. Cela m’a beaucoup fait travailler l’optimisation des listes en général sur Flutter.



###  Projet Flutter Miaou  
Lors de mon **septième semestre**, j’ai fait le développement d’une **version Flutter** de l’application de **messagerie instantanée Miaou**, en utilisant le backend existant basé sur **Node.js et Socket.io**. Ce a été fait dans le cadre d’un cours sur Flutter.
Ce projet m’a permis d’explorer **les spécificités de Flutter en gestion d’état** et **l’implémentation des WebSockets en Dart**.  

Le BLoC m’a donné pas mal de difficultés au début. Mais en testant différentes approches et en structurant mieux le code (streams, séparation des logiques métier/UI), j’ai fini par obtenir une architecture plus propre et plus performante.
Côté WebSocket, j’ai utilisé socket_io_client avec des StreamController pour gérer les connexions/déconnexions sans bloquer le thread principal. Même si le résultat était fonctionnel, je manque encore de recul pour construire une architecture scalable sur le long terme.
Ce projet m’a vraiment permis de progresser sur Flutter, mais m’a aussi montré tout ce que je devais encore apprendre, notamment en comparaison avec d’autres frameworks.


## Mon Autocritique  

Mon niveau actuel en Flutter est intermédiaire. Je maîtrise bien les bases (navigation, widgets, performance) ainsi que des aspects plus avancés comme la gestion d’état avec BLoC, les animations et aussi la consommation d’API REST et WebSocket.

Je souhaite approfondir ma connaissance d’architectures plus modulaires et testables, comme celle de Riverpod ou Clean Architecture, pour faciliter la maintenance de projets à plus grande échelle.
Je réalise également que certains choix faits lors de mes premiers projets auraient pu être mieux pensés avec une meilleure anticipation comme sur le découpage des intéractions et échanges de données.

Flutter reste une technologie stratégique pour moi, car elle permet de livrer vite, bien et sur plusieurs plateformes. Mais je remarque aussi que Google semble un peu ralentir le rythme des nouveautés, ce qui me fait rester prudent sur son adoption à long terme.


## Mon Évolution dans cette Compétence  

J’aimerais continuer à progresser en Flutter, surtout si j’ai l’occasion de bosser sur un projet professionnel d’envergure.
Je continue à suivre la documentation officielle, des tutos avancés et je reste attentif aux évolutions de l’écosystème même si ça stagne un peu côté Google en ce moment.

Si un projet client ou personnel se prête bien au mobile, je n’hésiterai pas à réutiliser Flutter mais sinon, j’attendrai de voir comment l’outil évolue dans les prochaines années.

---
## Principales Réalisations Rattachées  

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/infos-dom" color="alternative">Info's Dom</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>
