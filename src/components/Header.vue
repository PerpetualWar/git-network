<template>
  <div class="">
    <div class="top text-center">
      <i class="fa fa-github fa-4x" aria-hidden="true"></i>
      <span class="heading bold"> Git Network</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['usernames'],
  computed: {
    user() {
      return this.$store.getters.userById(this.username);
    }
  }
}
</script>

<style lang="scss">
.top {
  padding: 100px 0px;
  margin: -50px 0px;
  background-color: lightgrey;
  color: black;
  
}

.heading {
  font-size: 6.25rem;
}

.space {
  display: none;
}

// .shrink {
//   position: fixed;
//   min-height: 25px;
//   min-width: 2440px;
//   /* height: 72px; */
//   -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
//   -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
//   box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
// }
</style>
