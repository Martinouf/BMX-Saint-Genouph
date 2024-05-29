<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Bienvenue sur le site du club de BMX de Saint-Genouph</h1>
    <p>Découvrez nos activités et rejoignez-nous pour des aventures excitantes en BMX.</p>
    <p>Ci-dessous des photos et la liste de nos évènements.</p>
    <p>Venez donc nous découvrir !</p>
    
    <h2 class="text-xl font-bold mt-8 mb-4">Photos</h2>
    <CarouselPhotos />
    
    <h2 class="text-xl font-bold mt-8 mb-4">Évènements</h2>
    <CarouselEvents />
  </div>
</template>

<script>
import CarouselPhotos from '../components/CarouselPhotos.vue';
import CarouselEvents from '../components/CarouselEvents.vue';

export default {
  name: 'HomePage',
  components: {
    CarouselPhotos,
    CarouselEvents,
  },
};
</script>
