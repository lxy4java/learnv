// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './myApp'
import xyScroll from '../../directives/xyscroll.js'
import Vuex from 'vuex'

Vue.use(Vuex);
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    showallflag: false,
    showmyflag: false,
  },
  mutations: {
    show_all(state, flag) {
      state.showallflag = flag;
    },
    show_my(state, flag) {
      state.showmyflag = flag;
    }
  },
  actions: {
    setAll({commit}, flag) {
      commit('show_all', flag);
    },
    setMy({commit}, flag) {
      commit('show_my', flag);
    }
  },
  getters: {
    getAll: (state) => state.showallflag,
    getMy: (state) => state.showmyflag
  }
})


new Vue({
  el: '#myapp',
  template: '<App/>',
  components: { App },
  directives: { xyScroll },
  store,
})
