<template>
  <header class="navbar">
    <nav>
        <ul id="navLinksDesktop">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#prototypes">PROTOTYPES</a>
          </li>
          <li>
            <a href="#ideas">IDEAS</a>
          </li>
          <li>
            <a href="#games">GAMES</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <ul id="navLinksMobile">
          <li>
            <a href="#prototypes">PROTOTYPES</a>
          </li>
          <li>
            <a href="#ideas">IDEAS</a>
          </li>
          <li>
            <a href="#games">GAMES</a>
          </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  background-color: white;
}

ul {
  list-style: none;
  display:flex;
}
ul#navLinksMobile {
  justify-content: space-around;
}

li {
  margin-right: 80px;
}
li:nth-of-type(5) {
  margin-left:auto;
}

a {
  color: #393939;
  font-size: 1.5em;
  text-decoration: none;
}

@media (min-width: 600px) {
  #navLinksMobile {
    display: none;
  }
}

@media (max-width: 600px) {
  #navLinksDesktop {
    display: none;
  }
  .navbar {
    position: fixed;
    bottom:0;
    left:0;
    right:0;
  }
  a {
    font-size: 1em;
  }
}
</style>
