<template>
  <div class="ideas">
    <h2>Interesting ideas</h2>
    <ul>
      <li v-for="(idea, index) of ideas" :key="index">
        <a href="#" v-on:click.prevent="selectedIdea = index">{{ idea['.key'] }}</a>
      </li>
    </ul>
    <div id="selectedIdeaInfo" v-if="ideas[selectedIdea]">
      <h3>{{ ideas[selectedIdea]['.key'] }}</h3>
      <p>{{ ideas[selectedIdea].description }}</p>
      <img width="320px" alt="screenshot"
      v-if="ideas[selectedIdea].screenshot" :src="ideas[selectedIdea].screenshot">
    </div>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Ideas',
  data() {
    return {
      selectedIdea: 0,
      ideas: {},
    };
  },

  firebase: {
    ideas: {
      source: db.ref('ideas'),
      // Optional, allows you to handle any errors.
      // cancelCallback(err) {
      //   console.error(err);
      // },
    },
  },
};
</script>

<style scoped>
.ideas {
  padding: 8px;
  background-color: #d5d5d5;
  height: 95vh;
}
</style>
