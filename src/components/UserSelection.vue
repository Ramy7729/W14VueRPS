<template>
  <div class="bkgColor">
    <div id="userContainer">
      <!-- The source attribute is binded with a function that updates the image
        of the user based on their selection. 
      -->
      <img :src="getUserImage()"/>
      <h1>User Selected: {{ userSelection }}</h1>
    </div>
    <div>
      <!-- This click event is triggered when the user clicks on 1 of the 3 choices avaible to them.
        A function is called that updates their selection accordingly.
        -->
      <button @click="selectRock">Rock</button>
      <button @click="selectPaper">Paper</button>
      <button @click="selectScissors">Scissors</button>
    </div>
 </div>
</template>

<script>
export default {
  name: 'user-selection',
  // This function returns the users selection
  computed: {
    userSelection() {
      return this.$store.state.userSelection;
    }
  },

  methods: {
    // This method commits the mutation which updates with the users specified selection.
    // A second argument of rock is passed through to set the user's selection to rock.
    selectRock: function() {
      this.$store.commit('updateSelection', 'rock');
    },
    // This method commits the mutation which updates with the users specified selection.
    // A second argument of rock is passed through to set the selection to paper.
    selectPaper: function() {
      this.$store.commit('updateSelection', 'paper');
    },
    // This method commits the mutation which updates with the users specified selection.
    // A second argument of rock is passed through to set the user's selection to scissors.
    selectScissors: function() {
      this.$store.commit('updateSelection', 'scissors');
    },
    // This method retrieves an image which is dependent on the users selection.
    getUserImage: function() {
      let userSelection = this.$store.state.userSelection;
      return this.$store.state.selections[userSelection].image;
    },
  },
};
</script>
<style scoped>
  
  .bkgColor {
    background-color: #ffb347;
    height: 50vh;
    padding-top: 50px;
    border-right: 3px solid black;
  }
  
  img {
    height: 333px;
    border-radius: 50%;
  }
  
  button {
    background-color: #768d87;
    border-radius: 5px;
    border: 1px solid #566963;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    padding: 11px 23px;
    margin: 10px;
  }
  </style>
