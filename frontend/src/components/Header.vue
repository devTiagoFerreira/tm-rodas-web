<template>
  <header id="header" class="header">
    <div class="social">
      <ul>
        <li>
          <a
            onclick="M.toast({html: 'Seg - Sex : 08:00 - 17:30 <br/> Sábados : 08:00 - 12:00', classes: 'time'})"
          >
            <img src="img/clock.png" alt="whatsaap" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/local.png" alt="whatsaap" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/wz.png" alt="whatsaap" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/fb.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/tg.png" alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
    <!--web nav-->
    <div id="menu">
      <nav class="nav-extended" data-target="menu">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            <img src="img/logo1.png" alt="TM RODAS" />
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">{{pag1}}</a>
            </li>
            <li>
              <a href="#">{{pag2}}</a>
            </li>
            <li>
              <a href="#">{{pag3}}</a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown-web">
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
        <a href="#">
          <i class="material-icons left">home</i>
          {{pag1}}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons left">group</i>
          {{pag2}}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons left">shopping_cart</i>
          {{pag3}}
        </a>
      </li>
      <li>
        <a class="dropdown-trigger" href="#" data-target="dropdown-mob">
          <i class="material-icons left">email</i>
          {{pag4}}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </ul>
    <!--web dropdown nav-->
    <ul id="dropdown-web" class="dropdown-content">
      <li>
        <a href="#!">{{drop1}}</a>
      </li>
      <li>
        <a href="#!">{{drop2}}</a>
      </li>
      <li>
        <a href="#!">{{drop3}}</a>
      </li>
    </ul>
    <!--mob dropdown nav-->
    <ul id="dropdown-mob" class="dropdown-content">
      <li>
        <a href="#!">{{drop1}}</a>
      </li>
      <li>
        <a href="#!">{{drop2}}</a>
      </li>
      <li>
        <a href="#!">{{drop3}}</a>
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
