<template>
    <div class="containerRegister">
        <div class="signUpTitle mt-5">
            <img src="../assets/img/Logo.png" class="imgLogoSize me-5">
            Sign Up!
        </div>
        <div class="signUpForms mt-5">
            <form class="formSignUp" @submit.prevent="register()">
            <v-text-field 
                v-model="email" 
                :error-messages="emailErrors" 
                label="E-mail" 
                required dark
                @input="$v.email.$touch()" 
                @blur="$v.email.$touch()" 
                class="inputSignUp">
            </v-text-field>
            <v-text-field 
                v-model="nick" 
                :error-messages="nickErrors" 
                label="Nombre de usuario"  
                required dark
                @input="$v.nick.$touch()" 
                @blur="$v.nick.$touch()" 
                class="inputSignUp">
            </v-text-field>
            <v-text-field 
                v-model="first_name" 
                :error-messages="fn_Errors" 
                label="Nombre" 
                required dark
                @input="$v.first_name.$touch()" 
                @blur="$v.first_name.$touch()" 
                class="inputSignUp">
            </v-text-field>
            <v-text-field 
                v-model="surname" 
                label="Apellidos"
                dark
                class="inputSignUp">
            </v-text-field>
            <v-text-field 
                v-model="pwd" 
                :error-messages="pwdErrors" 
                label="Contraseña" 
                type="password" 
                required dark
                @input="$v.pwd.$touch()" 
                @blur="$v.pwd.$touch()" 
                class="inputSignUp">
            </v-text-field>
            <button class="mt-4 mb-4 button"> Register </button>
            </form>
            <span @click="goHome()" class="divLink mt-2"><a class="linkGoBack">I already have an account</a></span>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, helpers } from 'vuelidate/lib/validators';
import axios from 'axios';
import router from '@/router';
const regexLastName = helpers.regex('regexLastName',/(^[a-záéíóúñ]+)?$/i);


export default {
    name: 'registerView',
    mixins: [validationMixin],
    data(){
        return{
            email: '',
            pwd: '',
            nick: '',
            first_name: '',
            surname: '',
            message: '',
        }
    },
    validations: {
        email: { required, email },
        pwd: { required },
        nick: { required, regexLastName },
        first_name: { required, regexLastName },
        surname : { regexLastName }
    },
    methods: {
        goHome() {
            router.push('/');
        },
        async register() {
            let response = await axios.post(`${process.env.VUE_APP_SERVER_TOTAL_PATH}` + "/register",
            {
                "email": this.email,
                "password": this.pwd,
                "nick": this.nick,
                "first_name": this.first_name,
                "surname": this.surname
            })
            if (response){
                console.log(response.data)
            }
            if (this.errors != '') {
                if (response.data.id_user != null) {
                    router.push('/' + `${response.data.id_user}` + '/home');
                } else {
                    this.message = "No se puedo completar el registro";
                    this.email = '';
                    this.pwd = '';
                    this.nick  = '',
                    this.first_name = '',
                    this.surname = ''
                }
            }
        }
    },
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Debe ser un e-mail válido!')
            !this.$v.email.required && errors.push('El e-mail es obligatorio.')
            return errors
        },
        pwdErrors() {
            const errors = []
            if (!this.$v.pwd.$dirty) return errors
            !this.$v.pwd.required && errors.push('La contraseña es boligatoria.')
            return errors
        },
        nickErrors() {
            const errors = []
            if (!this.$v.nick.$dirty) return errors
            !this.$v.nick.required && errors.push('Se require un nick.')
            !this.$v.nick.required && errors.push('Solo admite valores alfabéticos!')
            return errors
        },
        fn_Errors() {
            const errors = []
            if (!this.$v.first_name.$dirty) return errors
            !this.$v.first_name.required && errors.push('Al menos el nombre es obligatorio.')
            !this.$v.nick.required && errors.push('Solo admite valores alfabéticos!')
            return errors
        }
    }
}
</script>

<style scoped>
@import url('../assets/css/register.css');
@import url('../assets/css/general.css');
</style>
