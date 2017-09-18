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
  padding: 50px 0px 100px 0px;
  margin: -50px 0px;
  background-color: #8A8A8A;
  color: white;
}

.heading {
  font-size: 6.25rem;
}

.space {
  display: none;
}
</style>
