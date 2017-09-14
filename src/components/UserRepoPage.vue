<template>
  <div>
    {{repo}}
    
  </div>
</template>

<script>
export default {
  computed: {
    repo() {
      return this.$route.params.repo;
    },
    username() {
      return this.$route.params.username;
    }
  }
}
</script>      