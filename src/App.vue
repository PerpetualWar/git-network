<template>
  <div>
    <div class="container-fluid">
      <headers></headers>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Headers: Header
  }
}
</script>

<style lang="scss">
body {
  // background-color: lightgrey;
  margin-top: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

li {
  list-style: none;
}

.bold {
  font-weight: 600;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
