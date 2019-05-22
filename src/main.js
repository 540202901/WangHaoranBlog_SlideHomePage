import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import app from './app.vue'


var store = new Vuex.Store({
  state:{
    //这里可以当成组件中的data  this.$store.state.变量名
    count:0,//自定义的变量
  },
  mutations:{
    //这里可以当成组建中的methods  this.$store.commit('方法名',自定义参数)
    //第一个参数state是默认数据参数，必须传递，
    //     方法名(state,自定义参数){
    //       state.变量名++
    //     }
  },
  getters:{
    //这里类似管道修饰符，修饰数据用的 this.$store.getters.optCount
    //  optCount:function(state){
    //     return '最新count值是:' + state.count
    //   }
  }
})



var vm = new Vue({
  el:'#app',
  render:c => c(app),
  store,
});