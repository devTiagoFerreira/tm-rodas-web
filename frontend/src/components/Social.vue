<template>
  <div id="social" class="social">
    <ul>
      <li>
        <a
          onclick="M.toast({html: 'Seg - Sex : 08:00 - 17:30 <br/> Sábados : 08:00 - 12:00', classes: 'time'})"
        >
          <img src="img/clock.png" alt="whatsaap" />
        </a>
      </li>
      <li>
        <router-link to="/" class="a">
          <img src="img/local.png" alt="whatsaap" />
        </router-link>
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
