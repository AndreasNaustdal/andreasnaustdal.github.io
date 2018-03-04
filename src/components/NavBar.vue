<template>
  <header class="navbar">
    <nav>
        <ul id="navLinksDesktop">
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <router-link to="/prototypes">PROTOTYPES</router-link>
          </li>
          <li>
            <router-link to="/ideas">IDEAS</router-link>
          </li>
          <li>
            <router-link to="/games">GAMES</router-link>
          </li>
          <li>
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
        <ul id="navLinksMobile">
          <li>
            <router-link to="/prototypes">PROTOTYPES</router-link>
          </li>
          <li>
            <router-link to="/ideas">IDEAS</router-link>
          </li>
          <li>
            <router-link to="/games">GAMES</router-link>
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
}
#navLinksDesktop {
  display: flex;
}
#navLinksDesktop li {
  margin-right: 80px;
}
#navLinksDesktop li:nth-of-type(5) {
  margin-left:auto;
}
#navLinksMobile {
  display: none;
  justify-content: space-around;
  padding-left: 0;
}
#navLinksMobile li {
  text-align: center;
}
a {
  @import url('https://fonts.googleapis.com/css?family=Raleway:500');
  font-family: 'Raleway', sans-serif;
  color: #393939;
  font-size: 1.5em;
  text-decoration: none;
}

@media (max-width: 600px) {
  #navLinksMobile {
    display: flex;
  }
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
