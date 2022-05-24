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
      <div class="col2In">
        <div class="sqrCol2Out">
          <!-- <div class="landingBtn topBtn">
            <button class="button"> Sign Up </button>
          </div>
          <div class="landingBtn botBtn">
            <button class="button"> Sign In </button>
          </div> -->
          <div class="signInTitle border">
            <img src="../assets/img/logo.png" width="150" height="150">
            Sign In to start working
          </div>
          <div class="border">
            <form class="bore">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn class="mr-4" @click="submit"> submit </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </form>
          </div>
          <div class="border">

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
