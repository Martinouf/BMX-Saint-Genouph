import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactPage from '../views/ContactPage.vue';
import MembersPage from '../views/MembersPage.vue';
import PhotosPage from '../views/PhotosPage.vue';
import EventsPage from '../views/EventsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/members',
    name: 'MembersPage',
    component: MembersPage,
  },
  {
    path: '/photos',
    name: 'PhotosPage',
    component: PhotosPage,
  },
  {
    path: '/events',
    name: 'EventsPage',
    component: EventsPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
