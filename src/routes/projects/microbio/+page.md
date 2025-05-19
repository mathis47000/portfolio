# MicroBio : Une Application Web pour le Suivi des Tâches et la Communication en Temps Réel

## Présentation et Définition du Projet

MicroBio est une application web développée durant le semestre 4 à l’ESIEA, dans le cadre d’un Projet Informatique en partenariat avec le laboratoire QSA Conseil, spécialisé en microbiologie alimentaire et basé à l’Agropole d’Agen. Ce projet a été réalisé avec le même groupe que celui du projet Androwing.

L’objectif était de concevoir une solution numérique capable d’optimiser la gestion des tâches au sein du laboratoire, en remplaçant les outils informels comme les post-its, les tableurs ou les échanges de mails. J’ai participé à la création d’un outil collaboratif pensé pour fonctionner sur les écrans tactiles présents dans les laboratoires, mais aussi accessible depuis des postes de travail classiques.

L'application devait répondre à des besoins métiers concrets : améliorer la lisibilité des priorités, permettre un suivi en temps réel des actions en cours, et intégrer une messagerie fluide pour centraliser les échanges. Travailler sur un cas réel m’a permis d’ancrer mes compétences techniques dans une problématique concrète, avec une attention particulière portée à l’ergonomie et à l'efficacité de l’interface.

## Objectifs

Le projet visait à concevoir une application web full stack, accessible depuis un navigateur, capable d’assurer un suivi des tâches en temps réel et d’intégrer une messagerie instantanée fonctionnelle. L’une des principales contraintes techniques était d’implémenter un système WebSocket sans recourir à une bibliothèque préexistante comme socket.io, afin de comprendre en profondeur son fonctionnement.

De mon côté, j’ai été en charge de développer l’essentiel du système de communication en temps réel, aussi bien pour l’affichage dynamique des tâches que pour le module de chat. C’était la première fois que je manipulais les WebSockets dans un projet concret, ce qui a demandé une montée en compétence rapide, notamment sur la gestion des flux entre le frontend Angular et le backend Java.

Le travail s’est organisé selon une méthode agile, avec des réunions quotidiennes, des sprints courts, et des présentations intermédiaires. Chaque démonstration était l’occasion de confronter l’avancement technique à des retours concrets du client, ce qui a permis d’ajuster certaines priorités. J’ai également veillé à rendre l’application simple à prendre en main, intuitive, et adaptée à un public peu familier avec les outils numériques.

## Contexte

MicroBio est le premier projet que j’ai réalisé dans le cadre de ma formation à l’ESIEA, après mon passage en IUT. Ce projet a marqué un tournant dans ma façon d’aborder le développement : il m’a permis de découvrir concrètement les méthodes agiles, de travailler pour un client réel et d’adopter une organisation plus rigoureuse et professionnalisante.

Le client, QSA Conseil, est un laboratoire indépendant spécialisé en microbiologie alimentaire, implanté à l’Agropole d’Agen. Avec plus de 50 000 analyses réalisées chaque année pour plus de 350 clients du secteur agroalimentaire, l’entreprise évolue dans un environnement où chaque tâche doit être exécutée avec rigueur, rapidité et traçabilité.

Dès les premiers échanges, j’ai compris que la réactivité des interactions, la lisibilité des informations et l’instantanéité des mises à jour étaient des éléments clés pour les utilisateurs finaux. Ces contraintes ont directement influencé mes choix techniques, notamment le recours à une architecture en WebSocket, que je ne connaissais pas encore et que j’ai dû apprivoiser rapidement. Cette phase de montée en compétence a été l’un des défis majeurs du projet, mais aussi l’une des plus formatrices.

## Enjeux

L’enjeu technique principal a été l’implémentation d’une WebSocket personnalisée, à la fois côté backend (Java Spring) et côté frontend (Angular), pour permettre la mise à jour instantanée des tâches et des messages du chat. J’ai pris en charge l’essentiel de cette intégration. C’était ma première expérience concrète avec la communication en temps réel sans recourir à une bibliothèque tierce comme socket.io. J’ai dû comprendre le fonctionnement bas-niveau de la WebSocket, structurer les messages échangés, et veiller à leur bon traitement de bout en bout.

