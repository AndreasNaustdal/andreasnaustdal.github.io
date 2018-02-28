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
