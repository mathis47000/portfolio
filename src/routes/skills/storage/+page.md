# Stockage Local (IndexedDB, Local Storage, SQLite, SharedPreferences)

### Définition

Le **stockage local** désigne l'ensemble des technologies permettant de conserver des données côté client, sans nécessiter d'accès permanent à un serveur. Selon le contexte et la plateforme, différentes solutions sont utilisées :

- **IndexedDB** : Une base de données NoSQL intégrée aux navigateurs web, permettant de stocker des quantités importantes de données structurées. Elle est asynchrone et adaptée aux applications web complexes.

- **Local Storage** : Un mécanisme de stockage synchrone basé sur des paires clé-valeur, principalement utilisé pour stocker des données légères et simples dans les applications web.

- **SQLite** : Une base de données relationnelle légère, embarquée dans de nombreuses plateformes, notamment mobiles. Elle est adaptée au stockage de données structurées complexes et volumineuses.

- **SharedPreferences** : Un système de stockage clé-valeur spécifique à Android, idéal pour conserver des préférences utilisateur ou des configurations simples.

## Mes Éléments de Preuve

### Projet Miaou

Dans le cadre du projet **Miaou**, une application de messagerie instantanée, j'ai implémenté **IndexedDB** pour conserver l'historique des messages localement. Cela garantissait aux utilisateurs un accès à leurs conversations même en mode hors ligne.

Lors du développement, un défi majeur était d'assurer la persistance des messages malgré les rafraîchissements de page ou les fermetures inattendues du navigateur. L'utilisation d'IndexedDB a permis de surmonter cette difficulté en offrant une solution de stockage hors avec plus de structure que le Localstorage que je trouve trop versatile.

### Projet Androwing

Pour l'application **Androwing**, destinée à l'enregistrement des performances sportives des rameurs, j'ai utilisé **SQLite** pour stocker localement les données des utilisateurs sur les appareils Android. Cela permettait une consultation rapide et une analyse des performances sans nécessiter de connexion internet constante.

L'intégration de SQLite a posé des défis en termes de synchronisation des données entre l'application locale et le serveur central. J'ai mis en place des mécanismes de synchronisation pour assurer la cohérence des données. Mais en général, je n’ai pas trop eu de mal à utiliser cette base de données simple et efficace pour les petites applications. Le seul souci que j’ai rencontré était des erreurs circulaires dans l’exploitation des données avec l’API.

### Projet Flutter Miaou

Dans le projet **Flutter Miaou**, une adaptation mobile de l'application de messagerie, j'ai utilisé **SharedPreferences** pour stocker des paramètres utilisateur et des configurations spécifiques à l'application. Cela garantissait une expérience utilisateur cohérente et personnalisée sur différentes sessions.

L'un des défis rencontrés était de gérer efficacement les préférences utilisateur tout en assurant une compatibilité entre différentes versions de l'application. L'utilisation de SharedPreferences a facilité cette gestion en offrant une utilisation hors ligne. Le plus dur était de mettre en place les autorisations pour l’utilisateur.

## Mon Autocritique

Grâce à ces différents projets, j’ai développé une expertise avancée dans l’implémentation du stockage local sur différentes plateformes. Que ce soit avec IndexedDB sur le web ou SQLite et SharedPreferences sur mobile, j’ai appris à adapter la solution à la nature des données et au contexte d’usage.

Cela dit, j’ai aussi rencontré des limites, notamment dans la gestion de la synchronisation des données. Par exemple, sur le projet Androwing, concilier données locales et serveurs distants m’a forcé à repenser mes modèles de données et les logiques de cache.

Avec le recul, je réalise qu’il est facile de sous-estimer les risques liés à la sécurité. J’ai par exemple stocké par erreur un token de session dans le Localstorage, ce qui exposait l’application à des attaques XSS. Cette erreur m’a sensibilisé à l’importance de bien connaître les faiblesses de chaque solution.

À l’avenir, je compte approfondir les techniques de stockage chiffré, notamment pour les applications sensibles, et mieux intégrer les questions de performance et de protection des données dès la conception.

## Mon Évolution dans cette Compétence

Je prévois d'explorer une plus grande plage de solutions de stockage sécurisées et chiffrées pour des applications nécessitant une protection accrue des données utilisateur afin d’être sûr de mes prochains projets.
---
### Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>