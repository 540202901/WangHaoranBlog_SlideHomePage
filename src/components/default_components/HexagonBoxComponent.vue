<template>
  <div class="hexagon-box-container">
      <hexagon
          class="button-center"
          :size="hexagonCenterSize"
          ref="hexagonCenter"
          :msg="hexagonCenter"
          :class="initFlag?'update-amt-time':''"
      ></hexagon>

      <hexagon
          v-for="(item,i) in hexagonList" :key="i"
          class="button"
          :size="hexagonMediumSize"
          :msg="item"
          :ref="'mediumHexagon'+i"
          :class="initFlag?'update-amt-time':''"
      ></hexagon>

    <audio
        id="goPageMusic"
        src="http://img.wanghaoranblog.com/blog/Home_FullPage/music/button-4.mp3"
        controls="controls"
        loop="false"
        hidden="true"
    >
    </audio>
  </div>
</template>

<script>
  import hexagon from './HexagonComponent.vue'
  export default {
    name: "HexagonBoxComponent",
    data:function(){
      return {
        hexagonOpacity:.55,//六边形显示出来的百分比
        hexagonSizeNum:0,
        initFlag : false,//是否初始化完毕 完毕就修改一下过渡动画时间样式
      }
    },
    computed:{
      hexagonCenterSize(){ return this.hexagonSizeNum },//中间盒子大小
      hexagonMediumSize(){ return this.hexagonCenterSize/2 }//周围中等盒子大小
    },
    components:{hexagon},
    props:['hexagonCenter','hexagonList','hexagonSize','sizeChangeObj'],
    mounted(){
      this.hexagonShow()//显示所有六边形
      window.onresize = ()=>{this.setBigSize()}//监听屏幕宽度改变事件来调整盒子大小
      this.setBigSize()//初始化盒子大小
    },
    methods:{
      hexagonShow(){
        setTimeout(()=>{
          this.centerHexagonShow()//显示中间六边形

        },3000 )
        setTimeout(()=>{
          this.mediumHexagonShow()
        },1300 )//显示中等六边形
        setTimeout(()=>{this.initFlag = true},3500)//重新设置过渡动画时间
      },//显示六边形组合的方法
      centerHexagonShow(){
        this.$refs.hexagonCenter.$el.style.opacity = this.hexagonOpacity//显示中间六边形
      },//中间大六边形显示
      mediumHexagonShow(){
        let sleepTime = 0
        for(let key in this.$refs){
          let hexagon = this.$refs[key][0]
          if(key.includes('mediumHexagon')){//如果是小六边形
            sleepTime += 200
            setTimeout(()=>{
              hexagon.$el.style.opacity = this.hexagonOpacity;
            },sleepTime)
          }
        }
      },//显示中等六边形
      //================计算盒子大小方法
      setBigSize(){//根据屏幕尺寸和传入的比例对象来计算盒子大小
        this.hexagonSizeNum = this.hexagonSize//设置显示大小用的值

        let width = document.getElementsByTagName('html')[0].offsetWidth//获取屏幕宽度
        if (width >= 768 && width <= 1000) {
         return this.hexagonSizeNum = this.hexagonSize  * this.sizeChangeObj.big
        }
        if (width >= 480 && width < 768){
          return this.hexagonSizeNum = this.hexagonSize  * this.sizeChangeObj.medium
        }
        if (width < 479){
          return this.hexagonSizeNum = this.hexagonSize  * this.sizeChangeObj.small
        }

      },//设置大盒子大小

    },

  }
</script>

<style lang="scss" scoped>
  .hexagon-box-container{
    position: absolute;
    display: flex;
    justify-content:center;
    align-items:center;

    .button-center,.button{
      opacity:0;
      transition:all 3s ;
    }

    .update-amt-time{
      transition:all .5s ;
    }


    .button{
      position: absolute;
    }
    .button:nth-child(2){
      left: -51%;
      top: -9%;
    }
    .button:nth-child(3){
      left: 25%;
      top: -43%;
    }
    .button:nth-child(4){
      left: 103%;
      top: -8%;
    }
    .button:nth-child(5){
      left: 98%;
      top: 65%;
    }

    .button:nth-child(6){
      left: 25%;
      top: 92%;
    }

    .button:nth-child(7){
      left: -49%;
      top: 61%;
    }

  }
</style>