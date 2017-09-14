<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-6">
        <app-user-info v-for="userId in allUserIds" :key="userId" :username="userId" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInfo from './UserInfo.vue';

export default {
  created() {
    this.$store.dispatch('getUserInfo');
    console.log(this.$store.state.users);
  },
  methods: {

  },
  components: {
    appUserInfo: UserInfo
  },
  computed: {
    ...mapGetters(['allUserIds'])
  }
}
</script>     

<style>
body {
  background-color: lightgrey;
  margin-top: 50px;
}
</style>