<template>
  <div id="ideas">
    <h2>Ideas</h2>
    <div class="threeColGrid">
      <ul class="projectList">
        <li v-for="(idea, index) of ideas" :key="index">
          <b v-if="selectedIdea === index">{{ idea['.key'] }}</b>
          <a v-if="selectedIdea !== index" href="#"
          v-on:click.prevent="selectedIdea = index">{{ idea['.key'] }}</a>
        </li>
      </ul>
      <div class="center" v-if="ideas[selectedIdea]">
        <h3>{{ ideas[selectedIdea]['.key'] }}</h3>
        <p class="description">
          {{ ideas[selectedIdea].description }}
        </p>
        <a v-if="ideas[selectedIdea].play" :href="ideas[selectedIdea].play">Play here</a>
        <a v-if="ideas[selectedIdea].download"
        :href="ideas[selectedIdea].download">Download here</a>
      </div>
      <div class="right" v-if="ideas[selectedIdea]">
        <img alt="screenshot"
        v-if="ideas[selectedIdea].screenshot" :src="ideas[selectedIdea].screenshot">
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Ideas',
  data() {
    return {
      selectedIdea: -1,
      ideas: {},
    };
  },

  firebase: {
    ideas: {
      source: db.ref('ideas'),
    },
  },
};
</script>

<style scoped>
#ideas {
  min-height: 100vh;
}
</style>
