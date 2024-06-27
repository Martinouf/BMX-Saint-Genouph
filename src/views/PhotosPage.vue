<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Photos</h1>
    <div class="grid grid-cols-3 gap-4">
      <img v-for="(photo, index) in photos" :key="index" :src="photo" @click="openPreview(photo)" class="cursor-pointer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosPage',
  data() {
    return {
      photos: [
        // Ajoutez ici les URLs de vos photos
        '/images/IMG-20240605-WA0002.jpg',
        '/images/IMG-20240605-WA0003.jpg',
        '/images/IMG-20240605-WA0004.jpg',
      ],
    };
  },
  methods: {
    openPreview(photo) {
      this.$preview.open(photo);
    },
  },
};
</script>
