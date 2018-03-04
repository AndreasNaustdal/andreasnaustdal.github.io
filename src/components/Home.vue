<template>
  <div id="home">
    <h1>
      {{ home.welcomeText }}
    </h1>
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 3em;
  margin-left: 10%;
  margin-right: 30%;
  margin-bottom: 20%;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2em;
    margin-right: 5%;
  }
}
</style>
