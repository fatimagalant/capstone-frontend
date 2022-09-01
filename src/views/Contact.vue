<template>
  <section id="contact">
    <NavBar />
    <form action="https://formspree.io/f/mvoygyag" method="POST">
      <label>
        Your name:
        <input type="text" name="name" placeholder="your name" />
      </label>
      <label>
        Your email:
        <input type="email" name="email" placeholder="your email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  min-height: 100vh;
  background-image: url("https://i.postimg.cc/pdgRsSBk/5586989.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>