<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Évènements</h1>
    <ul>
      <li v-for="(event, index) in events" :key="index" class="mb-2">
        <div class="border p-2 rounded">
          <h2 class="text-lg font-semibold">{{ event.name }}</h2>
          <p>{{ event.date }}</p>
          <p>{{ event.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventsPage',
  data() {
    return {
      events: [
        { name: 'Compétition Régionale', date: '2024-06-15', description: 'Une compétition régionale de BMX.' },
        { name: 'Entraînement Mensuel', date: '2024-07-10', description: 'Session d\'entraînement mensuelle.' },
        // Ajoutez d'autres événements ici
      ],
    };
  },
};
</script>
