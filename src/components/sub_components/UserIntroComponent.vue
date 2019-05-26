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
            :hexagonSize="hexagonSize"
            :sizeChangeObj="sizeChangeObj"
        ></hexagonBox>
      </div>
    </div>


  </div>
</template>

<script>
  import hexagonBox from '../default_components/HexagonBoxComponent.vue'

  export default {
    name: "UserIntroComponent",
    data:function () {
      return {
        hexagonSize:200,//中间盒子大小，小盒子会跟着大盒子走
        sizeChangeObj:{big:.8,medium:.7,small:.6 },//屏幕宽度缩小后，六边形显示的比例
      }
    },
    mounted(){

    },
    computed:{
    },
    props:['sectionData'],
    components:{
      hexagonBox,
    },



  }
</script>

<style lang="scss" scoped>
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
        height: 85%;
        background-image: url("../../images/top-3200.svg") ;
        background-size:200% ;
        background-repeat: no-repeat;
        background-position: bottom center;
      }
      .bg-bottom{
        width: 100%;
        height: 16%;
        transform:translateY(-1%);
        background-color: #fff;
      }
      @media screen  and (min-width:480px)  and (max-width:767px){
        .bg-top{
          height: 80%;
          background-size:300% ;
        }
        .bg-bottom{
          height: 21%;
        }
      }

      @media screen  and (max-width:479px)  {
        .bg-top{
          height: 70%;
          background-size:400% ;
        }
        .bg-bottom{
          height: 31%;
        }
      }
    }

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