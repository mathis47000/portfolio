<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<div
  class="flex flex-col min-h-screen bg-[url('bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed"
>
  <Nav />

  <main
    class="prose m-8 mx-auto px-6 pt-16 flex-1 w-full max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg pb-4"
  >
    <slot />
  </main>

  <Footer />
</div>
