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

Ces projets m’ont permis d’expérimenter plusieurs solutions de stockage local, en les adaptant à la plateforme et au besoin fonctionnel. J’ai appris à faire des choix techniques en fonction du volume, de la nature des données et des contraintes d’accès hors-ligne.

Cela dit, j’ai aussi rencontré certaines limites : mauvaise structuration de modèles sur IndexedDB au départ, erreurs de gestion de cycle de vie avec SQLite, ou encore des usages de stockage peu sécurisés (comme l’enregistrement d’un token dans Local Storage). Ces erreurs m’ont fait progresser, notamment sur les bonnes pratiques de persistance et la sensibilité des données en local.

Je sais aujourd’hui configurer et exploiter chaque outil de manière fonctionnelle, mais je peux encore progresser dans la gestion de la synchronisation, la mise en place de stratégies de cache, ou le chiffrement local pour sécuriser certaines données sensibles.

## Mon Évolution dans cette Compétence

Je souhaite approfondir l’utilisation de systèmes de stockage hybride, en combinant des solutions locales et distantes de manière fluide. Cela inclut la mise en place de stratégies de cache plus avancées, comme la gestion différée des mises à jour ou l’actualisation automatique des données en arrière-plan.

J’envisage aussi d’implémenter des mécanismes de synchronisation plus robustes. Par exemple, en développant une file d’attente locale des actions à synchroniser, capable de détecter les conflits et de reprendre automatiquement après une déconnexion.

Je veux également m’initier à des solutions de chiffrement local afin de mieux sécuriser les données sensibles côté client, en particulier pour les applications de santé, sociales ou professionnelles.

Pour progresser sur ces sujets, je compte continuer à expérimenter dans mes projets personnels, en documentant les problèmes rencontrés et en testant plusieurs approches. Cela me permettra de gagner en maturité sur les décisions techniques et d’améliorer la fiabilité des applications manipulant des données locales.
---
### Principales Réalisations Rattachées

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/projects/miaou" color="alternative">Miaou</Button>
<Button pill href="/projects/androwing" color="alternative">Androwing</Button>
<Button pill href="/projects/flutter-miaou" color="alternative">Flutter Miaou</Button>

