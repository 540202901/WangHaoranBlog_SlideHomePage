import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import app from './app.vue'
import './css/index.scss'


import store from './store.js'




var vm = new Vue({
  el:'#app',
  render:c => c(app),
  store,
});