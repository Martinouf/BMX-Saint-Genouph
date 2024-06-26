import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { initAuth0, handleRedirectCallback } from './auth';

library.add(faFacebook, faTwitter, faInstagram, faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

let app;

const initApp = async () => {
  await initAuth0();

  if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
    await handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
};

initApp();
