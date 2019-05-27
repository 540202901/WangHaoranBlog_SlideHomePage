<template>
  <div class="app-container" >
    <!--整屏切换组件-->
    <fullPageComponent></fullPageComponent>
    <div class="loadPage" v-if="!loadingOver"><h1>正在加载页面</h1></div>
  </div>
</template>

<script>
  //整屏切换组件
  import fullPageComponent from './components/FullPageComponent.vue'

  export default {
    name: "app",
    data:function(){
      return {
        loadingTime:100,//加载页面所需等待时间
      }
    },
    components:{
      fullPageComponent,
    },
    computed:{
      loadingOver(){ return this.$store.state.loadingOver },//是否开始显示页面标识符
    },
    mounted(){
      setTimeout(()=>{ this.$store.commit('loadIsOver') },this.loadingTime)//加载内容页结束，开始显示页面
    },

  }
</script>

<style lang="scss" scoped>
  .app-container{
    background-color: black;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;


    /*等待加载的页面*/
    .loadPage{
      width: 100%;
      height: 100%;
      background-color: black;
      color:white;
      z-index:10000;
    }
  }
</style>