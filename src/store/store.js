import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { users } from '../data/data';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    allIds: []
  },
  getters: {
    allUserIds: state => state.allIds

  },
  actions: {
    fetchUser({ state, commit }, payload) {
      if (state.users.payload) return;

      axios.get("https://api.github.com/users/" + payload)
        .then(response => {
          console.log(response);
          commit("addUser", response.data);
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
    }
  },
});