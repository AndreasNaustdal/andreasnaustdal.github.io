<template>
  <div id="prototypes">
    <h2>Unfinished prototypes</h2>
    <div class="threeColGrid">
      <ul class="projectList">
        <li v-for="(prototype, index) of prototypes" :key="index">
          <b v-if="selectedPrototype === index">{{ prototype['.key'] }}</b>
          <a v-if="selectedPrototype !== index" href="#"
          v-on:click.prevent="selectedPrototype = index">{{ prototype['.key'] }}</a>
        </li>
      </ul>
      <div class="center" v-if="prototypes[selectedPrototype]">
        <h3>{{ prototypes[selectedPrototype]['.key'] }}</h3>
        <p class="description">
          {{ prototypes[selectedPrototype].description }}
        </p>
        <a v-if="prototypes[selectedPrototype].play"
        :href="prototypes[selectedPrototype].play">Play here</a>
        <a v-if="prototypes[selectedPrototype].download"
        :href="prototypes[selectedPrototype].download">Download here</a>
      </div>
      <div class="right" v-if="prototypes[selectedPrototype]">
        <img alt="screenshot"
        v-if="prototypes[selectedPrototype].screenshot"
        :src="prototypes[selectedPrototype].screenshot">
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'Prototypes',
  data() {
    return {
      selectedPrototype: -1,
      prototypes: {},
    };
  },

  firebase: {
    prototypes: {
      source: db.ref('prototypes'),
    },
  },
};
</script>

<style scoped>
#prototypes {
  min-height: 100vh;
}
</style>
