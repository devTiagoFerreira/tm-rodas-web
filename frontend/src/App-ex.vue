<template>
  <div id="app">
     <HelloWorld msg="nav" />
    <div class="parallax-container">
      <div class="parallax">
        <img src="img/whells.jpg" />
      </div>
    </div>
    <HelloWorld msg />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  height: 2000px;
}
</style>
