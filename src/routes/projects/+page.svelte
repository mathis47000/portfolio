<script>
  const projects = [
    {
      title: "Androwing",
      description: "Application mobile pour la gestion de clubs d'aviron.",
      link: "/projects/androwing",
    },
    {
      title: "Info’s Dom",
      description: "Application Flutter pour la gestion domotique.",
      link: "/projects/infos-dom",
    },
    {
      title: "Miaou",
      description: "Progressive Web App de messagerie instantanée.",
      link: "/projects/miaou",
    },
    {
      title: "Microbio",
      description:
        "Application de gestion de tâches pour une équipe en laboratoire.",
      link: "/projects/microbio",
    },
    {
      title: "Miaou (Flutter version)",
      description: "Application de messagerie instantanée en Flutter.",
      link: "/projects/flutter-miaou",
    },
  ];
</script>

<div class="max-w-3xl mx-auto p-6">
  <h2 class="text-3xl font-bold text-center mb-6">Mes Réalisations</h2>

  <ul class="space-y-4 list-none p-0">
    {#each projects as project}
      <li class="no-underline">
        <a
          href={project.link}
          class="block bg-gray-100 p-4 rounded-lg shadow no-underline hover:bg-gray-200 transition"
        >
          <h3 class="font-semibold text-lg">{project.title}</h3>
          <p class="text-sm text-gray-600">
            {project.description}
          </p>
        </a>
      </li>
    {/each}
  </ul>
</div>
