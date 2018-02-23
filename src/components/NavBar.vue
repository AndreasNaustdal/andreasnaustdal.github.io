<template>
  <header class="navbar">
    <ul>
      <li>
        <a href="#home">HOME</a>
        <a href="#prototypes">PROTOTYPES</a>
        <a href="#ideas">IDEAS</a>
        <a href="#games">GAMES</a>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  background-color: #E2F0FF;
}

ul {
  list-style: none;
}

a {
  color: #56B0FF;
  font-size: 1.5em;
  text-decoration: none;
  margin-right: 2%;
}
</style>
