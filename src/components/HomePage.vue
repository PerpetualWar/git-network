<template>
  <div v-if="allUserIds">
    <user-info v-for="userId in allUserIds" :key="userId" :username="userId" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserInfo from './UserInfo.vue';

export default {
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo'])

  },
  components: {
    UserInfo
  },
  computed: {
    ...mapGetters(['allUserIds'])
  }
}
</script>     

<style lang="scss">

</style>