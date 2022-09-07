<template>
  <footer id="footer" class="p-3">
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
        <h6 class="text-muted pb-3 pt-4">socials</h6>
        <a href="https://www.instagram.com" target="_blank"
          ><i class="fa-brands fa-instagram pb-3 pt-4"></i
        ></a>

        <a href="https://www.twitter.com" target="_blank"
          ><i class="fa-brands fa-twitter pb-3 pt-4"></i
        ></a>

        <a href="https://za.pinterest.com/"
          ><i class="fa-brands fa-pinterest-p pb-3 pt-4"></i
        ></a>
      </div>
      <div class="col-md-6">
       <p class="text-muted"> Copyright © 2022 All rights reserved. 
        </p> <p class="text-muted"> Developed By Fatima Galant / The
        Aromary. </p>
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
  background-color: #1a2226;
  color: white;
}
a {
  color: white;
  text-decoration-line: none !important;
}
a:hover {
  color: khaki;
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
i {
  font-size: large;
}
ul {
  font-size: small;
  list-style: none;
}
</style>