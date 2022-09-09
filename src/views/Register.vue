<template>
  <section id="register">
    <i
      id="back-btn"
      onclick="history.back()"
      class="fa-solid fa-arrow-left-long"
    ></i>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 register-box">
          <div class="col-lg-12 register-key">
            <i class="fa-solid fa-user-large"></i>
          </div>
          <div class="col-lg-12 register-title">Register</div>
          <div class="card">
            <img
              class="img-fluid"
              src="https://i.postimg.cc/m2q63Nh5/user.png"
              alt="user-icon"
            />
          </div>
          <div class="col-lg-12 register-form">
            <div class="col-lg-12 register-form">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label class="form-control-label">FULL NAME</label>
                  <input
                    v-model="full_name"
                    type="text"
                    placeholder="full name"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">EMAIL</label>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="password"
                    class="form-control"
                    i
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">COUNTRY</label>
                  <input
                    v-model="coountry"
                    type="text"
                    placeholder="country"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PHONE NUMBER</label>
                  <input
                    v-model="phone"
                    type="number"
                    placeholder="phone number"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">BILLING ADDRESS</label>
                  <input
                    v-model="billing_address"
                    type="text"
                    placeholder="billing address"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label"
                    >DEFAULT SHIPPING ADDRESS</label
                  >
                  <input
                    v-model="default_shipping_address"
                    type="text"
                    placeholder="default shipping address"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">USER ROLE</label>
                  <input
                    v-model="userRole"
                    type="text"
                    placeholder="user role"
                    class="form-control"
                  />
                </div>

                <div class="col-lg-12 registerbttm">
                  <div class="col-lg-6 register-btm register-text">
                    <!-- Error Message -->
                  </div>
                  <div class="col-lg-6 register-btm register-button">
                    <button type="submit" class="btn btn-outline-primary">
                      Register
                    </button>
                    <p id="register-here">
                      Already have an account ? Login <a href="/login">here</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    const userRole = "user";
    return {
      full_name: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      billing_address: "",
      default_shipping_address: "",
      userRole,
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        country: this.country,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        userRole: this.userRole,
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
#register {
  background-image: url("https://i.postimg.cc/mggdRPd5/visax-2nn-P3aoes-Y-unsplash.jpg");
  min-height: 100vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  overflow-x: hidden;
}
.register-box {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  display: flex;
  margin-top: 5rem;
  height: auto;
  background: #ffffff;
  text-align: center;
  font-family: "Aboreto", cursive;
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
.register-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container {
  object-fit: contain;
}
.register-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #000000;
}

.register-form {
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
  color: #8f949b;
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
  color: #ecf0f5;
  font-family: "Poppins", sans-serif;
}

input[type="password"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #b5a5a5;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
  font-family: "Poppins", sans-serif;
}
input[type="number"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #b5a5a5;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
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

.register-btm {
  float: left;
}

.register-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}

.register-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}

.registerbttm {
  padding: 0px;
}
</style>