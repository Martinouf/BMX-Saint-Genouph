<template>
    <div>
      <h1>Loading...</h1>
    </div>
  </template>
  
  <script>
  import { handleRedirectCallback } from '../auth';
  
  export default {
    async created() {
      await handleRedirectCallback();
      this.$router.replace('/');
    }
  };
  </script>
  