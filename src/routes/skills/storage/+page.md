# Stockage Local (IndexedDB, Local Storage, SQLite, SharedPreferences)

### Définition

Le  stockage local  désigne l'ensemble des technologies permettant de conserver des données côté client, sans nécessiter d'accès permanent à un serveur. Selon le contexte et la plateforme, différentes solutions sont utilisées :

-  IndexedDB  : Une base de données NoSQL intégrée aux navigateurs web, permettant de stocker des quantités importantes de données structurées. Elle est asynchrone et adaptée aux applications web complexes.

-  Local Storage  : Un mécanisme de stockage synchrone basé sur des paires clé-valeur, principalement utilisé pour stocker des données légères et simples dans les applications web.

-  SQLite  : Une base de données relationnelle légère, embarquée dans de nombreuses plateformes, notamment mobiles. Elle est adaptée au stockage de données structurées complexes et volumineuses.

-  SharedPreferences  : Un système de stockage clé-valeur spécifique à Android, idéal pour conserver des préférences utilisateur ou des configurations simples.

## Mes Éléments de Preuve

### Projet Miaou

Pour Miaou, j’ai utilisé IndexedDB afin de stocker les messages localement. Le but était d’assurer l'accès aux conversations même en hors-ligne.

L’un des gros challenges a été de garantir la persistance des données malgré les rechargements ou fermetures du navigateur. IndexedDB m’a offert plus de structure et de robustesse que le Local Storage, qui reste trop limité selon moi pour ce genre d’usage. J’ai beaucoup plus de difficulté à le mettre en place que si j’avais utilisé le localStorage surtout au niveau de la configuration mais très ensuite.

### Projet Androwing

Dans le cadre du projet Androwing, j’ai intégré SQLite pour enregistrer les données utilisateur localement sur Android. Ce choix permettait une consultation fluide et rapide des performances, même sans connexion.

La synchronisation entre base locale et serveur central m’a demandé pas mal de rigueur, surtout pour éviter les doublons ou conflits. J’ai dû gérer manuellement certains flux, mais dans l’ensemble, SQLite s’est avéré simple et fiable. Le seul vrai souci était que j’avais quelques erreurs de boucle dans les traitements d’API, dues à des appels mal gérés.

### Projet Flutter Miaou

Dans Flutter Miaou, j’ai utilisé SharedPreferences pour stocker les paramètres utilisateurs et garantir une expérience cohérente d’une session à l’autre.
Les points de friction sont surtout venus des droits d'accès et de la compatibilité entre versions. Une fois configuré correctement, SharedPreferences s’est montré stable et pratique pour les petits éléments de config.

## Mon Autocritique

Ces projets m’ont permis de tester plusieurs solutions de stockage local, en fonction des besoins réels. J’ai compris l’intérêt d’adapter l’outil à la plateforme, au volume de données et à la structure.

Mais il m’est arrivé de faire des erreurs, notamment en stockant un token dans le Local Storage au début, ce qui ouvrait la porte à des failles XSS. Cette erreur m’a vraiment sensibilisé à la sécurité des données stockées localement.

Autre point à améliorer était  la gestion de la synchronisation entre local et distant, surtout sur des projets plus dynamiques. Je commence à mieux structurer mes modèles de données pour limiter les conflits, mais il reste du travaille.

## Mon Évolution dans cette Compétence

Je souhaite continuer à explorer des solutions plus sécurisées avec du chiffrement local par exemple, pour mieux anticiper les risques.
Je compte aussi affiner mes logiques de cache, de synchronisation et d’optimisation, surtout pour des applis plus sensibles.
---
### Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>

