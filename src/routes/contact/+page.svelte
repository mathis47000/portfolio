<script>
  import {
    GithubSolid,
    InstagramSolid,
    LinkedinSolid,
  } from "flowbite-svelte-icons";
</script>

<div
  class="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center"
>
  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
    Me Contacter
  </h2>

  <p class="text-gray-600 dark:text-gray-300">
    N'hésitez pas à me contacter via :
  </p>

  <div class="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
    <p>📍 <span class="font-medium">Blagnac, France</span></p>
    <p>
      <a href="mailto:contact@monsite.com" class="text-blue-500 hover:underline"
        >contact@monsite.com</a
      >
    </p>
    <p>
      <a href="tel:+33612345678" class="text-blue-500 hover:underline"
        >+33 6 12 34 56 78</a
      >
    </p>
  </div>

  <!-- Icônes sociales -->
  <div class="flex mt-6 space-x-6 justify-center">
    <a
      href="https://github.com/mathis47000"
      target="_blank"
      class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
    >
      <GithubSolid class="w-6 h-6" />
    </a>
    <a
      href="https://linkedin.com/in/mathisbescond"
      target="_blank"
      class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
    >
      <LinkedinSolid class="w-6 h-6" />
    </a>
    <a
      href="https://instagram.com/mathisbescond"
      target="_blank"
      class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
    >
      <InstagramSolid class="w-6 h-6" />
    </a>
  </div>
</div>
