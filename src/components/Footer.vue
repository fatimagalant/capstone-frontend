<template>
  <footer id="footer" class="bg-dark text-light p-3">
    <!-- <div class="row">
      <div class="col-md-6">
        <h6 class="text-muted">Quick Links</h6>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/sales">Sales</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>
      <div class="col-md-6">
        <h6 class="text-muted">Contact</h6>
        <ul>
          <li>Location</li>
          <li>Call</li>
          <li>Email</li>
        </ul>
      </div>
    </div> -->
    <!-- <hr /> -->
    <div class="row">
      <div id="socials" class="col-md-6">
        <h6 class="text-muted">socials</h6>
        <a href="https://www.instagram.com" target="_blank"
          ><i class="fa-brands fa-instagram"></i
        ></a>

        <a href="https://www.twitter.com" target="_blank"
          ><i class="fa-brands fa-twitter"></i
        ></a>

        <a href="https://za.pinterest.com/"
          ><i class="fa-brands fa-pinterest-p"></i
        ></a>
      </div>
      <div class="col-md-6">
        Copyright © All rights reserved.  Developed By Fatima Galant / The Aromary.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
#footer {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
}
a {
  color: white;
  text-decoration-line: none !important;
}
a:hover {
  color: #b5a5a5;
  text-decoration-line: none !important;
}
a:active {
  color: rosybrown;
}
#socials {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
i{
  font-size: large;
}
ul {
  font-size: small;
  list-style: none;
}
</style>