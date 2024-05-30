<template>
  <header class="bg-gradient p-4 text-white">
    <nav class="container mx-auto flex justify-between items-center px-2">
      <!-- Logo et texte G2X à gauche -->
      <div class="flex items-center space-x-2">
        <router-link to="/" class="flex items-center space-x-2">
          <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8" />
          <span class="font-bold">G2X</span>
        </router-link>
      </div>
      <!-- Menu déroulant à droite -->
      <div class="relative">
        <button @click="toggleDropdown" class="hover:underline">Menu</button>
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <ul>
            <li><router-link to="/" class="block px-4 py-2 hover:bg-gray-200">Accueil</router-link></li>
            <li><router-link to="/members" class="block px-4 py-2 hover:bg-gray-200">Membres</router-link></li>
            <li><router-link to="/photos" class="block px-4 py-2 hover:bg-gray-200">Photos</router-link></li>
            <li><router-link to="/events" class="block px-4 py-2 hover:bg-gray-200">Évènements</router-link></li>
            <li><router-link to="/contact" class="block px-4 py-2 hover:bg-gray-200">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'ClubHeader',
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(to bottom right, #800080, #FF69B4);
  padding: 20px 0;
}
nav {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
