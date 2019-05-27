<template>

  <div class="blog-articleList " >
    <div class="blog-articleList-container">
      <div class="title"  >
        {{ articleTitle }}
        <a href="" >{{articleTitleHref}}</a>
      </div>
      <a
          v-for="(item,i) in articleList"
          :href="item.href"
          :key="'left:'+ title"
      >» {{ item.title }}</a>
      <div class="bottom"  > </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "BlogArticalesComponent",
    data:function(){return{
    }},
    props:['articleTitle','articleList','articleTitleHref'],

  }
</script>

<style lang="scss" scoped>
  /*博客文章链接*/
  .blog-articleList{
    @media screen and (min-width: 1000px){
      top:0;
      left:0 !important;
      width: 30%;
      height: 40%;
      margin: 5% 1%;
    }

    position: absolute;
    bottom:0;


    height: 30%;
    padding: 2%;
    box-sizing: border-box;

    left: 0 !important;

    width: 100%;

    display: flex;
    align-items:center;
    justify-content: center;

    /*文章列表标题*/
    .title{
      font-size:16px;
      color:  #686967;
      padding-bottom: 5px;
      text-align: center;
      margin-bottom: 10px;
      letter-spacing:3px;
      a{
        font-size:12px!important;
        letter-spacing: 0;
        color:  #686967!important;
        display: block;
      }

      @media screen and (max-width:600px) and (max-width:767px){
        font-size:16px;
        a{
          font-size:11px!important;
        }
      }
      @media screen and (max-width:400px) and (max-width:480px){
        font-size:14px;
        a{
          font-size:10px!important;
        }
      }
      @media screen and (max-width:399px) {
        font-size:13px;
        a{
          font-size:9px!important;
        }
      }


    }
    /*页脚细线*/
    .bottom,.title{
      width: 100%;
      border-bottom:1px solid rgba(0,0,0,.2);
      min-height:10px;
      @media screen and (min-width:1000px) {
        border-bottom:2px solid rgba(255,255,255,.1) !important;
      }
    }



    /*文章列表*/
    .blog-articleList-container{
      border-radius:5%;
      background-color: rgba(0,0,0,.1);
      width: 100%;
      max-width: 450px;
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content: center;
      padding: 20px 5px ;

      @media screen and (max-width:420px) {
        padding: 10px 5px ;
      }

      @media screen and (min-width:1000px) {
        padding: 20px ;
      }


    }

    .blog-articleList-container > a{
      width: 90%;
      border-radius: 5px;
      display: block;
      margin: 5px;
      background-color: rgba(0,0,0,.3);
      font-size:17px;
      color: #fefefe;
      text-shadow: 0 1px 1px #333;
      font-weight: 100;
      padding: 5px 10px;

      @media screen and (min-width: 1000px){
        color:#686967;
      }

      @media screen and (max-width:600px) and (max-width:767px){
        font-size:16px;
      }
      @media screen and (max-width:400px) and (max-width:480px){
        font-size:14px;
      }
      @media screen and (max-width:399px) {
        font-size:13px;
      }


    }
    .blog-articleList-container > a:hover{
      color: #556677;
      background-color: white;
      font-weight: normal;
    }
  }
</style>