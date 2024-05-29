<template>
  <div id="app">
    <HeaderBmx />
    <router-view />
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
/* Ajoutez ici vos styles globaux */
</style>
