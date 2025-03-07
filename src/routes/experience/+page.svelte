<script>
  import { Card, Modal, Timeline, TimelineItem } from "flowbite-svelte";
  import { onMount } from "svelte";

  let selectedExperience = null;
  let isOpen = false;

  function openModal(exp) {
    selectedExperience = exp;
    isOpen = true;
  }

  const experiences = [
    {
      type: "work",
      period: "Sept. 2023 - Aujourd'hui",
      title: "Apprenti Développeur Full Stack",
      company: {
        name: "Capgemini",
        logo: "https://prayasyouthforum.org/wp-content/uploads/2022/08/Capgemini-Logo.jpg",
        website: "https://www.capgemini.com/",
      },
      school: {
        name: "Groupe AEN",
        logo: "https://prepeersstorage.blob.core.windows.net/academic/1_391_logo_075311da-d917-4ad9-8aa1-2cb7b16f56fd.png?sp=r&st=2025-01-30T23:00:00Z&se=2026-01-31T04:06:31Z&spr=https&sv=2022-11-02&sr=c&sig=Mm5p4fZa8%2F4%2BFA04dmK5p259BIm5Y9rzEDR8GPPJTWY%3D",
        website: "https://www.groupe-aen.com/",
      },
      details: {
        description:
          "Alternant dans une équipe d'environ 10 personnes pour le un projet de plugin pour le logiciel 3DEXPERIENCE.",
        technologies: [
          "Angular",
          "Flask",
          "Python",
          "MongoDB",
          "Solr",
          "Docker",
        ],
      },
    },
    {
      type: "work",
      period: "Févr. 2023 - Août 2023",
      title: "Stagiaire Développeur Full Stack",
      company: {
        name: "Capgemini",
        logo: "https://prayasyouthforum.org/wp-content/uploads/2022/08/Capgemini-Logo.jpg",
        website: "https://www.capgemini.com/",
      },
      school: {
        name: "Groupe AEN",
        logo: "https://prepeersstorage.blob.core.windows.net/academic/1_391_logo_075311da-d917-4ad9-8aa1-2cb7b16f56fd.png?sp=r&st=2025-01-30T23:00:00Z&se=2026-01-31T04:06:31Z&spr=https&sv=2022-11-02&sr=c&sig=Mm5p4fZa8%2F4%2BFA04dmK5p259BIm5Y9rzEDR8GPPJTWY%3D",
        website: "https://www.groupe-aen.com/",
      },
      details: {
        description:
          "Stagiaire dans le développement et correction de tickets pour l'application ANEF (L'administration numérique pour les étrangers en France) du ministère de l'intérieur.",
        technologies: [
          "Angular",
          "Flask",
          "Python",
          "MongoDB",
          "Solr",
          "Docker",
        ],
      },
    },
    {
      type: "work",
      period: "Juil. 2022 - Août 2022",
      title: "Livreur de journaux de nuit",
      company: {
        name: "Happy Job",
        logo: "https://www.pagesjaunes.fr/media/agc/59/06/75/00/00/3f/10/57/06/51/5dde59067500003f10570651/5dde59067500003f10570652.jpg",
        website: "#",
      },
      details: {
        description: "Distribution de magazines et journaux durant la nuit.",
      },
    },
    {
      type: "work",
      period: "Avril 2021 - Juin 2021",
      title: "Stagiaire Développeur Web",
      company: {
        name: "Manufacture Générale",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZDWBUMCYny5XQxxidkXsv6fZA2zhmvBovw&s",
        website: "#",
      },
      school: {
        name: "IUT Paul Sabatier",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg9chEh88pAFv5zhbzdAHS4GBqxlYYOo05Q&s",
        website: "https://iut.univ-tlse3.fr/",
      },
      details: {
        description: "Développement d'un site web de gestion financière.",
        technologies: ["Bootstrap", "GraphQL"],
      },
    },
    {
      type: "education",
      period: "Févr. 2022 - Juil. 2025",
      title: "Ingénierie Logicielle",
      school: {
        name: "Groupe AEN",
        logo: "https://prepeersstorage.blob.core.windows.net/academic/1_391_logo_075311da-d917-4ad9-8aa1-2cb7b16f56fd.png?sp=r&st=2025-01-30T23:00:00Z&se=2026-01-31T04:06:31Z&spr=https&sv=2022-11-02&sr=c&sig=Mm5p4fZa8%2F4%2BFA04dmK5p259BIm5Y9rzEDR8GPPJTWY%3D",
        website: "https://www.groupe-aen.com/",
      },
      details: {
        description: "Formation spécialisée en développement logiciel.",
      },
    },
    {
      type: "education",
      period: "Sept. 2021 - Févr. 2022",
      title: "Licence Informatique",
      school: {
        name: "Université de Bordeaux",
        logo: "https://pbs.twimg.com/profile_images/1450757604456677377/e4NqO3Li_400x400.jpg",
        website: "https://www.u-bordeaux.fr/",
      },
      details: {
        description:
          "Formation approfondie en informatique, développement logiciel et gestion des systèmes.",
      },
    },
    {
      type: "education",
      period: "2019 - 2021",
      title: "DUT Informatique",
      school: {
        name: "IUT Paul Sabatier",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg9chEh88pAFv5zhbzdAHS4GBqxlYYOo05Q&s",
        website: "https://iut.univ-tlse3.fr/",
      },
      details: {
        description:
          "Formation en développement logiciel, bases de données et ingénierie informatique.",
      },
    },
    {
      type: "education",
      period: "2016 - 2019",
      title: "Baccalauréat S-SI (Mathématiques)",
      school: {
        name: "Lycée Jean Baptiste de Baudre",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvdtIDMoFKsd-_pV4QM8c4GIQ0VT9msyuZA&s",
        website: "#",
      },
      details: {
        description:
          "Formation en sciences de l'ingénieur, mathématiques et physique avec spécialité en mathématiques.",
      },
    },
  ];
