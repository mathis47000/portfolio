<script>
  import { Button } from "flowbite-svelte";
</script>

<h1 class="text-3xl font-bold text-center mt-8 mb-4">Mon parcours</h1>

<div class="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
  <!-- Colonne gauche : Image frise (2/3) -->
  <div class="md:col-span-2">
    <div class="text-center mt-4">
      <span
        class="inline-block bg-red-400 text-white px-2 py-1 rounded-full text-sm ml-2"
      >
        Expériences
      </span>
      <span
        class="inline-block bg-blue-400 text-white px-2 py-1 rounded-full text-sm"
      >
        Formations
      </span>
    </div>
    <img
      src="exp.png"
      alt="Frise chronologique"
      class="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  <!-- Colonne droite : Liens formations + projets (1/3) -->
  <div class="space-y-4">
    <h2 class="text-2xl font-bold mb-4">Formations</h2>

    <Button
      href="https://www.esiea.fr/"
      color="alternative"
      class="w-full flex items-center justify-start gap-2 no-underline"
    >
      <img src="esiea.png" alt="Logo ESIEA" class="w-10 h-10" />
      ESIEA – Ingénierie Logicielle
    </Button>

    <Button
      href="https://www.u-bordeaux.fr"
      color="alternative"
      class="w-full flex items-center justify-start gap-2 no-underline"
    >
      <img src="ub.jpg" alt="Logo UB" class="w-10 h-10" />
      Université de Bordeaux – Licence Informatique
    </Button>

    <Button
      href="https://iut.univ-tlse3.fr"
      color="alternative"
      class="w-full flex items-center justify-start gap-2 no-underline"
    >
      <img src="iut.png" alt="Logo IUT" class="w-10 h-10" />
      IUT Paul Sabatier – DUT Informatique
    </Button>

    <Button
      href="https://lyceedebaudre.net/"
      color="alternative"
      class="w-full flex items-center justify-start gap-2 no-underline"
    >
      <img src="db.jpeg" alt="Logo Baudre" class="w-10 h-10" />
      Lycée Jean Baptiste de Baudre
    </Button>

    <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
      Projets ESIEA
    </h2>

    <Button
      href="../projects/androwing"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Androwing
    </Button>

    <Button
      href="../projects/microbio"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Microbio
    </Button>

    <h2 class="font-bold mb-4 flex items-center gap-2">
      Compétences Capgemini (Stage et Alternance)
    </h2>

    <Button
      href="../skills/java"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Java
    </Button>
    <Button
      href="../skills/api-rest"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Api Rest flask
    </Button>
    <Button
      href="../skills/com"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Communication
    </Button>
    <Button
      href="../skills/team"
      color="alternative"
      class="w-full justify-start no-underline"
    >
      Travail en équipe
    </Button>
  </div>
</div>
