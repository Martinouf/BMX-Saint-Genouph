<template>
  <header class="bg-blue-600 p-4 text-white">
    <nav>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
        <li><router-link to="/members" class="hover:underline">Membres</router-link></li>
        <li><router-link to="/photos" class="hover:underline">Photos</router-link></li>
        <li><router-link to="/events" class="hover:underline">Évènements</router-link></li>
        <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'ClubHeader',
};
</script>
