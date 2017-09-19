<template>
  <div>
    <div v-if="allUserIds">
      <transition-group name="slide" mode="out-in">
        <user-info v-for="userId in allUserIds" :key="userId" :username="userId" />
      </transition-group>
    </div>
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