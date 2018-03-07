import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Prototypes from '@/components/Prototypes';
import Games from '@/components/Games';
import Music from '@/components/Music';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/prototypes',
      name: 'Prototypes',
      component: Prototypes,
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
    },
  ],
});
