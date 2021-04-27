<template>
  <div id="cpuContainer">
    <!-- The source attribute is binded with a function that updates the image
       of the cpu based on their selection. 
    -->
    <img :src="getCpuImage()"/>
    <h1>Cpu Selected: {{ cpuSelection }}</h1>
  </div>
</template>

<script>
export default {
  name: 'computer-selection',
  computed: {
    // This function returns the cpu's selection.
    cpuSelection() {
      return this.$store.state.cpuSelection;
    }
  },

  methods: {
    // This method retrieves an image which is dependent on the cpu's selection.
    getCpuImage: function() {
      let cpuSelection = this.$store.state.cpuSelection;
      return this.$store.state.selections[cpuSelection].image;
    } 
  },
};
</script>

<style scoped>

#cpuContainer {
  background-color: #ff6f61ff;
  height: 50vh;
  padding-top: 50px;
  border-left: 3px solid black;
}

img {
  height: 333px;
  border-radius: 50%;
}
</style>
