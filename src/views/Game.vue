<template>
  <main>
    <!-- If the user is logged in this function is called which retrieves the cookie and  
      displays the contents of the game page.
    -->
    <div v-if="userIsLoggedIn()">
      <h1>Rock Paper Scissors</h1>
      <div class="gameContainer">
        <user-selection/>
        <computer-selection/>
        <scoreboard/>
      </div>
    </div>
    <!-- If the user isn't logged in this function is called and an error message is displayed instead. -->
    <div v-if="!userIsLoggedIn()">
      <p>Error! Please Log In</p>
    </div>
  </main>
</template>

<script>
import cookies from "vue-cookies";

import ComputerSelection from '../components/ComputerSelection.vue';
import Scoreboard from '../components/Scoreboard.vue';
import UserSelection from '../components/UserSelection.vue';

export default {
  name: 'Game',
  components: {
    UserSelection,
    Scoreboard,
    ComputerSelection
  },
  // This method retrievs cookie information only if the user is logged in.
  methods: {
    userIsLoggedIn: function() {
      console.log(cookies.get("loginToken"));
      return cookies.get("loginToken") !== null;
    }
  },
}
</script>
  
<style scoped>
  .gameContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
  } 
</style>
