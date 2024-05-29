import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import VuePhotoPreview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';

Vue.config.productionTip = false;
Vue.use(VuePhotoPreview);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
