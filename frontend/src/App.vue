<template>
  <div id="app">
    <Social/>
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
        <img src="img/wheels.jpg" />
      </div>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Social from "./components/Social.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Social,
    Footer
  },
};
</script>

<style>
#app {
}
</style>
