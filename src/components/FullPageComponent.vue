<template>
  <!--所有页面渲染-->
  <div class="full-page-container"  ref="app" >
    <!--所有页面渲染-->
    <div  v-for="(item,i) in sections" :key="item.id" :ref="item.id"
          :class="[sectionClass]"
    >
      <pageComponent :section="item" ></pageComponent>
    </div>


    <!--页面的导航栏-->
    <transition>
      <pageNavComponent
          v-if="pageNavShowFlag"
          :sections="sections"
          :pageNum="page-1"
          @change-page-by-index="changePageByIndex"
      ></pageNavComponent>
    </transition>



  </div>
</template>

<script>
  import pageComponent from './PageComponent.vue'//多个整屏页面组件
  import pageNavComponent from './PageNavComponent.vue'//整屏切换导航


  export default {
    name: "FullPageComponent",
    data:function(){
      return {
        page:1,//默认显示第几页
        // pageArr:[],//用来保存页面的数组
        pageNavShowFlag:false,//是否显示右侧切换页面导航栏
        changePageFlag:true,//是否可以继续切换页面,根据changePageTime设置多少秒钟最多切换一次
        sections:[//图片页面展示 bgType: 背景样式  img 是背景图片，iframeBG说明是内嵌其他页面的背景
          {id:"page1", bgType:'iframeBG', bgSrc:'http://www.wanghaoranblog.com/resume/earth.html',
            bgc:'black',
            subCmtType:'home',//子组件
            subCmtData:{
              hexagonCenter:{
                title:'进入主页',
                titleBgc:'black',
                img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%A0%91%E6%9E%97.jpg',
              },
              hexagonList:[
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/1c0827bb-profile-thum.png',
                  title:'个人简历',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'http://www.wanghaoranblog.com/resume/',
                  bgc:'black',
                },
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%9C%AA%E5%AE%8C%E5%BE%85%E7%BB%AD.png',
                  title:'未完待续',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'',
                  bgc:'black',
                },
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%9C%AA%E5%AE%8C%E5%BE%85%E7%BB%AD.png',
                  title:'未完待续',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'',
                  bgc:'black',
                },
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%9C%AA%E5%AE%8C%E5%BE%85%E7%BB%AD.png',
                  title:'未完待续',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'',
                  bgc:'black',
                },
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%9C%AA%E5%AE%8C%E5%BE%85%E7%BB%AD.png',
                  title:'未完待续',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'',
                  bgc:'black',
                },
                {
                  img:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E6%9C%AA%E5%AE%8C%E5%BE%85%E7%BB%AD.png',
                  title:'未完待续',
                  titleBgc:'rgba(255,208,103,1)',
                  imgSize:'50% 60%',
                  href:'',
                  bgc:'black',
                },
              ],
              articleTitle:'欢迎来到王浩然的博客',
              articleTitleHref:'wanghaoranblog.com',
              articleList:[
                { title:'随便一个链接',href:'' },
                { title:'牛逼了牛逼了牛逼了',href:'' },
                { title:'你的剑就是我的剑圣',href:'' },
              ],
            },//子组件数据
          },
          {id:"page2", bgType:'iframe', bgSrc:'http://wanghaoranblog.com/resume/',
            bgc:'black',
            subCmtType:'none',//子组件
            subCmtData:{
            },//子组件数据
          },
          {id:"page3", bgType:'img', bgSrc:'http://img.wanghaoranblog.com/blog/Home_FullPage/img/%E5%86%B0%E4%B8%8E%E7%81%AB%E4%B9%8B%E6%AD%8C.jpg',
            bgc:'black',
            subCmtType:'footer',//子组件为页脚
            subCmtData:{
              recordNVarchar:'Copyright © 生活经验记录 | V.1.0.0 |  辽ICP备19007394号',
              blogRollList:[
                { title:'七牛云', href:"https://www.qiniu.com/"},
                { title:'阿里云', href:"https://www.aliyun.com/"},
                { title:'Element UI', href:"https://element.eleme.cn/2.0/#/zh-CN"},
                { title:'chart.js', href:"https://www.chartjs.org/"},
                { title:'tweenmax.js', href:"https://www.tweenmax.com.cn/"},
                { title:'animate.css', href:"https://daneden.github.io/animate.css/"},
                { title:'Bootstrap', href:"http://www.bootcss.com/"},
                { title:'Ruan Yifeng', href:"http://www.ruanyifeng.com/home.html"},
              ],
            },//子组件数据
          },
        ],//渲染页面的数组
        changePageTime:1000,//每个页面的动画时间和切换间隔时间
        sectionClass:' section pt-page ',//页面默认样式
        amtIndexArr:[
          // {page:1,downPage:36},
          // {page:2,downPage:36},
          // {page:3,downPage:36,upPage:36},
          // {page:4,downPage:36,upPage:36},
        ],//每一页切换执行的动画
        defaultAmt:{downPage:31,upPage:30},
      }
    },


    mounted(){
      this.pageArr = this.getPageArr()//抓取所有pageArr,page:第几页，ref:盒子对象
      this.initHome()//初始化页面
      this.watchEvent()//监听事件

    },



    computed:{
      loadingOver(){ return this.$store.state.loadingOver },//是否显示导航栏
      maxPageNum(){ return this.sections.length },//最大页数 根据sections数组长度计算而来
      browser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
        if (isIE) {
          var IE5 = IE55 = IE6 = IE7 = IE8 = false;
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          IE55 = fIEVersion == 5.5;
          IE6 = fIEVersion == 6.0;
          IE7 = fIEVersion == 7.0;
          IE8 = fIEVersion == 8.0;
          if (IE55) {
            return "IE55";
          }
          if (IE6) {
            return "IE6";
          }
          if (IE7) {
            return "IE7";
          }
          if (IE8) {
            return "IE8";
          }
        }//isIE end
        if (isFF) {
          return "FF";
        }
        if (isOpera) {
          return "Opera";
        }
      },//判断浏览器
      downPageClass(){
        var index = this.defaultAmt.downPage//设置默认动画样式
        this.amtIndexArr.forEach((item,i)=>{
          if (item.page === this.page && item.downPage){//如果页面切换动画有记录
            index = item.downPage //设置为切换动画记录样式
            return true
          }
        })
        return this.changePageClass(index)
      },//向下滚动样式
      upPageClass(){
        var index = this.defaultAmt.upPage//设置默认动画样式
        this.amtIndexArr.forEach((item,i)=>{
          if (item.page === this.page  && item.upPage){//如果页面切换动画有记录
            index = item.upPage //设置为切换动画记录样式
            return true
          }
        })
        return this.changePageClass(index)
      },//向上滚动样式
    },

    methods:{
      initHome(){
        var pageNum = this.page//当前显示第几页

        //获取page = 当前pageNum的盒子，并让其显示
        var pageEx = this.pageArr.filter(item=>{
          if(item.page === pageNum){
            return true
          }
        })
        //将其显示
        pageEx[0].ref.style.opacity = 1;
        pageEx[0].ref.style.zIndex = 100
      },//初始化页面 page是几就显示第几页
      watchEvent(){
        var app = this.$refs.app
        app.onmousewheel = (event) => {
          this.changePageAnimation(event)
        }
        app.addEventListener('DOMMouseScroll', (event) =>{
          this.changePageAnimation(event)
        }, false)
      },//监听各种事件,有鼠标滑轮事件,点击事件,手机屏幕手指滑动事件
      getPageArr(){
        var refs = this.$refs
        var pageArr = []
        let i = 1;
        for(key in refs){
          if (key.includes('page')){//如果是page页面
            pageArr.push({page:i++,ref:refs[key][0]})
          }
        }
        return pageArr
      },//获取所有页面的数组


      changePageAnimation(event){
        if (this.changePageFlag) {//能继续切换才能切换,3秒内只能切换一次
          //获取滚轮方向 1向下，-1向上
          let direction = this.getDirection(event)
          //如果是向下翻页,就执行向下方法,否则执行向上方法
          if(direction === 1)
            this.downPage()
          else
            this.upPage()
        }
        this.changePageFlag = false;//3秒内禁止再次切换页面,用watch监听新值,
        // 3秒后切换为true,重新赋值false不会继续出发watch
      },//切换页面
      downPage(){
        let pageNum = this.page//获取当前页
        if (pageNum < this.maxPageNum){
          this.page++ //如果小于最大页数，那么就+1,否则不加
          //如果小于最大页数，那么就执行切换动画
          this.changePageFn(pageNum,this.downPageClass,1)
        }
      },//向下翻页
      upPage(){
        let pageNum = this.page//获取当前页
        if (pageNum > 1){
          this.page-- //如果小于最大页数，那么就+1,否则不加
          //如果小于最大页数，那么就执行切换动画
          this.changePageFn(pageNum,this.upPageClass,-1)
        }
      },//向上翻页
      changePageFn(pageNum,CPClass,addPageNum){
        this.pageArr.forEach((item,i)=>{//循环所有页面
          if(item.page === pageNum){
            let outPageNum = i //获取当前页面数
            let inPageNum = i+addPageNum  //获取即将要切换的 页面数
            //调用切换方法
            this.changePageBegin(inPageNum,outPageNum,CPClass)
            return true//退出foreach循环
          }
        })
      },//切换页面的方法

      changePageBegin(inPageNum,outPageNum,CPClass){
        let currentPageEx = this.pageArr[outPageNum].ref//获取当前页面
        let nextPageEx = this.pageArr[inPageNum].ref//获取即将要切换的 页面
        //执行切换方法
        this.setAnimation(currentPageEx,nextPageEx,
          CPClass.outClass,
          CPClass.inClass,
        )
      },//切换页面的方法 最终执行


      setAnimation(CPage,NPage,CAmt,NAmt){

        NPage.style.opacity = 1//下一页显示
        NPage.classList = NAmt;
        CPage.classList = CAmt;

        setTimeout(()=>{
          CPage.style.opacity = 0//当前页隐藏
          CPage.style.zIndex = 1
          NPage.style.zIndex = 100
          NPage.classList = this.sectionClass;//初始化屏幕样式
          CPage.classList = this.sectionClass;//初始化屏幕样式
        },this.changePageTime)

      },//给切换页面设置动画

      getDirection(event){
        if(this.browser === 'FF'){//如果是火狐浏览器
          return event.detail > 0 ? 1 : -1
        }else {
          return event.wheelDelta < 0 ? 1 : -1
        }



      },//获取滚轮方向值

      changePageClass(num){
        var animation = this.getAnimation(num)
        return {
          outClass:this.sectionClass + animation.outClass,
          inClass:this.sectionClass + animation.inClass,
        }
      },//根据编号设置切换页面样式
      getAnimation(animation){
        var outClass = ''
        var inClass = ''
        switch( animation ) {
          case 1:
            outClass = 'pt-page-moveToLeft';
            inClass = 'pt-page-moveFromRight';
            break;
          case 2:
            outClass = 'pt-page-moveToRight';
            inClass = 'pt-page-moveFromLeft';
            break;
          case 3:
            outClass = 'pt-page-moveToTop';
            inClass = 'pt-page-moveFromBottom';
            break;
          case 4:
            outClass = 'pt-page-moveToBottom';
            inClass = 'pt-page-moveFromTop';
            break;
          case 5:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromRight pt-page-ontop';
            break;
          case 6:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromLeft pt-page-ontop';
            break;
          case 7:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromBottom pt-page-ontop';
            break;
          case 8:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromTop pt-page-ontop';
            break;
          case 9:
            outClass = 'pt-page-moveToLeftFade';
            inClass = 'pt-page-moveFromRightFade';
            break;
          case 10:
            outClass = 'pt-page-moveToRightFade';
            inClass = 'pt-page-moveFromLeftFade';
            break;
          case 11:
            outClass = 'pt-page-moveToTopFade';
            inClass = 'pt-page-moveFromBottomFade';
            break;
          case 12:
            outClass = 'pt-page-moveToBottomFade';
            inClass = 'pt-page-moveFromTopFade';
            break;
          case 13:
            outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
            inClass = 'pt-page-moveFromRight';
            break;
          case 14:
            outClass = 'pt-page-moveToRightEasing pt-page-ontop';
            inClass = 'pt-page-moveFromLeft';
            break;
          case 15:
            outClass = 'pt-page-moveToTopEasing pt-page-ontop';
            inClass = 'pt-page-moveFromBottom';
            break;
          case 16:
            outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
            inClass = 'pt-page-moveFromTop';
            break;
          case 17:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromRight pt-page-ontop';
            break;
          case 18:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromLeft pt-page-ontop';
            break;
          case 19:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromBottom pt-page-ontop';
            break;
          case 20:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromTop pt-page-ontop';
            break;
          case 21:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-scaleUpDown pt-page-delay300';
            break;
          case 22:
            outClass = 'pt-page-scaleDownUp';
            inClass = 'pt-page-scaleUp pt-page-delay300';
            break;
          case 23:
            outClass = 'pt-page-moveToLeft pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
          case 24:
            outClass = 'pt-page-moveToRight pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
          case 25:
            outClass = 'pt-page-moveToTop pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
          case 26:
            outClass = 'pt-page-moveToBottom pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
          case 27:
            outClass = 'pt-page-scaleDownCenter';
            inClass = 'pt-page-scaleUpCenter pt-page-delay400';
            break;
          case 28:
            outClass = 'pt-page-rotateRightSideFirst';
            inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
            break;
          case 29:
            outClass = 'pt-page-rotateLeftSideFirst';
            inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
            break;
          case 30:
            outClass = 'pt-page-rotateTopSideFirst';
            inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
            break;
          case 31:
            outClass = 'pt-page-rotateBottomSideFirst';
            inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
            break;
          case 32:
            outClass = 'pt-page-flipOutRight';
            inClass = 'pt-page-flipInLeft pt-page-delay500';
            break;
          case 33:
            outClass = 'pt-page-flipOutLeft';
            inClass = 'pt-page-flipInRight pt-page-delay500';
            break;
          case 34:
            outClass = 'pt-page-flipOutTop';
            inClass = 'pt-page-flipInBottom pt-page-delay500';
            break;
          case 35:
            outClass = 'pt-page-flipOutBottom';
            inClass = 'pt-page-flipInTop pt-page-delay500';
            break;
          case 36:
            outClass = 'pt-page-rotateFall pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
          case 37:
            outClass = 'pt-page-rotateOutNewspaper';
            inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
            break;
          case 38:
            outClass = 'pt-page-rotatePushLeft';
            inClass = 'pt-page-moveFromRight';
            break;
          case 39:
            outClass = 'pt-page-rotatePushRight';
            inClass = 'pt-page-moveFromLeft';
            break;
          case 40:
            outClass = 'pt-page-rotatePushTop';
            inClass = 'pt-page-moveFromBottom';
            break;
          case 41:
            outClass = 'pt-page-rotatePushBottom';
            inClass = 'pt-page-moveFromTop';
            break;
          case 42:
            outClass = 'pt-page-rotatePushLeft';
            inClass = 'pt-page-rotatePullRight pt-page-delay180';
            break;
          case 43:
            outClass = 'pt-page-rotatePushRight';
            inClass = 'pt-page-rotatePullLeft pt-page-delay180';
            break;
          case 44:
            outClass = 'pt-page-rotatePushTop';
            inClass = 'pt-page-rotatePullBottom pt-page-delay180';
            break;
          case 45:
            outClass = 'pt-page-rotatePushBottom';
            inClass = 'pt-page-rotatePullTop pt-page-delay180';
            break;
          case 46:
            outClass = 'pt-page-rotateFoldLeft';
            inClass = 'pt-page-moveFromRightFade';
            break;
          case 47:
            outClass = 'pt-page-rotateFoldRight';
            inClass = 'pt-page-moveFromLeftFade';
            break;
          case 48:
            outClass = 'pt-page-rotateFoldTop';
            inClass = 'pt-page-moveFromBottomFade';
            break;
          case 49:
            outClass = 'pt-page-rotateFoldBottom';
            inClass = 'pt-page-moveFromTopFade';
            break;
          case 50:
            outClass = 'pt-page-moveToRightFade';
            inClass = 'pt-page-rotateUnfoldLeft';
            break;
          case 51:
            outClass = 'pt-page-moveToLeftFade';
            inClass = 'pt-page-rotateUnfoldRight';
            break;
          case 52:
            outClass = 'pt-page-moveToBottomFade';
            inClass = 'pt-page-rotateUnfoldTop';
            break;
          case 53:
            outClass = 'pt-page-moveToTopFade';
            inClass = 'pt-page-rotateUnfoldBottom';
            break;
          case 54:
            outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomLeftIn';
            break;
          case 55:
            outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomRightIn';
            break;
          case 56:
            outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomTopIn';
            break;
          case 57:
            outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomBottomIn';
            break;
          case 58:
            outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeLeftIn';
            break;
          case 59:
            outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeRightIn';
            break;
          case 60:
            outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeTopIn';
            break;
          case 61:
            outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeBottomIn';
            break;
          case 62:
            outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselLeftIn';
            break;
          case 63:
            outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselRightIn';
            break;
          case 64:
            outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselTopIn';
            break;
          case 65:
            outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselBottomIn';
            break;
          case 66:
            outClass = 'pt-page-rotateSidesOut';
            inClass = 'pt-page-rotateSidesIn pt-page-delay200';
            break;
          case 67:
            outClass = 'pt-page-rotateSlideOut';
            inClass = 'pt-page-rotateSlideIn';
            break;

        }
        return { outClass , inClass }
      },//根据编号获取动画库animation.css的样式

      changePageByIndex(index){
        if (this.changePageFlag === false) {//如果已经在执行动画，不能继续切换
          return
        }
        this.changePageFlag = false //设为不能继续执行动画

        let outPageNum = this.page -1
        let inPageNum = index -1

        //如果是同一页面，不切换
        if(outPageNum === inPageNum){
          return
        }

        this.page = index//记录下来新切换的页数
        //判断是向上还是向下翻页
        let CPClass = outPageNum < inPageNum  ? this.downPageClass  : this.upPageClass
        //切换页面 参数1，进入页面编号，参数2，要退出页面编号 参数3 是切换的动画
        this.changePageBegin(inPageNum,outPageNum,CPClass)

      },//根据编号切换页面

    },

    watch:{
      'changePageFlag':function(newVal,oldVal){
        if (newVal === false){//如果被设置的新值是false,那么3秒后重新设置为true
          setTimeout(()=>{
            this.changePageFlag = true;
          },this.changePageTime)
        }
      },//3秒后重新设置为可切换页面状态
      'loadingOver':function(newVal){
        if (newVal){
          this.pageNavShowFlag = true
        }
      },//是否加载页面完成，如果完成，那么就显示导航栏

    },



    components:{
      pageComponent,pageNavComponent,
    }
  }
</script>

<style lang="scss" scoped>

  /*动画样式*/
  .v-enter,.v-leave-to{
    opacity:0;
    transform:translateY(100%);
  }

  .v-enter-active,
  .v-leave-active{
    transition:all .5s ease;
  }
  /*动画样式*/




  .full-page-container{
    width: 100%;
    height: 100%;
    .section{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      h1{
        position: absolute;
        left: 30%;
        top:15%;
        font-size: 80px;
      }
    }
  }
</style>