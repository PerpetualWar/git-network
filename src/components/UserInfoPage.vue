<template>
  <div>
    <div v-if="error">
      <div class="text-center panel">
        <p>User does not exist</p>
      </div>
    </div>
    <div v-else-if="user">
      <user-info :username="username"></user-info>
      <br>
    </div>
    <div class="">
      <div class="clearfix">
        <div class="pull-left">
          <h3>Repositories: </h3><br>
        </div>
        <div class="pull-right">
          <router-link to="/" class="btn btn-default">Back</router-link>
        </div>
      </div>
      <div v-if="loading">
        <div class="text-center">
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
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
  data() {
    return {
      loading: false,
      error: ''
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch('fetchUser', this.username)
      .then(() => this.$store.dispatch('fetchUserRepos', this.username))
      .then(() => { this.loading = false; })
      .catch(error => {
        this.error = '' + error;
        this.loading = false;
        console.log(this.error);
      })

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