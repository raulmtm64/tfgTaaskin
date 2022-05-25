<template>
  <div class="container">
    <div class="col1">
      <div class="sqrCol1">
        <div class="titleLanding">
          TaasKin
        </div>
        <div class="contentCol1">
          Utiliza el mejor gestor de tareas gratuito y mejora tu efiencia tanto
          en el trabajo como en tu día a día.
        </div>
        <div class="contentCol1">
          Organiza tus tareas mediante paneles o listas y crea grupos, todo para
          gestionar proyectos desde TaasKin!
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="col2In"></div>
      <div class="sqrCol2Out">
        <div class="signInTitle border">
          <img src="../assets/img/logo.png" width="150" height="150">
          Sign In to start working
        </div>
        <div class="signInForm border">
          <form class="formSignIn mb-16">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              dark
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              class="inputSignIn"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :error-messages="pwdErrors"
              label="Password"
              required
              dark
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              class="inputSignIn"
            ></v-text-field>
            <button class="mt-4 mb-4 button" @click="signIn"> Sign In </button>
          </form>
        </div>
        <hr class="widtthh">
        <div class="signUp">
          <div class="leftColSignUp">
            Don't have an account?
          </div>
          <div class="rightColSignUp">
            <button class="mt-4 mb-4 button" @click="signIn"> Get Started </button>
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
