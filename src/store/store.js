import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { users } from '../data/data';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: {},
    allIds: [],
    repos: {},
    commits: {},
    commitsTemp: {}
  },
  getters: {
    allUserIds: state => state.allIds,
    getUserReposComplete: state => state.repos,
    getRepoById: state => repoId => state.repos[repoId],
    getCurrentRepoId: state => repoName => Object.keys(state.repos).filter(repoId => state.repos[repoId].name === repoName),
    getUserCommitsComplete: state => state.commits,
    userById: state => username => state.users[username],
    getUserReposByUsername: state => username => Object.keys(state.repos).filter(repoUsername => state.repos[repoUsername].owner.login === username),
    getCommitById: state => commitId => state.commits[commitId],
    getSortedCommits: state => repoId => Object.keys(state.commits[repoId] || {})
      .map(sha => state.commits[repoId][sha])
      .sort((a, b) => {
        const date1 = a.commit.author.date
        const date2 = b.commit.author.date
        return new Date(date1).getTime() - new Date(date2).getTime()
      })
      .slice(0, 10)
  },
  actions: {
    fetchUser({ state, commit }, payload) {
      if (state.users.payload) return;

      return axios.get("https://api.github.com/users/" + payload)
        .then(response => {
          // console.log(response);
          commit("addUser", response.data);
        })
        .catch(error => {
          console.log(error);
        });

    },
    fetchUserRepos({ state, commit }, payload) {
      if (state.repos.payload) return;

      return axios.get("https://api.github.com/users/" + payload + "/repos")
        .then(response => {
          // console.log(response.data);
          commit("addRepos", response.data);

        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchUserCommits({ state, commit }, payload) {
      // if (state.commits.payload.repo) return;
      // axios.get("https://api.github.com/repos/" + payload[0] + "/" + payload[1] + "/commits")
      const { repo } = payload;
      // console.log("repo object", repo);
      return axios.get("https://api.github.com/repos/" + payload.username + "/" + payload.repo.name + "/commits")
        .then(response => {
          const commitArr = response.data;
          let payload2 = [];
          payload2.push(repo, commitArr);
          // console.log("this is payload2", payload2);
          commit("addCommits", payload2);
        });
    },
    getUserInfo({ dispatch, commit }) {
      users.forEach(item => {
        dispatch("fetchUser", item.username)
      });
    }
  },
  mutations: {
    addUser(state, user) {
      Vue.set(state.users, user.login, user);
      state.allIds = Object.keys(state.users);
    },
    addRepos(state, repos) {
      repos.forEach(repo => {
        Vue.set(state.repos, repo.id, repo)
      });
    },
    // addCommits(state, payload) {
    //   const [repo, commits] = payload;
    //   commits.forEach(commit => {
    //     Vue.set(state.commitsTemp, commit.sha, commit)
    //   });
    //   Vue.set(state.commits, repo.id, state.commitsTemp);
    //   state.commitsTemp = {};
    // }
    addCommits(state, payload) {
      const [repo, commits] = payload;
      if (!state.commits[repo.id]) {
        Vue.set(state.commits, repo.id, {});
      }
      commits.forEach(commit => {
        Vue.set(state.commits[repo.id], commit.sha, commit)
      });
    }
  }
});