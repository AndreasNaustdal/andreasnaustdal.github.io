<template>
  <div id="home">
    <h1>Projects and ideas</h1>
    <p>
      {{ home.welcomeText }}
    </p>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Home',
  data() {
    return {
      home: {},
    };
  },

  firebase: {
    home: {
      source: db.ref('home'),
      asObject: true,
    },
  },
};
</script>

<style scoped>
#home {
  padding: 8px;
  background-color: #d5d5d5;
  min-height: 100vh;
}

#home p {
  line-height: 2em;
  max-width: 600px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
