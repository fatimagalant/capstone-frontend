<template>
  <section id="Login">
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
            <i class="fa-solid fa-user-large"></i>
          </div>
          <h1 v-if="user" id="login-header">Welcome</h1>
          <h1 v-else id="login-header">Login</h1>
          <div id="login-margin">
            <h1 v-if="user" id="login-header">
              <a href="/products">Check out our cars</a>
            </h1>
            <h1 v-if="user" id="login-header">
              <a href="/admin">Check out our admin page</a>
            </h1>
            <p id="login-subheader" class="py-2" v-if="user">
              {{ user.fullname }}
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
  </section>
  <Footer />
</template>
<script>

import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      userpassword: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        userpassword: this.userpassword,
      });
    },
  },
  // mounted() {
  //   console.log(this.user);
  // },
};
</script>
<style scoped>
#Login {
  background-color: black;
  min-height: 100vh;
  overflow-x: hidden;
}
.login-box {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  display: flex;
  margin-top: 10rem;
  height: auto;
  background: #020202;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  color: #ecf0f5;
}
.login-form {
  margin-top: 25px;
  text-align: left;
}
input[type="text"] {
  background-color: #000000;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}
input[type="email"] {
  background-color: #000000;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}
input[type="password"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}
.form-group {
  margin-bottom: 40px;
  outline: 0px;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid rgb(111, 17, 218);
  outline: 0;
  background-color: #1a2226;
  color: #ecf0f5;
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
}
.btn-outline-primary {
  border-color: #6a0fe0;
  color: #ffff;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.btn-outline-primary:hover {
  background-color: #6a0fe0;
  right: 0px;
}
.login-btm {
  float: left;
}
.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}
.login-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}
.loginbttm {
  padding: 0px;
}
</style>