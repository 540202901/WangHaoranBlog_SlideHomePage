<template>
  <div class="page-container" :style="`background-color:${section.bgc};`">
    <!--背景之iframe背景-->
    <IframeBGComponent
        class="z100"
        v-if="section.bgType === 'iframeBG' "
        :src="section.bgSrc"
    ></IframeBGComponent>
    <!--背景之图片背景-->
    <div class="bg-img z100"
         v-if="section.bgType === 'img' "
         :style="`background:url('${section.bgSrc}') bottom center; `"
    ></div>





    <!--页面中的内容-->
    <div class="page-main" >
      <!--如果是首页,那么就渲染首页组件-->
      <userIntroComponent :sectionData="section.subCmtData" v-if="section.subCmtType === 'home' "></userIntroComponent>
      <!--如果是页脚,那么就渲染页脚组件-->
      <footerPageComponent :sectionData="section.subCmtData" v-if="section.subCmtType === 'footer' "></footerPageComponent>


      <!--外接页面iframe-->
      <IframeBGComponent
          v-if="section.bgType === 'iframe' "
          :src="section.bgSrc"
      ></IframeBGComponent>
    </div>






  </div>
</template>

<script>
  //每个页面的组件
  import IframeBGComponent from './background_components/IframeBGComponent.vue'

  //首页组件
  import userIntroComponent from './sub_components/UserIntroComponent.vue'
  //页脚组件
  import footerPageComponent from './sub_components/FooterPageComponent.vue'


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
      IframeBGComponent,//背景图组件
      userIntroComponent,//首页组件
      footerPageComponent,//页脚组件
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