<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <contact-page></contact-page>
  </div>
</template>

<script>
import Vue from 'vue';
import VueFire from 'vuefire';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

Vue.use(VueFire);

Vue.component('nav-bar', NavBar);
Vue.component('contact-page', Contact);

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* margin-top: 60px; */
  color: #393939;
  display: flex;
  flex-direction: column;
}

#home, #prototypes, #ideas, #games {
  background-color: #f2f2f2;
}

h2 {
  font-size: 3em;
  margin-top: 5%;
  margin-left: 5%;
}

body {
  margin: 0;
}

html {
  height: 100%;
  background-color: #d5d5d5;
}

.threeColGrid {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-auto-rows: minmax(320px, auto);
  grid-gap: 1em;
}
.right {
  text-align: center;
}
.right img {
  max-width: 100%;
  max-height: 100%;
}

.projectList {
  list-style: none;
  background-color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 0;
}
.projectList li {
  margin-bottom: 8px;
}

@media (max-width: 600px) {

  .threeColGrid {
    display: block;
  }
  .projectList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  .projectList p {
    margin: 0;
  }

  .center {
    margin-bottom: 1em;
  }
}
</style>