</script>

<h1 class="text-3xl font-bold text-center mb-8">Mon Parcours</h1>

<!-- Double Timeline -->
<div class="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
  <!-- afficher les années juste à côté de la timeline qui ne prend 1-->
  <!-- Timeline Expériences Professionnelles -->
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-center">Expériences</h2>

    <ol class="relative border-s-2 border-blue-500 pt-10">
      <svg
        class="w-6 h-6 text-blue-500 absolute transform -translate-x-1/2 -translate-y-1/2 left-0 real-top-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m5 15 7-7 7 7"
        />
      </svg>
      {#each experiences.filter((exp) => exp.type === "work") as exp}
        <li class="mb-10 ms-4 list-none relative">
          <div
            class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow flex items-center gap-4 relative"
          >
            <!-- Pastille Année -->
            <div
              class="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full"
            >
              {exp.period}
            </div>
            <img
              src={exp.company.logo}
              alt={exp.company.name}
              class="w-12 h-12 rounded-full"
            />
            {#if exp.school}
              <!-- Logo de l'école en pastille -->
              <img
                src={exp.school.logo}
                alt={exp.school.name}
                class="absolute top-0 right-0 w-8 h-8 rounded-full"
              />
            {/if}
            <div>
              <h3 class="font-semibold text-lg">{exp.title}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {exp.company.name}{exp.school ? " / " + exp.school?.name : ""}
              </p>

              <p class="text-sm">{exp.details?.description}</p>
              {#if exp.details?.technologies}
                <div class="mt-2 text-sm text-blue-600">
                  {#each exp.details?.technologies as tech}
                    <span
                      class="px-2 py-1 bg-blue-100 dark:bg-blue-700 rounded text-blue-800 dark:text-white"
                      >{tech}</span
                    >
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </li>
      {/each}
    </ol>
  </div>

  <!-- Timeline Formations -->
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-center">Formations</h2>
    <ol class="relative border-s-2 border-green-500 pt-10">
      <svg
        class="w-6 h-6 text-green-500 absolute transform -translate-x-1/2 -translate-y-1/2 real-top-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m5 15 7-7 7 7"
        />
      </svg>
      <style>
        .real-top-0 {
          top: 0.2rem;
          left: -0.03rem;
        }
      </style>
      {#each experiences.filter((exp) => exp.type === "education") as exp}
        <li class="mb-10 ms-4 list-none relative">
          <div
            class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow flex items-center gap-4 relative"
          >
            <!-- Pastille Année -->
            <div
              class="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full"
            >
              {exp.period}
            </div>

            <img
              src={exp.school?.logo}
              alt={exp.school?.name}
              class="w-12 h-12 rounded-full"
            />

            <div>
              <h3 class="font-semibold text-lg">{exp.title}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {exp.school.name}
              </p>
              <p class="text-sm">{exp.details?.description}</p>
            </div>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</div>

<!-- Modal -->
<Modal bind:open={isOpen}>
  {#if selectedExperience}
    <div class="p-6">
      <h2 class="text-xl font-bold">{selectedExperience.title}</h2>
      <p class="text-gray-600">{selectedExperience.period}</p>
      <p class="mt-4">{selectedExperience.details?.description}</p>
    </div>
  {/if}
</Modal>
