<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-6">
        {{usersArray[1].name}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { users } from '../data/data';

export default {
  data() {
    return {
      usersArray: []
    };
  },
  created() {
    users.map((item, index) => {
      axios.get('https://api.github.com/users/' + users[index].username)
        .then((response) => {
          console.log(response);
          this.usersArray.push(response.data);
          console.log(this.usersArray);
        })
        .catch(function(error) {
          console.log(error);
        });
    })
  }
}
</script>      