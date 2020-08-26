<template>
  <header id="header" class="header">
    <!--web nav-->
    <div class="navbar-fixed" id="menu">
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            <img src="img/logo1.png" alt="TM RODAS" />
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li class="hm page">
              <router-link to="/" class="a">{{pag1}}</router-link>
            </li>
            <li class="qs page">
              <router-link to="/quemsomos" class="a">{{pag2}}</router-link>
            </li>
            <li>
              <router-link to="" class="a" onclick="M.toast({html: 'Em breve, aguarde!', classes: 'time'})">{{pag3}}</router-link>
            </li>
            <li class="wk page">
              <a class="dropdown-trigger" data-target="dropdown-web">
                {{pag4}}
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!--mobile nav-->
    <ul class="sidenav" id="mobile-demo">
      <li class="logo">
        <img src="img/logo2.png" alt />
      </li>
      <li>
        <router-link to="/" class="a">
          <i class="material-icons left">home</i>
          {{pag1}}
        </router-link>
      </li>
      <li>
        <router-link to="/quemsomos" class="a">
          <i class="material-icons left">group</i>
          {{pag2}}
        </router-link>
      </li>
      <li>
        <router-link to="" class="a" onclick="M.toast({html: 'Em breve, aguarde!', classes: 'time'})">
          <i class="material-icons left">shopping_cart</i>
          {{pag3}}
        </router-link>
      </li>
      <li>
        <a class="dropdown-trigger" data-target="dropdown-mob">
          <i class="material-icons left">email</i>
          {{pag4}}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </ul>
    <!--web dropdown nav-->
    <ul id="dropdown-web" class="dropdown-content">
      <li>
        <router-link to="/" class="a">{{drop1}}</router-link>
      </li>
      <li>
        <router-link to="/" class="a">{{drop2}}</router-link>
      </li>
      <li class="wk-drop">
        <router-link to="/trabalheconosco" class="a">{{drop3}}</router-link>
      </li>
    </ul>
    <!--mob dropdown nav-->
    <ul id="dropdown-mob" class="dropdown-content">
      <li>
        <router-link to="/" class="a">{{drop1}}</router-link>
      </li>
      <li>
        <router-link to="/" class="a">{{drop2}}</router-link>
      </li>
      <li>
        <router-link to="/trabalheconosco" class="a">{{drop3}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    //msg: String
    pag1: String,
    pag2: String,
    pag3: String,
    pag4: String,
    drop1: String,
    drop2: String,
    drop3: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
