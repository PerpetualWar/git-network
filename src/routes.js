import HomePage from './components/HomePage.vue';
import UserInfoPage from './components/UserInfoPage.vue';
import UserRepoPage from './components/UserRepoPage.vue';

export const routes = [
  {path: '/', component: HomePage},
  {path: '/:username', component: UserInfoPage},
  {path: '/:username/:repo', component: UserRepoPage},

];