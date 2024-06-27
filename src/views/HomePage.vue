<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Bienvenue sur le site du club de BMX de Saint-Genouph</h1>
    <p>Découvrez nos activités et rejoignez-nous pour des aventures excitantes en BMX.</p>
    <p>Ci-dessous des photos et la liste de nos évènements.</p>
    <p>Vous trouverez aussi tout ce qu'il vous faut pour vous inscrire et rejoindre un club familiale.</p>
    <p>Venez donc nous découvrir !</p>

    <h2 class="text-xl font-bold mt-8 mb-4">Tarifs</h2>
    <a href="/tarification2023-2024.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre fiche de tarifications
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Règlement du club</h2>
    <a href="/Reglement-club.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder au règlement du club
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Demande de licence</h2>
    <a href="/Demande-de-licence.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre demande de licence
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Fiche d'inscription pilote</h2>
    <a href="/Fiche-inscription-pilote-mineur.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre fiche d'inscription
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Questionnaire santé FFC</h2>
    <a href="/Questionnaire-sante-FFC.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre questionnaire santé
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Autorisation Parentale FFC</h2>
    <a href="/Autorisation-Parentale-FFC.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre autorisation parentale FFC
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Autorisation Parentale</h2>
    <a href="/Autorisation-Parentale-BMX.pdf" target="_blank" class="text-blue-500 underline">
      Cliquez ici pour accéder à notre autorisation parentale
    </a>

    <h2 class="text-xl font-bold mt-8 mb-4">Photos</h2>
    <CarouselPhotos />
    
    <h2 class="text-xl font-bold mt-8 mb-4">Sponsors du club</h2>
    <CarouselSponsors />
  </div>
</template>

<script>
import CarouselPhotos from '../components/CarouselPhotos.vue';
import CarouselSponsors from '../components/CarouselSponsors.vue';

export default {
  name: 'HomePage',
  components: {
    CarouselPhotos,
    CarouselSponsors,
  },
};
</script>
