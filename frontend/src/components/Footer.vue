<template>
  <footer id="footer">
    <div class="bot">
      <div class="container">
        <div class="contact-footer">
          <router-link to="/maps" class="nav end">
            <img src="img/logo1.png" alt="TM RODAS" class="footer-logo" />
            <p>
              R. Júlio Marassi, 186
              <br />Distrito Industrial IV
              <br />Bebedouro - SP
              <br />14707-080
            </p>
          </router-link>
          <a href="mailto:tmrodas.ind@gmail.com">tmrodas.ind@gmail.com</a>
          <div class="copy">Copyright 2020 TMRODAS. Todos os Direitos Reservados</div>
        </div>
        <div class="links-footer">
          <router-link to="/" class="nav hm-footer">
            <i class="material-icons left">keyboard_arrow_right</i>Home
          </router-link>
          <router-link to="/quemsomos" class="nav qs-footer">
            <i class="material-icons left">keyboard_arrow_right</i>Quem Somos
          </router-link>
          <router-link
            to
            class="nav"
            onclick="M.toast({html: 'Em breve, aguarde!', classes: 'time'})"
          >
            <i class="material-icons left">keyboard_arrow_right</i>Compre Online
          </router-link>
          <a href class="nav">
            <i class="material-icons left">keyboard_arrow_right</i>Orçamento
          </a>
          <a href class="nav">
            <i class="material-icons left">keyboard_arrow_right</i>Dúvidas Técnicas
          </a>
          <router-link to="/trabalheconosco" class="nav wk-footer">
            <i class="material-icons left">keyboard_arrow_right</i>Trabalhe Conosco
          </router-link>
        </div>
        <div class="social-footer">
          <a href class="nav">
            <ion-icon name="logo-whatsapp"></ion-icon>Whatsapp
          </a>
          <a href class="nav">
            <ion-icon name="logo-facebook"></ion-icon>Facebook
          </a>
          <a href class="nav">
            <ion-icon name="logo-instagram"></ion-icon>instagram
          </a>
        </div>
      </div>
      <div class="dev">
        <a
          href="https://www.linkedin.com/in/tiago-ferreira-dev"
          target="_blank"
        >Tiago Ferreira - Desenvolvedor Web</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
