import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Collection from './components/Collection.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Intro',
          component: Intro
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/collection',
          name: 'Collection',
          component: Collection
        }
      ]
    }
  ]
});
