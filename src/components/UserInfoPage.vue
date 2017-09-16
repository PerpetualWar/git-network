<template>
  <div v-if="user">
    <h1>{{username}}'s Info Page</h1>
    <app-user-info :username="username"></app-user-info>
    <br>
    <div>{{user.bio}}</div>
    <div class="container">
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>
    <ul>
      <li v-for="repo in userRepos" :key="repo.name">
        <router-link :to="repo.full_name">{{repo.full_name}}</router-link><br> {{repo.description}}
      </li>
    </ul>
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
        .getUserReposByUsername(this.username) // only usernames
        .map(repoUsername => this.$store.getters.getRepoById(repoUsername)) // map to the actual repo object in state
      // console.log(this.$store.state.repos);
    }

  },
  components: {
    appUserInfo: UserInfo
  }
}
</script>      