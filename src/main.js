import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.component('Loading', Loading);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