Sur le plan humain, le projet m’a confronté à une dynamique de travail en équipe agile. Il a fallu s’organiser efficacement entre des profils aux compétences et aux rythmes variés. J’ai rapidement pris mes marques avec des outils comme Trello pour le suivi des tâches, et j’ai appris à gérer les points d’avancement réguliers, les revues de sprint, et la planification en itérations.

La qualité du code était un autre enjeu fort. Il ne suffisait pas que l’application fonctionne : elle devait rester maintenable, claire et robuste dans le temps. J’ai donc porté une attention particulière à l’architecture, à la lisibilité des fonctions, et à l’isolation des composants métier. Ce souci de propreté dans le code m’a été utile à plusieurs reprises, notamment lors des ajustements de dernière minute avant les démonstrations.

## Risques

L’un des premiers risques identifiés était le rejet de l’application par les utilisateurs finaux, si l’interface s’avérait trop complexe ou trop éloignée de leurs habitudes. Pour limiter ce risque, j’ai simplifié au maximum l’interface, en privilégiant des boutons clairs, une navigation directe et une hiérarchie visuelle forte, adaptée à une utilisation rapide sur écran tactile.

Un autre risque important concernait les performances. Dans un laboratoire, chaque seconde compte, et un outil trop lent ou instable peut nuire à l’efficacité du travail quotidien. J’ai donc veillé à optimiser les requêtes backend et la réactivité de l’interface Angular, notamment sur les flux WebSocket, afin d’assurer une expérience fluide, même avec un grand nombre de tâches affichées simultanément.

La gestion des échanges en temps réel représentait un troisième risque, notamment sur le plan de la confidentialité. Le module de chat que j’ai mis en place devait rester simple, mais fiable et sécurisé. J’ai fait en sorte que les messages ne soient ni perdus, ni affichés au mauvais destinataire, en structurant clairement les canaux et les règles d’affichage côté front et back.

Enfin, la méthodologie agile était nouvelle pour moi. L’alternance entre développement, démonstrations régulières et ajustements permanents m’a obligé à adapter ma manière de travailler. Le principal risque, dans mon cas, était de mal gérer les priorités ou de me disperser dans les tâches techniques. J’ai appris à mieux estimer ma charge de travail et à recentrer mes efforts sur les fonctionnalités les plus utiles pour l’utilisateur final.

## Étapes du Projet

Le projet a débuté par une phase de cadrage fonctionnel, où j’ai participé à la création des premières maquettes de l’interface et à l’identification des fonctionnalités prioritaires. J’ai utilisé Trello pour structurer les tâches et j’ai rédigé plusieurs user stories afin de mieux définir les besoins métiers du laboratoire. Cela m’a aidé à poser un cadre clair et à mieux anticiper les interactions à développer.

Mon travail s’est ensuite concentré sur l’implémentation de la WebSocket, à la fois côté backend en Java (Spring) et côté frontend avec Angular. Ce fut pour moi un vrai défi, car je découvrais cette technologie. J’ai mis en place la logique de communication temps réel pour les tâches, puis étendu ce mécanisme au module de chat. Cela impliquait de gérer finement les abonnements, les canaux, et les conditions d’envoi et de réception des messages, tout en assurant la stabilité et la réactivité de l’interface.

J’ai également pris part à l’architecture du frontend, en contribuant à la création et à l’organisation des composants Angular. J’ai travaillé à l’optimisation des flux de données, en utilisant les Subjects pour déclencher les mises à jour visuelles sans rechargement de la page.

Tout au long du projet, plusieurs phases de test et de revue ont permis de repérer et de corriger des erreurs. J’ai notamment pris en charge la résolution de bugs critiques liés à l’actualisation en direct, qui entraînaient des affichages incohérents ou des retards dans la diffusion des messages.

En fin de semestre, lors de la journée de présentation officielle, j’ai assuré la démonstration technique du fonctionnement de l’application, en expliquant en détail le système de synchronisation des tâches, le fonctionnement du chat et la structure globale de l’application. Le projet a été salué pour sa clarté, sa réactivité, et son utilité métier, et a obtenu la première place lors de l’évaluation finale.

## Acteurs et Interactions

Le projet a été mené avec trois camarades, dans une organisation fluide où les rôles évoluaient selon les phases. Même si je n’étais pas en lien direct avec le client à chaque étape, j’ai systématiquement pris en compte les retours transmis par l’équipe pour adapter mes développements, en particulier sur les aspects visuels et fonctionnels de l’interface. La lisibilité de certains écrans a été retravaillée après des remarques portant sur la surcharge visuelle ou le positionnement des boutons.

