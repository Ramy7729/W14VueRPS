// Collaborated with Liz for this assignment.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Contains the user and cpu's selection.
    userSelection: "none",
    cpuSelection: "none",
    // Contains images which represent the selection made by the user and cpu.
    selections: {
      rock: {
        image: require( `../assets/rock.jpg`),
      },
      paper: {
        image: require( `../assets/paper.jpg`),
      },
      scissors: {
        image: require( `../assets/scissors.jpg`),
      },
      // This is the default image for the user and cpu that is displayed once the user is logged in.
      none: {
        image: require('../assets/rps.png')
      }
    },
    // Contains the value of the scoreboard.
    scoreboard: {
      wins: 0,
      losses: 0,
      ties: 0
    }
  },
  
  mutations: {
    // UPDATING USER AND CPU SELECTION
    
    // This function updates based on the options the user selects (rock, paper, or scissor).
    updateSelection: function (state, usersChoice) {
      state.userSelection = usersChoice;
      // Choices are assigned to an array.
      let choices = ["rock", "paper", "scissors"];
      // The math random method is used to generate a random number
      // The math floor method rounds the number down to either 0, 1, or 2. 
      // This number determines the choice the cpu has selected
      let choiceIndex = Math.floor(Math.random() * 3);
      // Cpu choice takes in a calculated index of either 0 for rock, 1 for paper, and 2 for scissors.
      let choice = choices[choiceIndex];
      // Cpu selection then gets assigned.
      state.cpuSelection = choice;
      
      //GAME LOGIC
      
      // These conditional statements determine the winner, loser, or if the game is a tie.
      // In general, the statements are dependent on the user and cpu selection. They are used with the && operator.
      // Once a specific condtion is met the scoreboard is updated by one using the increment operator.
      if (state.userSelection == state.cpuSelection) {
        state.scoreboard.ties++;
      } else if (state.userSelection == 'rock' && state.cpuSelection == 'scissors') {
        state.scoreboard.wins++;
      } else if (state.userSelection == 'paper' && state.cpuSelection == 'rock') {
        state.scoreboard.wins++;
      } else if (state.userSelection == 'scissors' && state.cpuSelection == 'paper') {
        state.scoreboard.wins++;
      // Else if the above conditions are not met, the player loses the round.
      // The scoreboard with losses is then incremented by one.
      } else {
        state.scoreboard.losses++;
      }
    }
  },
  actions: {
  },
  getters: {
  }
})
