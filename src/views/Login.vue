<template>
  <section id="login">
    <NavBar />
    <h1>Hi :)</h1>
  </section>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
#login {
  font-family: "Aboreto", cursive;
}
</style>
