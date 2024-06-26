<template>
    <div class="login">
      <h1>Login</h1>
      <button @click="login">Login with Auth0</button>
    </div>
  </template>
  
  <script>
  import { login } from '../auth';
  
  export default {
    methods: {
      login
    }
  };
  </script>
  