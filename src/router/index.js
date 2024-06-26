import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactPage from '../views/ContactPage.vue';
import MembersPage from '../views/MembersPage.vue';
import PhotosPage from '../views/PhotosPage.vue';
import EventsPage from '../views/EventsPage.vue';
import AboutPage from '../views/AboutPage.vue';
import TermsPage from '../views/TermsPage.vue';
import AdminPage from '../views/AdminPage.vue';
import LoginPage from '../views/LoginPage.vue';
import CallbackPage from '../views/CallbackPage.vue';
import { isAuthenticated, login } from '../auth';

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
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/terms',
    name: 'TermsPage',
    component: TermsPage,
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/callback',
    name: 'CallbackPage',
    component: CallbackPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuth = await isAuthenticated();

  if (requiresAuth && !isAuth) {
    return login();
  }

  next();
});

export default router;
