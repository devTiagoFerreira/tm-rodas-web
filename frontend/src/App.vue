<template>
  <div id="app">
    <Header
      pag1="Home"
      pag2="Quem Somos"
      pag3="Compre Online"
      pag4="Contato"
      drop1="Orçamento"
      drop2="Dúvidas Técnicas"
      drop3="Trabalhe Conosco"
    />
    <div class="parallax-container">
      <div class="parallax">
        <img src="img/whells.jpg" />
      </div>
    </div>
    <HelloWorld msg />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  height: 2000px;
}
</style>
