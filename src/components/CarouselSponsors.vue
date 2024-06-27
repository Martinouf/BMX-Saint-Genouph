<template>
    <div>
      <carousel :autoplay="true" :autoplayTimeout="5000" :loop="true" :navigationEnabled="true">
        <slide v-for="(slide, index) in slides" :key="index">
          <div class="relative flex justify-center items-center h-full">
            <img :src="slide.image" :alt="slide.title" class="w-full h-auto" />
            <div class="absolute bottom-0 bg-gray-900 bg-opacity-50 text-white p-4 w-full text-center">
              <h2 class="text-xl font-bold">{{ slide.title }}</h2>
              <p>{{ slide.description }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  
  export default {
    name: 'CarouselSponsors',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        slides: [
          {
            image: '/images/Saint-Genouph.png',
            title: 'Commune de Saint-Genouph',
            description: '',
          },
          {
            image: '/images/MotivSolutions.jpg',
            title: 'MotivSolutions',
            description: '',
          },
          {
            image: '/images/DRconstruction.jpg',
            title: 'DR Construction',
            description: '',
          },
          {
            image: '/images/FDservices.jpg',
            title: 'FD Services',
            description: '',
          },
          {
            image: '/images/AtelierDuBoucher.jpg',
            title: 'Atelier du Boucher',
            description: '',
          },
          {
            image: '/images/Credit-Mutuel.png',
            title: 'Crédit Mutuel',
            description: '',
          },
          {
            image: '/images/FrenchMUD.png',
            title: 'French MUD',
            description: '',
          },
          {
            image: '/images/Pepiniere.webp',
            title: 'Pépinière de l Entre-Deux Rives',
            description: '',
          },
          {
            image: '/images/Taxi.webp',
            title: 'Taxi Barthélémy',
            description: '',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel,
  .slide {
    height: 400px;
    position: relative;
  }
  
  .slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  .slide div {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    text-align: center;
  }
  </style>
  