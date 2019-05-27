<template>
  <div class="footer-page-container">


    
    <div class="blog-roll-container" >
      <a class="blog-roll"
         v-for="(item,i) in blogRollList" :key="item.href"
         :href="item.href"
         target="_blank"
      >
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
    
    
    
    <footer>
      <div class="rnv">
        {{ recordNVarchar }}
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "FooterPageComponent",
    data:function(){
      return {
      }
    },
    computed:{
      recordNVarchar(){ return this.sectionData.recordNVarchar },//备案号
      blogRollList(){ return this.sectionData.blogRollList },//友联列表
    },
    props:['sectionData',],



  }
</script>

<style lang="scss" scoped>
  .footer-page-container{

    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;

    .blog-roll-container{


      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;

      width: 70%;
      min-height:100px;
      padding: 20px;
      border-radius: 10px;
      .blog-roll{
        width: 20%;
        height: 50px;
        margin: 10px 5%;
        border-radius: 1px;
        position: relative;
        overflow:hidden;
        background-color: rgba(0, 0, 0, 0.6);
        border:1px solid rgba(255,255,255,.5);
        display: flex;
        justify-content: center;
        align-items: center;
        transition:all .3s;
        .title{
          color:rgba(255,255,255,.5);
          transition:all .3s;

        }

      }

      .blog-roll:hover{
        border:1px solid greenyellow;
        .title{
          color:rgba(0,0,0,.8);
          z-index: 100;
        }
      }




      .blog-roll::after{
        content:'';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 600%;

        transform: rotateZ(0) translateY(-400px);
        transition:all .6s;
      }



      .blog-roll:hover::after{
        background-color: greenyellow;
        width: 200%;
        height: 600%;
        transform: rotateZ(-35deg) translateY(-200px);
      }


    }




    @media screen  and (min-width:768px)  and (max-width:1000px){
      .blog-roll-container {
        width: 80%;
        .blog-roll {
          margin: 10px 5%;
          width: 30%;
        }
      }
    }



    @media screen  and (min-width:480px)  and (max-width:767px){
      .blog-roll-container {
        width: 80%;
        .blog-roll {
          margin: 10px 5%;
          width: 35%;
        }
      }
    }

    @media screen  and (max-width:479px)  {
      .blog-roll-container {
        width: 100%;
        .blog-roll {
          margin: 10px 5%;
          width: 35%;
          font-size:12px;
        }
      }
      footer{
        font-size: 10px!important;
      }
    }


    footer{
      width: 100%;
      position: absolute;
      color:rgba(255,255,255,.5);
      bottom: 0;
      display: flex;
      justify-content: center;
      padding: 20px;
      font-size: 16px;

    }

  }
</style>