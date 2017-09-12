import Home from './components/Home.vue';
import UserInfo from './components/UserInfo.vue';
import UserRepo from './components/UserRepo.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/:username', component: UserInfo},
  {path: '/:username/:repo', component: UserRepo},

];