<!-- src/components/Nav.svelte -->
<script>
    // Si tu souhaites ajouter des fonctionnalités comme une navigation active, tu peux ajouter des variables ici
</script>

<nav>
    <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        background-color: #1e90ff;
        padding: 1rem;
        color: white;
    }

    ul {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
