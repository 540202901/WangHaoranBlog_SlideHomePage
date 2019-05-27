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
        hexagonSizeNum:0,//中间盒子大小记录值
      }
    },
    computed:{
      hexagonCenterSize(){ return this.hexagonSizeNum },//中间盒子大小
      hexagonMediumSize(){ return this.hexagonCenterSize/2 },//周围中等盒子大小
      loadingOver() { return this.$store.state.loadingOver },//页面是否加载完成，加载完成那么就开始显示页面动画
      hexagonSize() { return this.showHexagonInit.hexagonSize },//设置最大的盒子尺寸
      sizeChangeObj() { return this.showHexagonInit.sizeChangeObj },//屏幕改变后尺寸显示比例对象

      hexagonOpacity() { return this.showHexagonInit.hexagonOpacity },//六边形显示出来的百分比
      hexagonShowTime() { return this.showHexagonInit.hexagonShowTime },//显示中间六边形的时间
      MHSTime() { return this.showHexagonInit.MHSTime },//显示中等六边形的时间
      MHSIntervalTime() { return this.showHexagonInit.MHSIntervalTime },//显示中等六边形间隔
      initFlag() { return this.showHexagonInit.initFlag },//是否初始化完毕 完毕就修改一下过渡动画时间样式
      initTime() { return this.showHexagonInit.initTime },//初始化所需时间
    },
    components:{hexagon},
    props:['hexagonCenter','hexagonList','showHexagonInit'],
    methods:{
      hexagonShow(){
        setTimeout(()=>{
          this.centerHexagonShow()//显示中间六边形
        },this.hexagonShowTime )
        setTimeout(()=>{
          this.mediumHexagonShow()//开始显示中等
        },this.MHSTime )//显示中等六边形
        setTimeout(()=>{this.initFlag = true},this.initTime)//重新设置过渡动画时间
      },//显示六边形组合的方法
      centerHexagonShow(){
        this.$refs.hexagonCenter.$el.style.opacity = this.hexagonOpacity//显示中间六边形
      },//中间大六边形显示
      mediumHexagonShow(){
        let sleepTime = 0
        for(let key in this.$refs){
          let hexagon = this.$refs[key][0]
          if(key.includes('mediumHexagon')){//如果是小六边形
            sleepTime += this.MHSIntervalTime//显示时间间隔
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

    watch:{
      'loadingOver':function (newVal) {
        if (newVal) {
          this.hexagonShow()//显示所有六边形
          window.onresize = ()=>{this.setBigSize()}//监听屏幕宽度改变事件来调整盒子大小
          this.setBigSize()//初始化盒子大小
        }
      }//如果页面加载完成，那么开始显示六边形盒子组
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