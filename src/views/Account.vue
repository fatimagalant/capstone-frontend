<template>
<section id="acccount">
  <div id="item-container" v-if="user">
    <div v-for="user in user" :key="user.user_id">
      <div class="card">
        {{ user.full_name }}
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>
#account{
  margin-top: 500px;
  min-height: 100vh;
  background-color: white;
}
</style>