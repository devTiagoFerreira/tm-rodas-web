<template>
  <div id="social" class="social">
    <ul>
      <li>
        <a
          onclick="M.toast({html: 'Seg - Sex : 08:00 - 17:30 <br/> Sábados : 08:00 - 12:00', classes: 'time'})"
        >
          <ion-icon name="time"></ion-icon>
        </a>
      </li>
      <li class="local">
        <router-link to="/maps" class="nav a-soc">
          <ion-icon name="pin"></ion-icon>
        </router-link>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
