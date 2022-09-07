<template>
  <section id="Login">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
            <i class="fa-solid fa-user-large"></i>
          </div>
          <h1 v-if="user" id="login-header">Welcome</h1>
          <h1 v-else id="login-header">Login</h1>
          <div class="card">
            <img
              class="img-fluid"
              src="https://i.postimg.cc/m2q63Nh5/user.png"
              alt="user-icon"
            />
          </div>
          <div id="login-margin">
            <p id="login-subheader" class="py-2" v-if="user">
              Welcome {{ user.full_name }} .
            </p>
            <p id="login-subheader" class="py-2" v-else>
              our vast collection awaits...
            </p>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form @submit.prevent="login" id="form-container">
                  <div class="form-group">
                    <label for="emailField" class="form-control-label" required
                      >EMAIL</label
                    >
                    <input
                      v-model="email"
                      type="email"
                      name="emailField"
                      class="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      for="passwordField"
                      class="form-control-label"
                      required
                      >PASSWORD</label
                    >
                    <input
                      v-model="password"
                      type="password"
                      placeholder="password"
                      name="passwordField"
                      class="form-control"
                      i
                    />
                  </div>

                  <div class="col-lg-12 loginbtn">
                    <div class="col-lg-6 login-btm login-text">
                      <!-- Error Message -->
                    </div>
                    <div class="col-lg-6 login-btm login-button">
                      <button
                        type="submit"
                        id="btn-login"
                        class="btn btn-outline-primary"
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
                <div class="register">
                  <p class="text-align-center register-here">
                    Don't have an account ? Register
                    <a href="/register">here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      // this.$router.push("/");
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
#Login {
  /* background-color: rgb(255, 255, 255); */
  background-image: url("https://i.postimg.cc/mggdRPd5/visax-2nn-P3aoes-Y-unsplash.jpg");
  min-height: 100vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  overflow-x: hidden;
  font-family: "Aboreto", cursive;
}
.login-box {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  display: flex;
  margin-top: 14rem;
  height: auto;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.card {
  width: 100px;
  height: 100px;
  border: none !important;
}
img {
  opacity: 0.4;
}
#login-header {
  font-family: "Aboreto", cursive;
}
a {
  font-family: "Aboreto", cursive;
}
p {
  font-family: "Poppins", sans-serif;
}
.container {
  margin-bottom: 80px;
}
.login-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.login-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #000000;
  font-family: "Aboreto", cursive;
}
.login-form {
  margin-top: 25px;
  text-align: left;
}
input[type="text"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #b5a5a5;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #000000;
  font-family: "Poppins", sans-serif;
}
input[type="email"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #b5a5a5;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #000000;
  font-family: "Poppins", sans-serif;
}
input[type="password"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid#b5a5a5;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #000000;
  font-family: "Poppins", sans-serif;
}
.form-group {
  margin-bottom: 40px;
  outline: 0px;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #b5a5a5;
  outline: 0;
  background-color: #1a2226;
  color: #ffffff;
}
input:focus {
  outline: none;
  box-shadow: 0 0 0;
}
label {
  margin-bottom: 0px;
}
.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Aboreto", cursive;
}
.btn-outline-primary {
  border-color: #b5a5a5;
  color: rgb(0, 0, 0);
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.btn-outline-primary:hover {
  background-color: #b5a5a5;
  right: 0px;
}
.login-btm {
  float: left;
}
.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
  font-family: "Aboreto", cursive;
}
.login-text {
  text-align: left;
  padding-left: 0px;
  color: #000000;
  font-family: "Aboreto", cursive;
}
.loginbttm {
  padding: 0px;
}
</style>