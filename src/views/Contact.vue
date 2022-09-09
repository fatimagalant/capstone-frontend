<template>
  <section id="contact">
    <i
      id="back-btn"
      onclick="history.back()"
      class="fa-solid fa-arrow-left-long"
    ></i>
    <div class="container p-5">
      <div class="form-container">
        <div class="left-container">
          <div class="left-inner-container">
            <h2>Let's Chat</h2>
            <p>
              Whether you have a question, want to start a project or simply
              want to connect.
            </p>
            <br />
            <p>Feel free to send me a message in the contact form</p>
            <div class="contact">
              <p class="text-muted">
                <i class="fa-solid fa-globe"></i> : Cape Town, South Africa
              </p>
              <p class="text-muted">
                <i class="fa-solid fa-at"></i>:
                <a href="mailto:thearomarry@gmail.com">thearomarry@gmail.com</a>
              </p>
              <p class="text-muted">
                <i class="fa-solid fa-phone"></i> :
                <a href="tel:+27-66-1181">(+27) 66 209 1181</a>
              </p>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-inner-container">
            <form action="https://formspree.io/f/mvoygyag" method="POST">
              <h2 class="lg-view">Contact</h2>
              <h2 class="sm-view">Let's Chat</h2>
              <p>* Required</p>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"
                  ><i class="fab fa-google-plus-g"></i
                ></a>
                <a href="#" class="social"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
              <input type="text" name="name" placeholder="Name *" />
              <input type="email" name="email" placeholder="Email *" />
              <input type="phone" name="phone number" placeholder="Phone" />
              <textarea
                rows="4"
                name="message"
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
#contact {
  background-image: url("https://i.postimg.cc/ZYMJT2bg/pawel-czerwinski-Wpi-JTik1m-KU-unsplash.jpg");
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

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: linear-gradient(90deg, #be8cef 0%, rgba(61, 46, 232, 0.83) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  height: 100vh;
  margin: -20px 0 50px;
}
.text-muted {
  padding: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
a {
  color: black;
  text-decoration-line: none;
}
a:hover {
  color: white;
}
.contact {
  padding-top: 20px;
}
.container {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 580px;
  min-width: 370px;
  margin-top: 200px;
  margin-left: 540px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.form-container {
  display: flex;
}

.left-container {
  flex: 1;
  height: 480px;
  background-color: khaki;
}
.right-container {
  display: flex;
  flex: 1;
  height: 460px;
  background-color: white;
  justify-content: center;
  align-items: center;
}

.left-container {
  display: flex;
  flex: 1;
  height: 480px;
  justify-content: center;
  align-items: center;
  color: white;
}

.left-container p {
  font-size: 0.9rem;
}

.right-inner-container {
  width: 70%;
  height: 80%;
  text-align: center;
}

.left-inner-container {
  height: 50%;
  width: 80%;
  text-align: center;
  line-height: 22px;
}

input,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
}

input:focus,
textarea:focus {
  outline: 1px solid khaki;
  font-family: "Poppins", sans-serif;
}

button {
  border-radius: 20px;
  border: 1px solid khaki;
  background-color: khaki;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 600px) {
  .left-container {
    display: none;
  }
  .lg-view {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  .sm-view {
    display: none;
  }
}

form p {
  text-align: left;
}

@media screen and (max-width: 600px) {
  .container[data-v-df212a54] {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    position: relative;
    overflow: hidden;
    width: 768px;
    /* max-width: 100%;
    min-height: 580px;
    min-width: 370px;
    margin-top: 100px; */
  }
}
</style>