<template>
  <div v-if="user">
    <user-info :username="username" />
    <div v-if="userCurrentRepo">
      <router-link :to="'/' + userCurrentRepo.full_name" class="bold">{{userCurrentRepo.full_name}}</router-link><br> {{userCurrentRepo.description}}
    </div><br>
    <div class="clearfix">
      <div class="pull-left">
        <h3>Commits: </h3><br>
      </div>
      <div class="pull-right">
        <router-link :to="{ name: 'UserInfo', params: { userId: username }}" class="btn btn-primary">Back</router-link>
        <router-link :to="{name: 'Home'}" class="btn btn-primary">Back to Users</router-link><br>
      </div>
    </div>
    <ul class="panel panel-default">
      <transition-group name="slide" mode="in-out">
        <li v-for="item in userCommitsByRepo" :key="item.commit.author.date" class="wrap">
          <span class="bold">{{item.commit.message}}</span><br> {{item.commit.author.name}} commited {{item.commit.author.date}} <br><br>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.$store.dispatch('fetchUser', this.username);
    this.$store.dispatch('fetchUserRepos', this.username)
      .then(() => {
        this.$store.dispatch('fetchUserCommits', { username: this.username, repo: this.userCurrentRepo })
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