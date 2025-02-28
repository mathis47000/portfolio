<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
  <Nav />

  <main class="prose m-8 max-w-none pt-16 flex-1">
    <slot />
  </main>

  <Footer />
</div>
