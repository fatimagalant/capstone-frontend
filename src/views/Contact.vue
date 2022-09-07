<template>
  <section id="contact">
    <h3 class="header mt-5">Contact Us</h3>
    <div class="container">
      <div class="wrapper">
        <!-- COMPANY INFORMATION -->
        <div class="company-info">
          <h3>The Aromary</h3>

          <ul>
            <li>
              <i class="fa-solid fa-location-arrow"></i> Cape Town, South Africa
            </li>
            <li><i class="fa fa-phone"></i> (+27) 66-209-1181</li>
            <li><i class="fa fa-envelope"></i> thearomary@gmail.com</li>
          </ul>
          <img
            id="img-contact"
            class="pt-5"
            src="https://i.postimg.cc/hvy6VRQX/mathilde-langevin-ilsi-Tpd-YTxw-unsplash-2.jpg"
            alt="Logo"
            style="width: 300px; height: 300px"
          />
        </div>
        <!-- End .company-info -->

        <!-- CONTACT FORM -->
        <div class="contact">
          <form action="https://formspree.io/f/mvoygyag" method="POST">
            <p>
              <label>First Name</label>
              <input
                type="text"
                name="first name"
                id="fname"
                placeholder="First Name"
                required
              />
            </p>

            <p>
              <label>Last Name</label>
              <input
                type="text"
                name="Last name"
                id="lname"
                placeholder="Last Name"
              />
            </p>

            <p>
              <label>E-mail Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </p>

            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone" placeholder="Phone" />
            </p>

            <p class="full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                id="message"
                placeholder="Message"
              ></textarea>
            </p>

            <p class="full">
              <button type="submit">Submit</button>
            </p>
          </form>
          <!-- End #contact-form -->
        </div>
        <!-- End .contact -->
      </div>
      <!-- End .wrapper -->
    </div>
    <!-- End .container -->
  </section>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,300&family=Poppins:wght@300&family=Prata&family=Raleway:wght@300&family=Work+Sans:wght@300&display=swap");
#contact {
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  font-family: "Aboreto", cursive;
  font-weight: 500;
  background-attachment: fixed;
  color: rgb(0, 0, 0);
  margin-top: 50px;
}

@media screen and (max-width: 500px) {
  #contact {
    margin-top: 5px;
  }
}
.header {
  font-size: 5rem;
  padding-top: 4rem;
  font-weight: 700;
}
.container[data-v-df212a54] {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  padding-top: 2rem;
}
#img-contact {
  object-fit: contain;
  aspect-ratio: 1;
}
#contact-img {
  width: 600px;
  object-fit: contain;
  aspect-ratio: 1;
}
@import url("https://fonts.googleapis.com/css?family=Yantramanav:100,300");
/* ------------- */
/* GLOBAL STYLES */
/* ------------- */
* {
  box-sizing: border-box;
}
body {
  background: #ffffff;
  color: #000000;
  line-height: 1.6;
  font-family: "Aboreto", cursive;
  padding: 1em;
}
.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}
ul {
  list-style: none;
  padding: 0;
}
.wrapper {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.7);
}
.wrapper > * {
  padding: 1em;
}
/* ------------------- */
/* COMPANY INFORMATION */
/* ------------------- */
.company-info {
  /* background-image: linear-gradient(to right, grey, rgb(255, 255, 255)); */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "Poppins", sans-serif;
}
.company-info h3,
.company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}
/* ------- */
/* CONTACT */
/* ------- */
.contact {
  background: #ffffff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
/* ---- */
/* FORM */
/* ---- */
.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.contact form label {
  display: block;
}
.contact form p {
  margin: 0;
}
.contact form .full {
  grid-column: 1 / 3;
}
.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 1em;
  background-color: #1a2226;
  color: rgb(255, 255, 255);
  border: solid 1px #ffffff;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
}
.contact form textarea {
  resize: none;
}
.contact form button {
  background: khaki;
  border: 0;
  color: #000000;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
.contact form button:hover,
.contact form button:focus {
  background: khaki;
  color: #000000;
  outline: 0;
  transition: background-color 2s ease-out;
}
/* ------------- */
/* MEDIA QUERIES */
/* ------------- */
@media only screen and (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .wrapper > * {
    padding: 2em;
  }
  .company-info {
    border-radius: 4px 0 0 4px;
  }
  .contact {
    border-radius: 0 4px 4px 0;
  }
  .company-info h3,
  .company-info ul,
  .brand {
    text-align: left;
  }
}
@media screen and (max-width: 1254px) {
  #contact-img {
    width: 400px;
  }
}
@media screen and (max-width: 1352px) {
  iframe {
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 476px) {
  iframe {
    width: 300px;
    height: 300px;
  }
}
</style>