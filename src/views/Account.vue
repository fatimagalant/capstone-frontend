<template>
  <div v-if="user">
  </div>
  <div class="card">
    {{user.full_name}}
  </div>
  <div v-else class="p-5">
    <h1>you are not logged in</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>