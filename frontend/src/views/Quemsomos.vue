<template>
  <section class="container quem">
    <div class="banner">Quem Somos</div>
    <h1>TM RODAS</h1>
    <h4>Ser uma referência na região, esse é nosso objetivo!</h4>
    <p class="desc">
      Nascida da vontade de dois irmãos, a TM RODAS vem com o objetivo de prestar o melhor serviço possível
      na área de recuperação de rodas. Com trabalho duro e dedicação no que fazemos, nossa empresa é a melhor
      opção para resolver o seu problema.
    </p>
    <h4>Conheça a TM RODAS</h4>
    <div class="container-gallery">
      <div class="image-gallery"></div>
    </div>
    <div id="body-large-img">
      <div id="large-img" onclick="screenDefault()"></div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Quem Somos",
    };
  },
  head: {
    title: function () {
      return {
        inner: this.title,
      };
    },
    script: [
      {
        type: "text/javascript",
        src: "js/storage-get-list.js",
        async: true,
        body: true,
      },
    ],
  },
};
</script>
