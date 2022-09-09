<template>
  <div class="container">
    <div class="profile-cont">
      <div class="row">
        <div class="profile-details">
          <editModal :user="user" />
          <!-- <i class="fa-solid fa-trash" @click="deleteUser"></i> -->
          <h1>{{ user.full_name }}</h1>
          <p>{{ user.email }}</p>
          <p>{{ user.billing_address }}</p>
          <p>{{ user.default_shipping_address }}</p>
          <p>{{ user.country }}</p>
        </div>
        <div class="btn-cont d-flex">
          <button id="profile-btn" class="mx-auto m-4" @click="logout">
            Logout
          </button>
          <button
            v-if="user.userRole === 'admin'"
            id="profile-btn"
            class="mx-auto m-4"
          >
            <routerLink id="admin-link" to="/admin">
              Admin
            </routerLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    // console.log(this.$route.params.id);
    // this.$store.dispatch("getPost", this.$route.params.id);
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
      // this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Poppins:wght@200&display=swap");
.profile-details {
  color: var(--light);
  text-shadow: 2px 2px 2px var(--dark);
}
.profile-cont {
  background: linear-gradient(90deg, var(--green), var(--light-green));
  box-shadow: 0px 0px 24px var(--green);
  position: relative;
  height: fit-content;
  width: 100%;
  margin: 3rem;
}
h1 {
  font-family: "Aboreto", cursive;
  font-weight: 500;
}
a {
  text-decoration: none;
  color: var(--green);
}
a:hover {
  text-decoration: none;
  color: var(--dark);
}
#profile {
  background: linear-gradient(90deg, var(--green), var(--light-green));
  position: relative;
  height: 600px;
  width: 100%;
  box-shadow: 0px 0px 24px var(--green);
}
#profile {
  min-height: 100vh;
}
#profileImg {
  width: 30%;
  -o-object-fit: cover;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 60%;
}
#profile-btn {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 25%;
  color: var(--light-green);
  box-shadow: 0px 2px 2px var(--green);
  cursor: pointer;
  transition: 0.2s;
}
p {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 2rem;
}
</style>