import HomePage from './components/HomePage.vue';
import UserInfoPage from './components/UserInfoPage.vue';
import UserRepoPage from './components/UserRepoPage.vue';

export const routes = [
  {path: '/', name: 'Home', component: HomePage},
  {path: '/:username', name: 'UserInfo', component: UserInfoPage},
  {path: '/:username/:repo', name: 'UserRepo', component: UserRepoPage}
];