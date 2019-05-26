<template>
  <div class="earth-container">
    <iframe :src="src"></iframe>
  </div>
</template>

<script>
  export default {
    name: "EarthComponent",
    props:['src'],
  }
</script>

<style lang="scss" scoped>
  .earth-container{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    overflow: hidden;
    iframe{
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border:0;
    }

  }
</style>