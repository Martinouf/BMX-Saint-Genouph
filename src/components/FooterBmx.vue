<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; Club BMX de Saint-Genouph</p>
        </div>
        <div class="mb-4 md:mb-0">
          <p>Adresse du Club : 7 rue des petits près, 37500, Saint-Genouph, France</p>
        </div>
        <div class="flex space-x-4">
          <a href="https://facebook.com/G2X" target="_blank" class="hover:text-blue-500">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a href="https://instagram.com/BMXG2X" target="_blank" class="hover:text-pink-500">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
        </div>
      </div>
      <div class="mt-4">
        <router-link to="/about" class="hover:underline">À propos</router-link> |
        <router-link to="/terms" class="hover:underline">Conditions d'utilisation</router-link>
      </div>
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
  text-align: center;
  padding: 20px 0;
  background: #2d3748;
}
</style>
