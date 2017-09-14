import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { users } from '../data/data';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: {},
    allIds: [],
    repos: {}
  },
  getters: {
    allUserIds: state => state.allIds,
    userById: state => username => state.users[username],
    // getUserBio: state => userId => state.users[userId].bio,
    // getUserRepos: state => userId => state.repos.filter(repo => repo.owner.login === userId),
    getUserRepos: state => userId => Object.keys(state.repos).filter(repoId => state.repos[repoId].owner.login === userId),
    getRepoById: state => repoId => state.repos[repoId]

  },
  actions: {
    fetchUser({ state, commit }, payload) {
      if (state.users.payload) return;

      axios.get("https://api.github.com/users/" + payload)
        .then(response => {
          // console.log(response);
          commit("addUser", response.data);
        })
        .catch(error => {
          console.log(error);
        });

    },
    fetchUserRepos({ state, commit }, payload) {
      axios.get("https://api.github.com/users/" + payload + "/repos")
        .then(response => {
          console.log(response.data);
          commit("addRepos", response.data);

        })
        .catch(error => {
          console.log(error);
        });
    },
    getUserInfo({ dispatch, commit }) {
      users.forEach((item, index) => {
        let username = item.username;
        dispatch("fetchUser", username)
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
        })
      }
  }
});