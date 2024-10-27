<!-- in ts get skill id and getData from utils -->
<script context="module">
    // @ts-ignore
    export async function load({ params }) {
        return { props: { skill: params.skill } };
    }
</script>

<script>
    export let skill;
</script>

<section>
    <h2>Compétence : {skill}</h2>
    <p><strong>Définition :</strong> Explication de la compétence.</p>
    <p><strong>Éléments de preuve :</strong> Anecdotes et exemples.</p>
    <p><strong>Autocritique :</strong> Réflexion sur mon niveau actuel.</p>
    <p><strong>Évolution :</strong> Objectifs futurs pour cette compétence.</p>
</section>
