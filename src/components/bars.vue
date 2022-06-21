<template>
  <nav>

    <v-toolbar flat class="topBar d-flex flex-row justify-center align-center">
      <v-toolbar-title class="topBarStyles">
        <span class="font-weight-bold taaskinLogo">Taaskin</span>
      </v-toolbar-title>
    </v-toolbar>

    <div class="d-flex flex-column justify-center align-center leftMenuBar">
      <div class="d-flex flex-column justify-space-around align-center">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#ebe8e8" v-bind="attrs" v-on="on">CREAR LISTA</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card dark>
              <v-toolbar color="#7a7a7a">
                <h2>Crear lista:</h2>
              </v-toolbar>
              <v-card-actions class="justify-center">
                <form class="formSignIn" @submit.prevent="addList()">
                  <v-text-field v-model="list_name" label="Nombre de lista" color="primary" required dark
                    @input="$v.list_name.$touch()" @blur="$v.list_name.$touch()" class="inputSignIn">
                  </v-text-field>
                  <v-text-field v-model="list_descrip" label="Descripción" color="primary" required dark
                    @input="$v.list_descrip.$touch()" @blur="$v.list_descrip.$touch()" class="inputSignIn">
                  </v-text-field>
                  <v-btn text @click="dialog.value = false">Cerrar</v-btn>
                  <v-btn text type="submit">Enviar</v-btn>
                </form>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>

      <div class="bottomBar d-flex flex-row align-center justify-center border1">
        <div class="d-flex flex-row justify-center">
          <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="rgba(255, 255, 255, 0)" v-bind="attrs" v-on="on" @click="validar()">
              <v-icon color="white" class="iconsBottomBar">
                mdi-cog
              </v-icon>
            </v-btn>
          </template>
          <template v-slot>
            <v-card dark>
              <v-toolbar color="#7a7a7a">
                <h2>Ajustes</h2>
              </v-toolbar>
              <v-card-actions class="d-flex flex-column justify-center">
                <form class="formDelete"  @submit.prevent="deleteUsers()">
                  <v-text-field v-if="validar()==true" v-model="userDelete" label="Usuario a eliminar" color="primary" required dark
                    @input="$v.userDelete.$touch()" @blur="$v.userDelete.$touch()" class="inputSignIn">
                  </v-text-field>
                  <v-btn text v-if="validar()==true" type="submit">Eliminar usuario</v-btn>
                </form>
                <a href="/">Cerrar sesión</a>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'topBar',
  mixins: [validationMixin],
  mounted() {

  },
  data: () => ({
    dialog: false,
    list_descrip: '',
    list_name: '',
    unik: ''
  }),
  validations: {
    list_name: { required },
    list_descrip: { required },
  },
  methods: {
    ...mapGetters(["idUser", "typeof"]),
    ...mapState(["typeof"]),
    async addList() {
      let response = await axios.post(`${process.env.VUE_APP_SERVER_TOTAL_PATH}` + "/addList",
        {
          "list_descrip": this.list_descrip,
          "list_name": this.list_name,
          "user": this.$store.state.id_user
        })
      if (this.errors != '') {
        if (response.data.id_list != null) {
          console.log(response.data.id_list);
          this.list_descrip = '';
          this.list_name = '';
          this.unikTransf();
        } else {
          this.list_descrip = '';
          this.list_name = '';
        }
      }
    },
    validar(){
      if(this.$store.getters.typeUser == 'admin'){
        return true;
      } else {
        return false; 
      }
    },
    async deleteUsers(){
      let response = await axios.post(`${process.env.VUE_APP_SERVER_TOTAL_PATH}` + "/deleteUsers",
        {
          "delUser": this.userDelete,
        })
      if (this.errors != '') {
        if (response.data) {
          console.log(response.data);
        } 
      }
    }
  },
}
</script>

<style>
@import url('../assets/css/navbars.css');
</style>