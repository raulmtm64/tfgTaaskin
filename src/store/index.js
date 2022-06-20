import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id_user: '1'
  },
  getters: {
    idUser: state => state.id_user
  },
  mutations: {
    updateId( state ){
      state.id_user = state;
    }
  },
  actions: {
    updateIdAction( context , obj){
      context('updateId', obj);
    }
  },
  modules: {
  }
})
