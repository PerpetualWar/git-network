<template>
  <div>
    <h1>
      test</h1>
    {{$route.params.username}}
    
    <router-link to="/" class="btn btn-primary">Back</router-link>
    <div></div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  created() {
    
  },
  computed: {
    username() {
      return $route.params.username;
    }
  }
}
</script>      