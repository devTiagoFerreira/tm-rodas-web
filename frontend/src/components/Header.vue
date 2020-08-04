<template>
  <header id="header" class="header">
    <div class="navbar-fixed">
      <nav class="nav-extended">
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
              <a class="dropdown-trigger" href="#" data-target="dropdown-contato-web">
                {{pag4}}
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
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
        <a class="dropdown-trigger" href="#" data-target="dropdown-contato-mob">
          {{pag4}}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </ul>
    <!--dropdown-->
    <ul id="dropdown-contato-web" class="dropdown-content">
      <li>
        <a href="#!">one</a>
      </li>
      <li>
        <a href="#!">two</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#!">three</a>
      </li>
    </ul>
    <ul id="dropdown-contato-mob" class="dropdown-content">
      <li>
        <a href="#!">one</a>
      </li>
      <li>
        <a href="#!">two</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#!">three</a>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
