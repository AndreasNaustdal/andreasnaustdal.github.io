<template>
  <div id="music">
    <h2>Music</h2>
    <h3>{{ music.welcomeText }}</h3>
    <ul>
      <li v-for="album of music.albums" :key="album.year">
        <iframe :src="album.src" width="300" height="380"
        frameborder="0" allowtransparency="true"></iframe>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Music',
  data() {
    return {
      music: {},
    };
  },

  firebase: {
    music: {
      source: db.ref('music'),
      asObject: true,
    },
  },
};
</script>

<style scoped>
#music {
  min-height: 100vh;
}
ul {
  display: flex;
}
li {
  margin: 16px;
}
h3 {
  margin-left: 5%;
}
</style>
