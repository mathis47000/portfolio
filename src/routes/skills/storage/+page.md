# Stockage Local (IndexedDB, Local Storage, SQLite, SharedPreferences)

### Définition

Le **stockage local** désigne l'ensemble des technologies permettant de conserver des données côté client, sans nécessiter d'accès permanent à un serveur. Selon le contexte et la plateforme, différentes solutions sont utilisées :

- **IndexedDB** : Une base de données NoSQL intégrée aux navigateurs web, permettant de stocker des quantités importantes de données structurées. Elle est asynchrone et adaptée aux applications web complexes.

- **Local Storage** : Un mécanisme de stockage synchrone basé sur des paires clé-valeur, principalement utilisé pour stocker des données légères et simples dans les applications web.

- **SQLite** : Une base de données relationnelle légère, embarquée dans de nombreuses plateformes, notamment mobiles. Elle est adaptée au stockage de données structurées complexes et volumineuses.

- **SharedPreferences** : Un système de stockage clé-valeur spécifique à Android, idéal pour conserver des préférences utilisateur ou des configurations simples.

### Mes Éléments de Preuve

**Projet Miaou**

Dans le cadre du projet **Miaou**, une application de messagerie instantanée, j'ai implémenté **IndexedDB** pour conserver l'historique des messages localement. Cela garantissait aux utilisateurs un accès à leurs conversations même en mode hors ligne.

*📌 Anecdote :* Lors du développement, un défi majeur était d'assurer la persistance des messages malgré les rafraîchissements de page ou les fermetures inattendues du navigateur. L'utilisation d'IndexedDB a permis de surmonter cette difficulté en offrant une solution de stockage fiable et performante.

**Projet Androwing**

Pour l'application **Androwing**, destinée à l'enregistrement des performances sportives des rameurs, j'ai utilisé **SQLite** pour stocker localement les données des utilisateurs sur les appareils Android. Cela permettait une consultation rapide et une analyse des performances sans nécessiter de connexion internet constante.

*📌 Anecdote :* L'intégration de SQLite a posé des défis en termes de synchronisation des données entre l'application locale et le serveur central. J'ai mis en place des mécanismes de synchronisation pour assurer la cohérence des données, même en cas de connexions intermittentes.

**Projet Flutter Miaou**

Dans le projet **Flutter Miaou**, une adaptation mobile de l'application de messagerie, j'ai utilisé **SharedPreferences** pour stocker des paramètres utilisateur et des configurations spécifiques à l'application. Cela garantissait une expérience utilisateur cohérente et personnalisée sur différentes sessions.

*📌 Anecdote :* L'un des défis rencontrés était de gérer efficacement les préférences utilisateur tout en assurant une compatibilité entre différentes versions de l'application. L'utilisation de SharedPreferences a facilité cette gestion en offrant une API simple et efficace pour le stockage de petites données.

### Mon Autocritique

- **Niveau de maîtrise :** Je possède une **expertise avancée** dans l'utilisation des différentes solutions de stockage local, tant sur les plateformes web que mobiles. Mon expérience couvre l'implémentation, l'optimisation et la sécurisation de ces solutions dans divers contextes applicatifs.

- **Marge de progression :** Bien que je maîtrise ces technologies, je reconnais l'importance de me tenir informé des évolutions et des meilleures pratiques en matière de sécurité et de performance. Je souhaite approfondir mes connaissances sur les nouvelles solutions de stockage émergentes et leur intégration dans des architectures modernes.

- **Importance de la compétence :** La gestion efficace du stockage local est **cruciale** pour assurer une expérience utilisateur fluide et réactive, notamment dans des environnements à connectivité limitée. Cette compétence est essentielle pour le développement d'applications robustes et performantes.

- **Recul et conseils :** Il est important de **choisir judicieusement** la solution de stockage en fonction des besoins spécifiques de l'application. Par exemple, pour des données structurées complexes, SQLite est recommandé, tandis que pour des préférences simples, SharedPreferences ou Local Storage peuvent suffire. De plus, il est essentiel de considérer les aspects de sécurité, notamment en évitant de stocker des informations sensibles dans des mécanismes non sécurisés comme le Local Storage.

### Mon Évolution dans cette Compétence

- **Projet futur :** Je prévois d'explorer l'intégration de solutions de stockage sécurisées et chiffrées pour des applications nécessitant une protection accrue des données utilisateur.

- **Formation :** Je suis régulièrement des formations et des webinaires sur les nouvelles technologies de stockage et les meilleures pratiques en matière de sécurité des données.

### Principales Réalisations Rattachées

- **Miaou** – Implémentation d'IndexedDB pour le stockage hors ligne des messages.

- **Androwing** – Utilisation de SQLite pour la gestion locale des performances sportives.

- **Flutter Miaou** – Intégration de SharedPreferences pour la gestion des préférences utilisateur.
