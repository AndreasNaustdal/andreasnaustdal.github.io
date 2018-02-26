<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
}

h1, h2 {
  margin-left: 5%;
}

h1 {
  font-size: 5em;
}
h2 {
  font-size: 3em;
  margin-top: 5%;
}

body {
  margin: 0;
}

html {
  height: 100%;
  background-color: #d5d5d5;
}
</style>
