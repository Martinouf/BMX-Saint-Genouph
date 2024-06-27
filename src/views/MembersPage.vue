<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Membres</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="member in members" :key="member.name" class="border p-4 rounded-lg flex flex-col items-center">
        <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mb-4" />
        <h2 class="text-lg font-bold">{{ member.name }}</h2>
        <p class="text-gray-600">{{ member.role }}</p>
        <p class="text-gray-600 text-sm text-center">{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MembersPage',
  data() {
    return {
      members: [
        {
          name: 'Marjorie Ludeau',
          role: 'Présidente',
          description: 'La Présidente, gestion générale du club',
          image: require('@/assets/marjorie.png')
        },
        {
          name: 'Laurent Sénécart',
          role: 'Vice-Président',
          description: 'Chargé des travaux sur la piste, des grandes organisations et sponsors',
          image: require('@/assets/laurent.png')
        },
        {
          name: 'Sandrine Coulot',
          role: 'Secrétaire',
          description: '',
          image: require('@/assets/sandrine.png')
        },
        {
          name: 'Marie-Laure David',
          role: 'Trésorière',
          description: '',
          image: require('@/assets/marie.png')
        },
        {
          name: 'Aurélien Chasles',
          role: 'Vice-Trésorier',
          description: '',
          image: require('@/assets/aurelien.png')
        },
        {
          name: 'Damien Bossé',
          role: 'Membre actif',
          description: '',
          image: require('@/assets/damien.png')
        },
        {
          name: 'Sandra Sénécart Delory',
          role: 'Membre actif',
          description: '',
          image: require('@/assets/sandra.png')
        },
        {
          name: 'Maël Dragomirovic',
          role: 'Entraîneur',
          description: '',
          image: require('@/assets/mael.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}

.border {
  border: 1px solid #ccc;
}
</style>
