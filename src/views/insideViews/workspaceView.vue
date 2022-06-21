<template>
  <div class="containerAll">
    <div class="topRowInnerView">
        <div class="leftContainer">
          <div class="Workspaces">
            <h3 color="#ebe8e8" class="fuenteArriba"> Bienvenido usuario&nbsp;{{ this.$store.getters.nickUser }}!</h3>
          </div>
        </div>
    </div>

    <v-divider inset class="me-16"></v-divider>
    
    <div class="bottomRowInnerView">
      <!-- <button>{{$store.state.listDescrip}}</button>
      <button>{{$store.state.listName}}</button> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters, mapState} from 'vuex';

export default {
  name: "FirstInnerView",
  mounted (){
    // let response = axios.post(`${process.env.VUE_APP_SERVER_TOTAL_PATH}` + "/getLists",
    //   {
    //     "user": this.$store.state.id_user
    //   })
    //   if (response.data.list_nom) {
    //     this.updateListNameAction(response.data.list_nom);
    //     this.updateListDescripAction(response.data.list_descrip);
    //   } else {
    //     this.list_descrip = '';
    //   }
  },
  methods: {
    ...mapGetters(['listDescrip', 'listName']),
    ...mapState(['listDescrip', 'listName'])
  }
};
</script>

<style>
@import url("../../assets/css/innerViews/firstInnerView.css");
</style>