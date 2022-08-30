<template>
  <section id="contact bg-light text-dark">
    <NavBar />
    <form action="https://formspree.io/f/mvoygyag" method="POST">
      <label>
        Your name:
        <input type="text" name="name" placeholder="your name"/>
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
    <Footer />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  min-height: 100vh;
}
::-webkit-scrollbar {
  display: none;
}
</style>