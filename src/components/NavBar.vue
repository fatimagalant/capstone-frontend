<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <nav class="nav-links">
          <router-link to="/">Home </router-link>
          <router-link to="/about">About </router-link>
          <router-link to="/products">Products </router-link>
          <router-link to="/contact">Contact </router-link>
          <router-link to="/login">Login </router-link>
          <router-link to="/register">Register </router-link>
          <router-link to="/admin">Admin </router-link>
          <router-link to="/cart"
            ><i class="fa-solid fa-cart-shopping"></i>
          </router-link>
          <router-link to="/account"
            ><i class="fa-regular fa-user"></i>
          </router-link>
          <button @click="logout()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </nav>
      </ul>
      <h1 class="logo">
        <a href="/"><i class="fa-solid fa-candle-holder"></i></a>
      </h1>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #1a2226;
  color: rgb(255, 255, 255);
  /* opacity: 0.85; */
  z-index: 100;
  font-family: "Aboreto", cursive;
  word-spacing: 10px;
}
@media screen and (max-width: 700px) {
  .navbar {
    position: fixed;
    width: 100%;
    background: #000000;
    color: rgb(255, 255, 255);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 767px) {
  .nav-links {
    font-size: x-large;
  }
}

.navbar a.router-link-active {
  color: khaki;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}
.menu-items {
  order: 2;
  display: flex;
}
.logo {
  order: 1;
  font-size: 2.3rem;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
}

.navbar a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}
.navbar a:active {
  color: brown;
}
.navbar a:hover {
  color: #b5a5a5;
}
.nav-links {
  padding-right: 295px;
}
i{
  margin-right: 15px;
}
@media (max-width: 768px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    @media screen and (max-width: 762px) {
      nav.nav-links[data-v-4295d220] {
        display: flex;
        flex-direction: column;
        letter-spacing: 4px;
        gap: 50px;
      }
    }
  }
  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #000000;
    height: 100vh;
    width: 600px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    /* box-shadow: 5px 0px 10px 0px #aaa; */
    overflow: scroll;
  }
  @media screen and (max-width: 682px) {
    .navbar .menu-items {
      padding-top: 100px;
      background: #000000;
      height: 100vh;
      width: 600px;
      transform: translate(-150%);
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      padding-left: 40px;
      transition: transform 0.5s ease-in-out;
      /* box-shadow: 5px 0px 10px 0px #aaa; */
      overflow: scroll;
    }
    .nav {
      display: contents;
    }
  }
  @media screen and (max-width: 762px) {
    nav.nav-links {
      display: flex;
      flex-direction: column;
    }
  }
  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
    color: white;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}
</style>