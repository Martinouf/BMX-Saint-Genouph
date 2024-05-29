<template>
  <div id="app">
    <HeaderBmx />
    <main>
      <router-view />
    </main>
    <FooterBmx />
  </div>
</template>

<script>
import HeaderBmx from './components/HeaderBmx.vue';
import FooterBmx from './components/FooterBmx.vue';

export default {
  name: 'App',
  components: {
    HeaderBmx,
    FooterBmx,
  },
};
</script>

<style>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>
