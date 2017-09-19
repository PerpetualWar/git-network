<template>
  <div>
    <div class="">
      <headers />
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
    <div>
      <footers />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Headers: Header,
    Footers: Footer
  }
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';

body {
  margin-top: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

li {
  list-style: none;
}

a {
  color:#8F94BA;
  -o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
}
a:hover { 
  color:#4D4F62; 
  }

a,a:hover,a:visited,a:focus {
    text-decoration: none;
  }

.bold {
  font-weight: 600;
}
.wrap {
  margin: 10px 0px;
}

.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 300ms ease-out forwards;
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
