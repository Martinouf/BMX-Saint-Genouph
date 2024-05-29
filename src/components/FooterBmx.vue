<template>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
      <!-- Réseaux sociaux à gauche -->
      <div class="flex space-x-4 md:order-1 mb-4 md:mb-0">
        <a href="https://facebook.com" target="_blank" class="hover:text-blue-500">
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        </a>
        <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </a>
      </div>
      <!-- Adresse du club au milieu -->
      <div class="mb-4 md:mb-0 md:order-2 text-center">
        <p>Adresse du Club : 7 rue des petits près, 37500, Saint-Genouph, France</p>
      </div>
      <!-- Nom du club à droite -->
      <div class="md:order-3 mb-4 md:mb-0 text-right">
        <p>&copy; Club BMX de Saint-Genouph</p>
      </div>
    </div>
    <div class="mt-4 text-center">
      <router-link to="/about" class="hover:underline">À propos</router-link> |
      <router-link to="/terms" class="hover:underline">Conditions d'utilisation</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ClubFooter',
};
</script>

<style scoped>
footer {
  background: #2d3748;
  padding: 10px 0;
}
</style>
