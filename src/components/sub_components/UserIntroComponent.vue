<template>
  <div class="user-intro-container">
    <!--背景图片-->
    <div class="user-bg">
      <div class="bg-top"></div>
      <div class="bg-bottom">

      </div>
    </div>

    <!--导航栏-->
    <div class="combNav">
      <div class="hexagonBox-container">
        <hexagonBox
            :hexagonCenter="sectionData.hexagonCenter"
            :hexagonList="sectionData.hexagonList"
            :showHexagonInit="showHexagonInit"
        ></hexagonBox>
      </div>
    </div>

    <!--博客文章链接-->
    <transition>
      <blogArticleContainer
          v-if="showBlogArticleFlag"
          :articleTitle="sectionData.articleTitle"
          :articleList="sectionData.articleList"
          :articleTitleHref="sectionData.articleTitleHref"
      ></blogArticleContainer>
    </transition>

  </div>
</template>

<script>
  import hexagonBox from '../default_components/HexagonBoxComponent.vue'
  import blogArticleContainer from './BlogArticalesComponent.vue'

  export default {
    name: "UserIntroComponent",
    data:function () {
      return {
        //博客文章渲染
        showBlogArticleFlag:false,//是否显示博客文章列表
        showBlogArticleTime:2500,//显示博客文章延迟的时间
        //六边形盒子组渲染
        showHexagonInit:{
          hexagonSize:200,//中间盒子大小，小盒子会跟着大盒子走
          sizeChangeObj:{big:.8,medium:.7,small:.6 },//屏幕宽度缩小后，六边形显示的比例

          hexagonOpacity:.55,//六边形显示出来的百分比
          hexagonShowTime:2000,//显示中间六边形的时间
          MHSTime:500,//显示中等六边形的时间
          MHSIntervalTime:200,//显示中等六边形间隔
          initFlag : false,//是否初始化完毕 完毕就修改一下过渡动画时间样式
          initTime:this.hexagonShowTime,//初始化所需时间
        },//六边形组合显示配置

      }
    },

    computed:{
      loadingOver(){ return this.$store.state.loadingOver },//是否显示导航栏
    },
    props:['sectionData'],

    watch:{
      'loadingOver':function (newVal) {
        if (newVal) {
          setTimeout(()=>{
            this.showBlogArticleFlag = true//若干秒后显示文章列表
          },this.showBlogArticleTime)
        }
      },//如果页面加载完成，那么开始显示文章列表
    },

    components:{
      hexagonBox,blogArticleContainer,
    },



  }
</script>

<style lang="scss" scoped>
  .v-enter,.v-leave-to{
    opacity:0;
    transform:translateY(150px);
  }
  .v-enter-active,
  .v-leave-active{
    transition:all 1s ease;
  }



  .user-intro-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;


    .user-bg{
      width: 100%;
      height: 100%;
      position: absolute;
      .bg-top{
        width: 100%;
        height: 100%;
        background-image: url("../../images/top-3200.svg") ;
        background-size:200% ;
        background-repeat: no-repeat;
        background-position: bottom center;
      }
      .bg-bottom{
        width: 100%;
        /*height: 21%;*/
        transform:translateY(-1%);
        background-color: #fff;
      }
      @media screen  and (min-width:480px)  and (max-width:999px){
        .bg-top{
          background-size:300% ;
          height: 70%;
        }
        .bg-bottom{
          height: 31%;
        }
      }

      @media screen  and (max-width:479px)  {
        .bg-top{
          background-size:400% ;
          height: 70%;
        }
        .bg-bottom{
          height: 31%;
        }
      }
    }

    /*蜂巢导航栏*/
    .combNav{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-image:
          linear-gradient(45deg,rgba(255,255,255,.1),rgba(125,125,125,.1),rgba(255,255,255,.1)),
          linear-gradient(135deg,rgba(255,255,255,.1),rgba(125,125,125,.1),rgba(255,255,255,.1));
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .hexagonBox-container{
        width: 36%;
        height: 46%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform:translate(-2%,-25%);
      }



    }




  }
</style>