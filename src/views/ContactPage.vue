<template>
  <div class="max-w-lg mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Contact</h1>
    <form @submit.prevent="submitForm">
      <label class="block mb-2">Nom:
        <input v-model="name" type="text" name="name" class="border p-2 w-full" />
      </label>
      <label class="block mb-2">Email:
        <input v-model="email" type="email" name="email" class="border p-2 w-full" />
      </label>
      <label class="block mb-2">Message:
        <textarea v-model="message" name="message" class="border p-2 w-full"></textarea>
      </label>
      <button type="submit" class="bg-blue-600 text-white p-2 mt-2">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
      });
      // Réinitialisation des champs
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
