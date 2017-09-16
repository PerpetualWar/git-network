<template>
<div class="container">
  
  <router-link :to="repoLocal.full_name">{{repoLocal.full_name}}</router-link>
  <p>{{repoLocal.description}}</p>
</div>
</template>

<script>
export default {
  props: ['repo', 'commitRoute'],
  computed: {
    
  }
}
</script>      