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
    name: 'CarouselEvents',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        slides: [
          {
            image: 'https://via.placeholder.com/800x400?text=Évènement+1',
            title: 'Évènement 1',
            description: 'Description de l\'évènement 1',
          },
          {
            image: 'https://via.placeholder.com/800x400?text=Évènement+2',
            title: 'Évènement 2',
            description: 'Description de l\'évènement 2',
          },
          {
            image: 'https://via.placeholder.com/800x400?text=Évènement+3',
            title: 'Évènement 3',
            description: 'Description de l\'évènement 3',
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
  