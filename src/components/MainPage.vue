<template>
  <div class="main-page">
    <nav-bar></nav-bar>
    <home-page></home-page>
    <prototypes-page></prototypes-page>
    <ideas-page></ideas-page>
    <games-page></games-page>
    <contact-page></contact-page>
  </div>
</template>

<script>
import Vue from 'vue';
import VueFire from 'vuefire';
import NavBar from './NavBar';
import Home from './Home';
import Prototypes from './Prototypes';
import Ideas from './Ideas';
import Games from './Games';
import Contact from './Contact';

Vue.use(VueFire);

Vue.component('nav-bar', NavBar);
Vue.component('home-page', Home);
Vue.component('prototypes-page', Prototypes);
Vue.component('ideas-page', Ideas);
Vue.component('games-page', Games);
Vue.component('contact-page', Contact);

export default {
  name: 'MainPage',
};
</script>

<style scoped>
  .main-page {
    display: flex;
    flex-direction: column;
  }
</style>
