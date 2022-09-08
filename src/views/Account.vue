<template>
  <div class="container">
    <div class="profile-cont">
      <div class="row">
        <img id="profileImg" class="mx-auto m-3" :src="user.user.img" alt="" />
        <div class="profile-details">
          <editModal :user="user" />
          <i
            class="fa-solid fa-trash"
            @click="deleteUser(user.user.user_id)"
          ></i>
          <h1>{{ user.user.user_name }}</h1>
          <p>{{ user.user.email }}</p>
          <p>{{ user.user.bio }}</p>
        </div>
        <div class="btn-cont d-flex">
          <button id="profile-btn" class="mx-auto m-4" @click="logout()">
            Logout
          </button>
          <button
            v-if="user.user.user_type === 'admin'"
            id="profile-btn"
            class="mx-auto m-4"
          >
            <RouterLink id="admin-link" to="/admin" v-on:click="display">
              Admin
            </RouterLink>
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
  border: 1px solid #D4D3E8;
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 2rem;
}
</style>