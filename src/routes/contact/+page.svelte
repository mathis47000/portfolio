<script>
  export let timeline = [
    {
      year: "Sept. 2023 - Aujourd'hui",
      experience: "Apprenti Développeur Full Stack",
      company: {
        name: "Capgemini",
        logo: "https://prayasyouthforum.org/wp-content/uploads/2022/08/Capgemini-Logo.jpg",
        website: "https://www.capgemini.com/",
      },
      description:
        "Alternant dans une équipe d'environ 10 personnes pour un projet de plugin pour le logiciel 3DEXPERIENCE.",
      technologies: ["Angular", "Flask", "Python", "MongoDB", "Solr", "Docker"],
    },
    {
      year: "Févr. 2023 - Août 2023",
      experience: "Stagiaire Développeur Full Stack",
      company: {
        name: "Capgemini",
        logo: "https://prayasyouthforum.org/wp-content/uploads/2022/08/Capgemini-Logo.jpg",
        website: "https://www.capgemini.com/",
      },
      description:
        "Développement et correction de tickets pour l'application ANEF du ministère de l'intérieur.",
      technologies: ["Angular", "Flask", "Python", "MongoDB", "Solr", "Docker"],
    },
    {
      year: "Févr. 2022 - Aujourd'hui",
      experience: "Ingénierie Logicielle",
      school: {
        name: "Groupe AEN",
        logo: "https://prepeersstorage.blob.core.windows.net/academic/1_391_logo_075311da-d917-4ad9-8aa1-2cb7b16f56fd.png",
        website: "https://www.groupe-aen.com/",
      },
      description: "Formation spécialisée en développement logiciel.",
      ongoing: true,
    },
    {
      year: "Sept. 2021 - Févr. 2022",
      experience: "Licence Informatique",
      school: {
        name: "Université de Bordeaux",
        logo: "https://pbs.twimg.com/profile_images/1450757604456677377/e4NqO3Li_400x400.jpg",
        website: "https://www.u-bordeaux.fr/",
      },
      description:
        "Formation approfondie en informatique, développement logiciel et gestion des systèmes.",
    },
    {
      year: "2019 - 2021",
      experience: "DUT Informatique",
      school: {
        name: "IUT Paul Sabatier",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg9chEh88pAFv5zhbzdAHS4GBqxlYYOo05Q&s",
        website: "https://iut.univ-tlse3.fr/",
      },
      description:
        "Formation en développement logiciel, bases de données et ingénierie informatique.",
    },
    {
      year: "2016 - 2019",
      experience: "Baccalauréat S-SI (Mathématiques)",
      school: {
        name: "Lycée Jean Baptiste de Baudre",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvdtIDMoFKsd-_pV4QM8c4GIQ0VT9msyuZA&s",
      },
      description:
        "Formation en sciences de l'ingénieur, mathématiques et physique avec spécialité en mathématiques.",
    },
  ];
</script>

<div class="max-w-3xl mx-auto p-6">
  <h2 class="text-3xl font-bold text-center mb-6">Mon Parcours</h2>
  <div class="relative border-l-4 border-gray-300 dark:border-gray-600 pl-6">
    {#each timeline as { year, experience, company, school, description, technologies, ongoing }, i}
      <div class="mb-10 relative">
        <div
          class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow flex items-center gap-4"
        >
          <!-- Logo -->
          {#if company}
            <img
              src={company.logo}
              alt={company.name}
              class="w-12 h-12 rounded-full"
            />
          {:else if school}
            <img
              src={school.logo}
              alt={school.name}
              class="w-12 h-12 rounded-full"
            />
          {/if}

          <!-- Contenu -->
          <div>
            <h3 class="font-semibold text-lg">{experience}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {company ? company.name : school.name}
            </p>
            <p class="text-sm">{description}</p>
            {#if technologies}
              <div class="mt-2 text-sm text-blue-600">
                {#each technologies as tech}
                  <span
                    class="px-2 py-1 bg-blue-100 dark:bg-blue-700 rounded text-blue-800 dark:text-white"
                    >{tech}</span
                  >
                {/each}
              </div>
            {/if}
          </div>
        </div>

        <!-- Affichage fusionné si ongoing -->
        {#if !ongoing || i === timeline.length - 1}
          <div class="text-center mt-2 text-blue-600 font-bold text-lg">
            {year}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
