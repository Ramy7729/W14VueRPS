<template>
  <!-- DISPLAYING AND UPDATING THE SCOREBOARD TO TRACK WINS LOSSES AND TIES -->
  <div id="scoreboard">
    <h1>Wins: {{ scoreboard.wins }}</h1>
    <h1>Losses: {{ scoreboard.losses }}</h1>
    <h1>Ties: {{ scoreboard.ties }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  computed: {
    // This function returns the scoreboard results.
    // It is updated through a mutation in the store.
    scoreboard() {
      return this.$store.state.scoreboard;
    }
  },
};

</script>

<style scoped>

#scoreboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-top: 23px;
}
</style>