J’ai également échangé régulièrement avec les professeurs référents pour présenter l’état d’avancement technique, justifier certains choix d’architecture et obtenir des retours sur l’ergonomie. Ces interactions m’ont permis de mieux défendre mes décisions, d’apprendre à expliquer simplement des solutions techniques, et de prendre du recul sur mes pratiques.

Dans les dernières semaines du projet, j’ai contribué à la rédaction de plusieurs livrables : un guide utilisateur expliquant les principales fonctionnalités de manière accessible, et une documentation technique décrivant le fonctionnement de la WebSocket, les points clés de l’architecture backend, et les composants Angular principaux. Ces documents ont servi de support lors de la démonstration finale.

## Résultats

L’application a été testée avec succès dans le contexte de QSA Conseil. Les fonctionnalités principales – gestion des tâches en temps réel et messagerie instantanée – ont été perçues comme simples, efficaces, et bien adaptées au rythme de travail du laboratoire. L’interface épurée et les mises à jour automatiques ont facilité la prise en main, même pour les utilisateurs les moins familiers avec les outils numériques.

Ces retours positifs ont confirmé la pertinence des choix techniques que j’avais faits, notamment sur la WebSocket développée sans bibliothèque tierce. J’ai pu constater concrètement que ce qui avait été complexe à implémenter devenait, une fois maîtrisé, un vrai atout pour l’usage final.

Le projet a été présenté lors de la journée officielle de démonstration à l’école. La fluidité de la démonstration, la cohérence de l’interface et la réactivité du système ont été saluées par les jurys. L’équipe a obtenu la première place parmi les projets évalués ce jour-là, ce qui a renforcé ma confiance dans mes compétences et dans la capacité à livrer un projet complet, cohérent et utile.

## Mon Regard Critique

### Ma Valeur Ajoutée

J’ai joué un rôle central dans l’implémentation de la communication en temps réel, un des aspects techniques les plus sensibles du projet. J’ai développé la WebSocket à la fois côté backend (Java Spring) et côté frontend (Angular), sans m’appuyer sur des bibliothèques toutes faites. Ce travail m’a permis de maîtriser une technologie que je ne connaissais pas encore, tout en assurant sa stabilité et sa fluidité pour l’utilisateur final.

Au-delà de ce module, j’ai également veillé à la cohérence technique globale du projet. J’ai contribué à identifier et corriger plusieurs bugs critiques liés à la synchronisation des tâches ou à la gestion des connexions simultanées. Ce souci du détail et de la fiabilité a participé à garantir une base de code stable, un critère essentiel dans un contexte semi-professionnel comme celui de QSA Conseil.

### Enseignements Tirés

Ce projet m’a appris à sortir de ma zone de confort. J’ai dû apprendre à utiliser des technologies que je ne connaissais pas encore – comme les WebSockets – tout en assurant un niveau de fiabilité suffisant pour répondre à un besoin réel. C’était aussi la première fois que je participais à un projet full stack en autonomie, avec des enjeux concrets et un vrai client. J’ai donc appris à structurer mon travail, à prioriser les fonctionnalités, et à mieux organiser mon code.

J’ai aussi renforcé mes compétences en Angular, en Java Spring, et dans la conception de flux temps réel. Mais au-delà de la technique, j’ai surtout compris l’importance de la lisibilité pour les utilisateurs finaux. Une interface claire, un bouton bien placé ou une information bien hiérarchisée peut faire toute la différence dans l’acceptation d’un outil.

Enfin, j’ai découvert la rigueur que demande une gestion de projet agile : respecter les échéances, réagir vite aux retours, anticiper les imprévus. Ces contraintes, loin d’être un frein, m’ont aidé à adopter une posture plus professionnelle et plus efficace.

---
## Principales Compétences Rattachées à cette Réalisation

<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill href="/skills/java" color="alternative">Java</Button>
<Button pill href="/skills/angular" color="alternative">Angular</Button>
<Button pill href="/skills/websocket" color="alternative">WebSocket</Button>
<Button pill href="/skills/team" color="alternative">Travail en équipe</Button>
<Button pill href="/skills/com" color="alternative">Communication</Button>
<Button pill href="/skills/gestion" color="alternative">Gestion de projet</Button>
