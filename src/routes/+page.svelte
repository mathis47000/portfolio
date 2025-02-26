<script>
    import { Alert } from "flowbite-svelte";
</script>

<div class="p-8">
    <Alert>
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
</div>
<main class="font-sans bg-white min-h-screen">
    <!-- En-tête -->
    <header class="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 class="text-3xl font-bold">Mon Portfolio</h1>
    </header>

    <!-- Accueil -->
    <section id="accueil" class="p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-800">Bienvenue !</h2>
        <p class="text-gray-600 mt-4">
            Je suis [Ton Nom], un développeur passionné par le web et le design.
        </p>
    </section>

    <!-- À propos -->
    <section id="a-propos" class="bg-gray-100 p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-800">À propos de moi</h2>
        <p class="text-gray-600 mt-4">
            J'ai [X ans] d'expérience en développement web. J'adore créer des
            sites élégants et performants.
        </p>
    </section>

    <!-- Contact -->
    <section id="contact" class="p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-800">Contactez-moi</h2>
        <p class="text-gray-600 mt-4">
            Vous pouvez me joindre via [ton email] ou sur mes réseaux sociaux.
        </p>
    </section>
</main>
