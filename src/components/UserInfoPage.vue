<template>
  <div v-if="user">
    <user-info :username="username"></user-info>
    <br>
    <div class="">
      <div class="clearfix">
        <div class="pull-left">
          <h3>Repositories: </h3><br>
        </div>
        <div class="pull-right">
          <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
      </div>
      <div v-if="userRepos">
        <ul class="panel panel-default">
          <transition-group name="slide" mode="out-in">
            <li v-for="repo in userRepos" :key="repo.name" class="wrap">
              <router-link :to="repo.full_name" class="bold">{{repo.full_name}}</router-link>
              <span v-if="repo.description"><br>{{repo.description}}</span><br>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  created() {
    this.$store.dispatch('fetchUser', this.username);
    this.$store.dispatch('fetchUserRepos', this.username);
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    user() {
      return this.$store.getters.userById(this.username)
    },
    userRepos() {
      return this.$store.getters
        .getUserReposByUsername(this.username)
        .map(repoUsername => this.$store.getters.getRepoById(repoUsername))
    }

  },
  components: {
    UserInfo
  }
}
</script>      

<style>

</style>