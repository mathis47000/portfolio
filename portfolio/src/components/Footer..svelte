<!-- src/components/Footer.svelte -->
<script>
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <p>&copy; {currentYear} Mon Portfolio. Tous droits réservés.</p>
</footer>

<style>
    footer {
        background-color: #1e90ff;
        padding: 1rem;
        color: white;
        text-align: center;
    }
</style>
