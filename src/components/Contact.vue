<template>
  <footer id="contact">
    <h2>Contact me</h2>
    <ul id="contactLinks">
      <li v-for="(link, index) of links" :key="index">
        <a :href="link.address">{{ link.text }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Contact',
  data() {
    return {
      links: {},
    };
  },

  firebase: {
    links: {
      source: db.ref('links'),
    },
  },
};
</script>

<style scoped>
#contact {
  padding: 8px;
  background-color: inherit;
  height: 95vh;
}
</style>
