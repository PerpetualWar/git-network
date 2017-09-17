<template>
  <div class="">
    <div class="panel panel-default">
      <div class="panel-heading">
        <router-link :to="'/' + user.login" class="bold">{{user.login}}</router-link>
      </div>
      <div class="panel-body">
        <div class="pull-left bold">
          <img :src="user.avatar_url" width="100px" height="auto" class=""><br> {{user.name}}
          <br>
          <span v-if="user.location">{{user.location}}</span>
        </div>
        <div class="pull-right bold">
          Repos: {{user.public_repos}}
        </div><br>
        <div class="pull-right bold">
          Followers: {{user.followers}}
        </div>
      </div>
      <div v-if="!($route.name === 'Home') && user.bio" class="panel-footer">
        <p>{{user.bio}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: ['username'],
  computed: {
    user() {
      return this.$store.getters.userById(this.username);
    }
  }
}
</script>      

<style>

</style>