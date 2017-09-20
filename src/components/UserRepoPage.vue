<template>
  <div>
    <div v-if="user">
      <user-info :username="username" />
    </div>
    <div v-if="!user && error">
      <p class="text-center panel">User does not exist</p>
    </div>
    <div v-if="userCurrentRepo">
      <router-link :to="'/' + userCurrentRepo.full_name" class="bold">{{userCurrentRepo.full_name}}</router-link><br> {{userCurrentRepo.description}}
    </div>
    <div v-if="!user && !userCurrentRepo && error">
    </div>
    <div v-else-if="!userCurrentRepo && error">
      <p class="text-center panel">Repo does not exist</p>
    </div><br>
    <div class="clearfix">
      <div class="pull-left">
        <h3>Commits: </h3><br>
      </div>
      <div class="pull-right">
        <router-link :to="{ name: 'UserInfo', params: { userId: username }}" class="btn btn-default">Back</router-link>
        <router-link :to="{ name: 'Home'}" class="btn btn-default">Back to Users</router-link><br>
      </div>
    </div>
    <div v-if="loading">
      <div class="text-center">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else-if="!userCurrentRepo || !user && error">
    </div>
    <div v-else-if="error">
      <div class="text-center panel">{{error}}</div>
    </div>
    <div v-else>
      <ul class="panel panel-default">
        <transition-group name="slide" mode="out-in">
          <li v-for="item in userCommitsByRepo" :key="item.commit.author.date" class="wrap">
            <span class="bold">{{item.commit.message}}</span>
            <br> {{item.commit.author.name}} commited {{item.commit.author.date}} <br><br>
          </li>
        </transition-group>
      </ul>
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
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch('fetchUser', this.username)
      .then(() => this.$store.dispatch('fetchUserRepos', this.username))
      .then(() => this.$store.dispatch('fetchUserCommits', { username: this.username, repo: this.userCurrentRepo }))
      .then(() => { this.loading = false; })
      .catch(error => {
        this.error = '' + error;
        console.log(this.error);
        this.loading = false;
      });
  },
  computed: {
    repo() {
      return this.$route.params.repo;
    },
    username() {
      return this.$route.params.username;
    },
    user() {
      return this.$store.getters.userById(this.username)
    },
    repoId() {
      return this.$store.getters.getCurrentRepoId(this.repo);
    },
    userCurrentRepo() {
      return this.repoId.map(item => this.$store.getters.getRepoById(item))[0];
    },
    userCommitsByRepo() {
      return this.$store.getters.getSortedCommits(this.repoId);
    },
  },
  components: {
    UserInfo
  }
}
</script>      

<style scoped>

</style>