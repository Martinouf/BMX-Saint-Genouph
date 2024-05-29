<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Membres</h1>
    <ul>
      <li v-for="(member, index) in members" :key="index" class="mb-2">
        <div class="border p-2 rounded">
          <h2 class="text-lg font-semibold">{{ member.name }}</h2>
          <p>{{ member.role }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MembersPage',
  data() {
    return {
      members: [
        { name: 'John Doe', role: 'Président' },
        { name: 'Jane Doe', role: 'Trésorier' },
        // Ajoutez d'autres membres ici
      ],
    };
  },
};
</script>
