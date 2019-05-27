<template>
  <div class="hexagon-container"
    :style="`width:${size}px;height:${size*1.25}px;`"
       ref="hexagonBox"
  >
    <div class="boxF">
      <div class="boxS">
        <div class="boxT" >
          <a class="overlay" :href="msg.href" target="__blank"  @click="goPageMusic" >
          </a>
          <div class="content-box" :style="`background:#fff;`" >
            <div class="content-box-bg-img"></div>
            <div class="content-box-container"
                 :style="`background-image: url(${msg.img});background-size:${msg.imgSize};background-color:${msg.bgc};`"
            >
              <div class="title" :style="`background-color: ${msg.titleBgc};`" >
                <span :style="`font-size:${size/6}px`">{{msg.title}}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <audio
           ref="musicBox"
           src="http://img.wanghaoranblog.com/blog/Home_FullPage/music/button-1.mp3"
           controls="controls"
           loop="false"
           hidden="true"
    >
    </audio>
  </div>
</template>

<script>
  export default {
    name: "HexagonComponent",
    data:function(){
      return {
        playFlag:false,//鼠标放上音效
        playMusicTime:1000,//鼠标放上音乐间隔
        goPageMusicTime:1500,//点击进入页面音乐间隔
        goPageMusicFlag:false,
      }
    },
    props:["size","msg"],

    mounted(){
      let box = this.$refs.hexagonBox

      box.onmouseover = ()=>{
        this.playFlag = true
        setTimeout(()=>{this.playFlag=false},this.playMusicTime)//1秒内只执行一次
      }//鼠标放上播放音乐

    },
    methods:{
      goPageMusic(){
        this. goPageMusicFlag = true //设置为播放音乐
        setTimeout(()=>{
          this. goPageMusicFlag = false
        },this.goPageMusicTime)//5秒后才能再次播放
      },
    },
    watch:{
      'playFlag':function(newVal){
        if(newVal===true){
          var myAuto = this.$refs.musicBox;
          // console.log(myAuto)
          myAuto.currentTime = 0//设置播放进度为0
            myAuto.play();//播放
          setTimeout(()=>{myAuto.pause()},this.playMusicTime)//多少秒后停止播放
        }
      },
      'goPageMusicFlag':function(newVal){
        if(newVal===true){
          var myAuto = document.getElementById('goPageMusic')
          // console.log(myAuto)
          myAuto.currentTime = 0//设置播放进度为0
          myAuto.play();//播放
          setTimeout(()=>{myAuto.pause()},this.goPageMusicTime)//多少秒后停止播放


        }
      },
    },

  }
</script>

<style lang="scss" scoped>
  .hexagon-container{
    transform:rotate(31deg);
    .boxF,.boxS, .boxT, .overlay
    {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .boxF
    {
      transform: rotate(120deg);
      float: left;
      margin-left: 10px;
      -ms-transform: rotate(120deg);
      -moz-transform: rotate(120deg);
      -webkit-transform: rotate(120deg);
    }
    .boxS
    {
      transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
      -webkit-transform: rotate(-60deg);
    }
    .boxT
    {
      transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
      -webkit-transform: rotate(-60deg);
      background: no-repeat 50% center;
      background-size: 125% auto;
      visibility: visible;
      position: relative;
      .content-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 117%;
        height: 80%;
        background-color: rgba(0,0,0,0);
        transform: rotate(-31deg) translate(-12%,6%) ;
        background-size:100% 100%;
        z-index: -10;


        display: flex;
        justify-content: center;
        align-items: center;
        .content-box-bg-img{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background:url('http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E5%85%AD%E8%BE%B9%E5%BD%A2%E5%8C%85%E8%BE%B9-4.png')
          no-repeat center center;
          background-size:100% 100% ;
          z-index:100;
        }
        .content-box-container{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-repeat:no-repeat;
          background-position:center center;
          background-size:90% 90% ;
          z-index:10;


          .title{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(255,208,103,1);
            opacity:0;
            span{
              color:#686967;
              font-weight:400;
              font-family:'微软雅黑',sans-serif;
            }
          }
        }
      }
    }


    .boxT:hover  .title {
      opacity:1 !important;
    }

    .overlay:hover
    {
      background-color: rgba(0,0,0,0.6);
    }
    .boxT:hover .overlay
    {
      display: block;
      z-index: 200;
      cursor:pointer;
    }
  }
</style>