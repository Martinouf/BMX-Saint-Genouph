<template>
    <div class="admin">
      <h1>Admin Dashboard</h1>
      <button @click="logout">Logout</button>
  
      <!-- Gestion des photos -->
      <div>
        <h2>Manage Photos</h2>
        <form @submit.prevent="addPhoto">
          <input type="file" @change="onFileChange" />
          <button type="submit">Upload Photo</button>
        </form>
        <ul>
          <li v-for="photo in photos" :key="photo.id">
            <img :src="photo.url" alt="Photo" />
            <button @click="deletePhoto(photo.id)">Delete</button>
          </li>
        </ul>
      </div>
  
      <!-- Gestion des événements -->
      <div>
        <h2>Manage Events</h2>
        <form @submit.prevent="addEvent">
          <input v-model="newEvent.title" placeholder="Event Title" />
          <input v-model="newEvent.date" placeholder="Event Date" />
          <button type="submit">Add Event</button>
        </form>
        <ul>
          <li v-for="event in events" :key="event.id">
            <h3>{{ event.title }}</h3>
            <p>{{ event.date }}</p>
            <button @click="deleteEvent(event.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { logout, getToken } from '../auth';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        photos: [],
        newEvent: { title: '', date: '' },
        events: [],
        file: null
      };
    },
    methods: {
      logout,
      onFileChange(event) {
        this.file = event.target.files[0];
      },
      async addPhoto() {
        if (!this.file) return;
        const token = await getToken();
        const formData = new FormData();
        formData.append('file', this.file);
        const response = await axios.post('/api/photos', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        this.photos.push(response.data);
        this.file = null;
      },
      async deletePhoto(id) {
        const token = await getToken();
        await axios.delete(`/api/photos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.photos = this.photos.filter(photo => photo.id !== id);
      },
      async addEvent() {
        const token = await getToken();
        const response = await axios.post('/api/events', this.newEvent, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.events.push(response.data);
        this.newEvent = { title: '', date: '' };
      },
      async deleteEvent(id) {
        const token = await getToken();
        await axios.delete(`/api/events/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.events = this.events.filter(event => event.id !== id);
      }
    },
    async created() {
      const token = await getToken();
      const photosResponse = await axios.get('/api/photos', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.photos = photosResponse.data;
  
      const eventsResponse = await axios.get('/api/events', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.events = eventsResponse.data;
    }
  };
  </script>
  