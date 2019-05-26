<template>
  <div class="page-container" :style="`background-color:${section.bgc};`">
    <IframeBGComponent
        class="z100"
        v-if="section.bgType === 'iframeBG' "
        :src="section.bgSrc"
    ></IframeBGComponent>

    <div class="bg-img z100"
         v-if="section.bgType === 'img' "
         :style="`background:url('${section.bgSrc}') bottom center; `"
    ></div>


    <!--内容页面-->
    <div class="page-main">
      <userIntroComponent :sectionData="section.subCmtData" v-if="section.subCmtType === 'home' "></userIntroComponent>
    </div>


  </div>
</template>

<script>
  import IframeBGComponent from './background_components/IframeBGComponent.vue'

  //角色信息展示页组件
  import userIntroComponent from './sub_components/UserIntroComponent.vue'


  export default {
    name: "page",
    data:function(){
      return {
      }
    },
    mounted(){
    },
    props:['section','subComponent'],
    components:{
      IframeBGComponent,
      userIntroComponent,//传入的子组件
    },
  }
</script>

<style lang="scss" scoped>
  .page-container{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
    .z100{
      z-index:100;
    }

    .bg-img{
      width: 100%;
      height: 100%;
      background-size: 100% 100% !important;
      @media screen  and (min-width:480px)  and (max-width:767px){
        background-size: 150% 100% !important;
      }

      @media screen  and (max-width:479px)  {
        background-size: 200% 100% !important;
      }
    }



    .page-main{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;
    }





  }
</style>