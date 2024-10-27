<script lang="ts">
	import "../app.css";
	import Footer from "../components/Footer..svelte";
	import Nav from "../components/Nav.svelte";
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />
