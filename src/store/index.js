import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id_user: '',
    nick: '',
    typeof: '',
    listDescrip: '',
    listName: ''
  },
  getters: {
    idUser: state => state.id_user,
    nickUser: state => state.nick,
    typeUser: state => state.typeof,
    listName: state => state.listName,
    listDescrip: state => state.listDescrip
  },
  mutations: {
    mutUpdateId( state, obj ){
      this.state.id_user = obj;
    },
    mutUpdateNick( state, obj ){
      this.state.nick = obj;
    },
    mutUpdateType( state, obj ){
      this.state.typeof = obj;
    },
    mutListNameUpdate( state, obj ){
      this.state.listName = obj;
    },
    mutListDescripUpdate( state, obj ){
      this.state.listDescrip = obj;
    }
  },
  actions: {
    updateIdAction({commit}, obj){
      commit('mutUpdateId', obj);
    },
    updateNickAction({commit}, obj){
      commit('mutUpdateNick', obj);
    },
    updateTypeAction({commit}, obj){
      commit('mutUpdateType', obj);
    },
    updateListNameAction({commit}, obj){
      commit('mutListNameUpdate', obj);
    },
    updateListDescripAction({commit}, obj){
      commit('mutListDescripUpdate', obj);
    },
  },
  modules: {
  }
})
