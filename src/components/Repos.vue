<template>
<div>
  
  <router-link :to="repo.full_name">{{repo.full_name}}</router-link>
  <p>{{repo.description}}</p>
</div>
</template>

<script>
export default {
  props: ['userRepos', 'repo'],
  computed: {

  }

}
</script>      