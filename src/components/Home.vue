<template>
  <div>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <app-user-info></app-user-info>
      </div>
    </div>

  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  components: {
    appUserInfo: UserInfo
  }
}
</script>      