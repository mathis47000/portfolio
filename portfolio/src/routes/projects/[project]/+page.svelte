<script context="module">
    // @ts-ignore
    export async function load({ params }) {
        return { props: { project: params.project } };
    }
</script>

<script>
    export let project;
</script>

<section>
    <h2>Projet : {project}</h2>
    <p><strong>Objectifs :</strong> Définition et contexte du projet.</p>
    <p><strong>Étapes :</strong> Détail des actions menées.</p>
    <p><strong>Acteurs :</strong> Collaboration avec d'autres.</p>
    <p><strong>Résultats :</strong> Impact du projet.</p>
</section>
