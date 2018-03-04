import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Prototypes from '@/components/Prototypes';
import Ideas from '@/components/Ideas';
import Games from '@/components/Games';
import Contact from '@/components/Contact';

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
      path: '/ideas',
      name: 'Ideas',
      component: Ideas,
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
