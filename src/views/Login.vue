<template>
  <main>
    <div class="sidePanelLeft" >
      <h1>ROCK</h1>
    </div>
    
    <!-- This form takes in the users input information of email and password. -->
    <form action="javascript:void(0)" v-if="loginToken === undefined"> 
      <input type="text" id="emailInput" placeholder="email" >
      <input type="password" id="passwordInput" placeholder="password" >
      <!-- The click event is assigned a function that triggers once the user clicks on the button -->
      <button @click="attemptLogin">Login</button>
      <p id="errorMessage"></p>
      <h1>PAPER</h1>
    </form>
    <div class="sidePanelRight">
      <h1>SCISSORS</h1>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: 'Login',

  methods: {
    // Configuring the api with the url, method of post and headers.
    attemptLogin() {
      axios.request({
        url: "https://reqres.in/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // User information is taken in to determine if the login is successful.
        data: {
          email: document.getElementById("emailInput").value,
          password: document.getElementById("passwordInput").value,
        },
      })
       // A successful request creates a cookie and redirects the user to the specfied view page. 
       .then((res) => {
          console.log(res);
          // Sets the cookie.
          cookies.set("loginToken", res.data.token);
          // The router is accessed and redirects the user to the game page if the request is successful.
          this.$router.push({name: 'Game'})
        
        })
        // Else a failed attempt displays an error message.
        .catch((err) => {
          console.log(err);
          document.getElementById('errorMessage').innerText = "Login attempt failed. Please try again."
        });
    },
  }
}
</script>

<style scoped>
  form{
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 17px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #99fadc;
    padding: 222px;
  }

  .sidePanelLeft {
    height: 100%;
    width: 25vw;
    background-color:	#FB8E7E;
    padding-top: 20px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    writing-mode: vertical-rl; 
    text-orientation: upright;
  }

  .sidePanelRight {
    height: 100%;
    width: 25vw;
    background-color:	#FB8E7E;
    padding-top: 20px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    writing-mode: vertical-lr; 
    text-orientation: upright;
  }
</style>
