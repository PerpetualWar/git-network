import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
