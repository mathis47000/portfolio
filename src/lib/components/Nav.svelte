<script lang="ts">
  import { BarsOutline, CloseCircleOutline } from "flowbite-svelte-icons";

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Réalisations", href: "/projects" },
    { name: "Compétences", href: "/skills" },
    { name: "Expérience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  let isMenuOpen = false;
  let menuRef;
</script>

<nav class="bg-blue-600 shadow-md fixed top-0 left-0 w-full z-40">
  <div class="px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0 text-white font-bold text-xl">
        <a href="/">Mathis Bescond</a>
      </div>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex items-center space-x-6">
        {#each links as link}
          <a
            href={link.href}
            class="text-white hover:underline transition duration-200"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <!-- Burger Menu Button -->
      <button
        class="md:hidden text-white hover:text-gray-200 focus:outline-none transition"
        aria-label="Open Menu"
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        <BarsOutline class="w-8 h-8" />
      </button>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  {#if isMenuOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
    ></div>

    <!-- Mobile Menu Drawer -->
    <div
      class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50"
      bind:this={menuRef}
      class:translate-x-0={isMenuOpen}
      class:translate-x-full={!isMenuOpen}
    >
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none transition"
        aria-label="Close Menu"
        on:click={() => (isMenuOpen = false)}
      >
        <CloseCircleOutline class="w-8 h-8" />
      </button>

      <!-- Mobile Navigation -->
      <div class="flex flex-col items-center space-y-6 mt-16">
        {#each links as link}
          <a
            href={link.href}
            class="text-gray-700 hover:text-blue-600 transition text-lg"
            on:click={() => (isMenuOpen = false)}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
