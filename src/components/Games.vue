<template>
  <div id="games">
    <h2>Finished games</h2>
    <div class="threeColGrid">
      <ul class="projectList">
        <li v-for="(game, index) of games" :key="index">
          <b v-if="selectedGame === index">{{ game['.key'] }}</b>
          <a v-if="selectedGame !== index" href="#"
          v-on:click.prevent="selectedGame = index">{{ game['.key'] }}</a>
        </li>
      </ul>
      <div class="center" v-if="games[selectedGame]">
        <h3>{{ games[selectedGame]['.key'] }}</h3>
        <p class="description">
          {{ games[selectedGame].description }}
        </p>
        <a v-if="games[selectedGame].play" :href="games[selectedGame].play">Play here</a>
        <a v-if="games[selectedGame].download"
        :href="games[selectedGame].download">Download here</a>
      </div>
      <div class="right" v-if="games[selectedGame]">
        <img alt="screenshot"
        v-if="games[selectedGame].screenshot" :src="games[selectedGame].screenshot">
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Games',
  data() {
    return {
      selectedGame: -1,
      games: {},
    };
  },

  firebase: {
    games: {
      source: db.ref('games'),
    },
  },
};
</script>

<style scoped>
#games {
  padding: 8px;
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>
