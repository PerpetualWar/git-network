<template>
  <div>
    <app-user-info :username="username" /> {{repo}}
    <p>{{user.bio}}</p>
    <router-link :to="{ name: 'UserInfo', params: { userId: username }}" class="btn btn-primary">Back</router-link>

    <!-- <p>{{userCommitsByRepo}}</p> -->
    <div v-if="isReady = false">
      <h2>Loading...</h2>
    </div>
    <div v-else>
      <ul style="list-style: none;">
        <li v-for="item in userCommitsByRepo" class="panel">
          <h4>{{item.commit.message}}</h4>
          <br> {{item.commit.author.name}} commited {{item.commit.author.date}} <br><br>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  created() {
    this.$store.dispatch('fetchUser', this.username);
    this.$store.dispatch('fetchUserRepos', this.username);
    this.$store.dispatch('fetchUserCommits', { username: this.username, repo: this.userCurrentRepo })
    // this.$store.dispatch('fetchUserCommits', this.commitRoute)
  },
  data() {
    return {
      isReady: false
    };
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
    // commitRoute() {
    //   let commitPayload = [];
    //   commitPayload.push(this.username, this.repo);
    //   return commitPayload;
    // },
    repoId() {
      return this.$store.getters.getCurrentRepoId(this.repo);
    },
    userCurrentRepo() {
      return this.repoId.map(item => this.$store.getters.getRepoById(item))[0];
    },
    userCommitsByRepo() {
      if (!this.$store.getters.getSortedCommits) return [];
      return this.$store.getters.getSortedCommits(this.repoId);
      this.isReady = true;
    },
  },
  components: {
    appUserInfo: UserInfo
  }
}
</script>      