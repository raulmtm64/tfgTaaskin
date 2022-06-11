<template>
  <div class="container">
    <div class="col1">
      <div class="sqrCol1">
        <div class="titleLanding">
          TaasKin
        </div>
        <div class="contentCol1 deleteText">
          Use the best free task manager and improve your efficiency both at work and your daily life.
        </div>
        <div class="contentCol1">
          Organize your tasks using panels or lists and create groups, all for manage projects from TaasKin!
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="col2In"></div>
      <div class="sqrCol2Out">
        <div class="signInTitle border">
          <img src="../assets/img/logo.png" class="imgLogoSize">
          Sign In to start working
        </div>
        <div class="signInForm border">
          <form class="formSignIn">
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
              type="password"
              required
              dark
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              class="inputSignIn font-weight-bold"
            ></v-text-field>
            <button class="mt-4 mb-4 button" @click="signIn"> Sign In </button>
          </form>
        </div>
        <hr class="separationBar">
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
