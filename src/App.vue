<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
        <!-- <app-home></app-home> -->
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: {
    appHome: Home
  }
}
</script>

<style lang="scss">

</style>
