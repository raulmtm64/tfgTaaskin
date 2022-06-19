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
          Organize your tasks using panels or lists and create groups, all for managing projects with TaasKin!
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="col2In"></div>
      <div class="sqrCol2Out">
        <div class="signInTitle border">
          <img src="../assets/img/Logo.png" class="imgLogoSize me-5">
          Sign In to start working
        </div>
        <div class="signInForm">
          <div class="formSignIn2" v-if="message != ''">
            {{ message }}
            <button type="button" @click="resetForm()" class="button mt-5"> Volver atrás </button>
          </div>
          <form class="formSignIn" v-if="message == ''" @submit.prevent="login()">
            <v-text-field 
              v-model="email" 
              :error-messages="emailErrors" 
              label="E-mail" 
              required dark
              @input="$v.email.$touch()" 
              @blur="$v.email.$touch()" 
              class="inputSignIn">
            </v-text-field>
            <v-text-field 
              v-model="pwd" 
              :error-messages="pwdErrors" 
              label="Password" 
              type="password" 
              required dark
              @input="$v.pwd.$touch()" 
              @blur="$v.pwd.$touch()" 
              class="inputSignIn">
            </v-text-field>
            <button class="mt-4 mb-4 button"> Sign In </button>
          </form>
        </div>
        <hr class="separationBar">
        <div class="signUp">
          <div class="leftColSignUp">
            Don't have an account?
          </div>
          <div class="rightColSignUp">
            <button class="mt-4 mb-4 button" type="button" @click="goRegister()"> Get Started </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators';
import axios from 'axios';
import router from '@/router';
// import { response } from 'express';

export default {
  name: "LandingView",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      pwd: "",
      message: ""
    }
  },
  validations: {
    email: { required, email },
    pwd: { required }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    pwdErrors() {
      const errors = []
      if (!this.$v.pwd.$dirty) return errors
      !this.$v.pwd.required && errors.push('Password is required.')
      return errors
    },
  },
  methods: {
    // updateId(){
    //   this.$store.state.id_user = this.response.data.id_user;
    //   this.$store.dispatch('updateIdAction');
    // },
    goRegister() {
      router.push('/register');
    },
    async login() {
      let response = await axios.post(`${process.env.VUE_APP_SERVER_TOTAL_PATH}` + "/login",
        {
          "email": this.email,
          "password": this.pwd
        })
      if (this.errors != '') {
        this.$store.state.id_user = response.data.id_user;
        this.$store.dispatch('updateIdAction');
        if (response.data.email && response.data.password) {
          localStorage.setItem('id_user', response.data.id_user);
          router.push('/' + `${response.data.id_user}` + '/home');
        } else {
          this.message = "No se encuentra el usuario";
          this.email = '';
          this.pwd = '';
        }
      }
    },
    resetForm() {
      this.message = '';
    }
  },
};
</script>

<style scoped>
@import url("../assets/css/landing.css");
</style>
