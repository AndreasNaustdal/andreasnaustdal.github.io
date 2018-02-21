<template>
  <div class="test">
    <nav-bar></nav-bar>
    <introduction-page></introduction-page>
    <prototypes-page></prototypes-page>
    <ideas-page></ideas-page>
    <games-page></games-page>
    <contact-page></contact-page>
  </div>
</template>

<script>
import NavBar from './NavBar';
import Introduction from './Introduction';
import Prototypes from './Prototypes';
import Ideas from './Ideas';
import Games from './Games';
import Contact from './Contact';

export default {
  name: 'MainPage',
  components: {
    'nav-bar': NavBar,
    'introduction-page': Introduction,
    'prototypes-page': Prototypes,
    'ideas-page': Ideas,
    'games-page': Games,
    'contact-page': Contact,
  },
};
</script>

<style scoped>
</style>
