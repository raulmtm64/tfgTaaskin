import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id_user: ''
  },
  getters: {
    idUser ( state ){
      return `${state.id_user}`;
    },
  },
  mutations: {
    updateId( state, obj ){
      state.id_user = obj;
    }
  },
  actions: {
    updateIdAction( context ){
      context.commit('updateId');
    }
  },
  modules: {
  }
})
