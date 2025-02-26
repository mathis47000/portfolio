<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<Nav />

<main class="prose m-8 max-w-none">
  <slot />
</main>

<Footer />
