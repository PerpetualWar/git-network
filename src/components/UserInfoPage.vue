<template>
  <div>
    <h1>{{username}}'s Info Page</h1>
    <app-user-info :username="username"></app-user-info>
    <br>
    <router-link to="/" class="btn btn-primary">Back</router-link>
    <div>{{user.bio}}</div>
    <!-- <ul>
      <li v-for="repo in userRepos">{{repo.full_name}}</li>
    </ul> -->
    <app-repos v-for="repo in userRepos" :key="repo.name" :userRepos="userRepos" :repo="repo"></app-repos>
    

  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import Repos from './Repos.vue';

export default {
  created() {
    this.$store.dispatch('fetchUser', this.username);
    this.$store.dispatch('fetchUserRepos', this.username);
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    // userBio() {
    //   // return this.$store.state.users[this.username].bio;
    //   return this.$store.getters.getUserBio(this.username);
    // },
    // userRepos() {
    //   // return this.$store.state.repos.repo;
    //   return this.$store.getters.getUserRepos;
    // },
    user () {
      return this.$store.getters.userById(this.username)
    },
    userRepos () {
      return this.$store.getters
        .getUserRepos(this.username) // only Ids
        .map(repoId => this.$store.getters.getRepoById(repoId)) // map to the actual repo object in state
    }
  },
  components: {
    appUserInfo: UserInfo,
    appRepos: Repos
  }
}
</script>      