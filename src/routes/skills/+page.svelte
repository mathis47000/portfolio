<script>
  const technicalSkills = [
    {
      name: "Flutter",
      description: "Développement d'applications mobiles multiplateformes.",
      link: "/skills/flutter",
    },
    {
      name: "Java (Android et Maven)",
      description:
        "Développement d'applications Android et gestion de dépendances.",
      link: "/skills/java",
    },
    {
      name: "Angular",
      description: "Framework structuré pour les applications web.",
      link: "/skills/angular",
    },
    {
      name: "WebSockets",
      description: "Communication bidirectionnelle en temps réel.",
      link: "/skills/websocket",
    },
    {
      name: "Stockage local (IndexedDB, Local Storage, SQLite, SharedPreferences)",
      description:
        "Stockage de données côté client pour une utilisation hors ligne.",
      link: "/skills/storage",
    },
    {
      name: "Api REST (Flask et Maven)",
      description: "Création d'API REST pour les applications web et mobiles.",
      link: "/skills/api-rest",
    },
  ];

  const softSkills = [
    {
      name: "Travail en équipe",
      description:
        "Collaboration et communication avec les membres de l'équipe.",
      link: "/skills/team",
    },
    {
      name: "Autonomie et apprentissage",
      description: "Gérer son temps et apprendre de manière autonome.",
      link: "/skills/autonome",
    },
    {
      name: "Communication",
      description: "Explication claire des concepts techniques.",
      link: "/skills/com",
    },
    {
      name: "Gestion de projet",
      description: "Planification et suivi des tâches.",
      link: "/skills/gestion",
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
