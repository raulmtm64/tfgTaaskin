<template>
  <div class="container">
    <div class="col1">
      <div class="sqrCol1">
        <div class="titleLanding">TaasKin</div>
        <div class="contentCol1">
          Utiliza el mejor gestor de tareas gratuito y mejora tu efiencia tanto
          en el trabajo como en tu día a día!
        </div>
        <div class="contentCol1">
          Organiza tus tareas mediante paneles y listas y crea grupos, todo para
          gestionar proyectos desde TaasKin!
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="col2In">
        <div class="sqrCol2Out">
          <div class="landingBtn topBtn">
            <button class="button"> Sign Up </button>
          </div>
          <div class="landingBtn botBtn">
            <button class="button"> Sign In </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingView",
  methods: {
    conectar() {
      alert("cacc");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/landing.css");
@import url("../assets/css/general.css");
</style>
