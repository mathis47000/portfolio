<script>
  const technicalSkills = [
    {
      name: "Svelte",
      description: "Développement d'interfaces modernes avec Svelte.",
      link: "/competences/svelte",
    },
    {
      name: "Node.js",
      description: "Back-end performant avec JavaScript/TypeScript.",
      link: "/competences/nodejs",
    },
    {
      name: "Angular",
      description: "Framework structuré pour les applications web.",
      link: "/competences/angular",
    },
    {
      name: "TypeScript",
      description: "Typage strict et robustesse du code.",
      link: "/competences/typescript",
    },
    {
      name: "MongoDB",
      description: "Base de données NoSQL flexible et scalable.",
      link: "/competences/mongodb",
    },
    {
      name: "Docker",
      description: "Containerisation et déploiement d'applications.",
      link: "/competences/docker",
    },
  ];

  const softSkills = [
    {
      name: "Esprit d'équipe",
      description: "Collaboration efficace dans des projets agiles.",
      link: "/competences/equipe",
    },
    {
      name: "Adaptabilité",
      description: "Capacité à s'adapter aux nouvelles technologies.",
      link: "/competences/adaptabilite",
    },
    {
      name: "Résolution de problèmes",
      description: "Trouver des solutions optimisées aux défis techniques.",
      link: "/competences/resolution-problemes",
    },
    {
      name: "Autonomie",
      description: "Gérer son travail et ses priorités efficacement.",
      link: "/competences/autonomie",
    },
    {
      name: "Communication",
      description: "Explication claire des concepts techniques.",
      link: "/competences/communication",
    },
    {
      name: "Gestion du stress",
      description: "Maîtriser la pression en environnement dynamique.",
      link: "/competences/stress",
    },
  ];
</script>

<div class="max-w-3xl mx-auto p-6">
  <h2 class="text-3xl font-bold text-center mb-6">Mes Compétences</h2>

  <!-- Compétences Techniques -->
  <h3 class="text-xl font-semibold mb-4">Compétences Techniques</h3>
  <ul class="space-y-4 list-none p-0">
    {#each technicalSkills as skill}
      <li class="no-underline">
        <a
          href={skill.link}
          class="block bg-gray-100 p-4 rounded-lg shadow no-underline hover:bg-gray-200 transition"
        >
          <h3 class="font-semibold text-lg">{skill.name}</h3>
          <p class="text-sm text-gray-600">
            {skill.description}
          </p>
        </a>
      </li>
    {/each}
  </ul>

  <!-- Compétences Non Techniques -->
  <h3 class="text-xl font-semibold mt-6 mb-4">Compétences Non Techniques</h3>
  <ul class="space-y-4 list-none p-0">
    {#each softSkills as skill}
      <li class="no-underline">
        <a
          href={skill.link}
          class="block bg-gray-100 p-4 rounded-lg shadow no-underline hover:bg-gray-200 transition"
        >
          <h3 class="font-semibold text-lg">{skill.name}</h3>
          <p class="text-sm text-gray-600">
            {skill.description}
          </p>
        </a>
      </li>
    {/each}
  </ul>
</div>
