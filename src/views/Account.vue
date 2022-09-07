<template>
 <div id="item-container" v-if="user">
        <div v-for="user in user" :key="user.user_id">    
  <div class="card">
    {{user.full_name}}
  </div>
  </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>