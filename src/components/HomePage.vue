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
import { mapGetters, mapActions } from 'vuex';
import UserInfo from './UserInfo.vue';

export default {
  created() {
    // this.$store.dispatch('getUserInfo');
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo'])

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