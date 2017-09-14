<template>
  <div class="container">
    <div class="panel">
      <img :src="user.avatar_url" width="100px" height="auto" class="">
      <div class="">
        <router-link :to="user.login">{{user.login}}</router-link>
        <br> {{user.name}}
        <br> {{user.location}}, Repos: {{user.public_repos}}, Followers: {{user.followers}}
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: ['username'],
  computed: {
    user() {
      return this.$store.state.users[this.username];
    }
  }
}
</script>      