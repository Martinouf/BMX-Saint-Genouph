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
  name: 'CarouselPhotos',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          image: 'https://via.placeholder.com/800x400?text=Photo+1',
          title: 'Photo 1',
          description: 'Description de la photo 1',
        },
        {
          image: 'https://via.placeholder.com/800x400?text=Photo+2',
          title: 'Photo 2',
          description: 'Description de la photo 2',
        },
        {
          image: 'https://via.placeholder.com/800x400?text=Photo+3',
          title: 'Photo 3',
          description: 'Description de la photo 3',
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
