<template>
  <div class="page-nav-container">
    <div class="nodeList" style="height:auto;">


      <div class="node" v-for="(item,i) in sections"
           :class="pageNum === i ?'select':''"
           @click="changePage(i+1)">
        <div class="circle-outer">
          <div class="circle-inner">

          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "PageNavComponent",
    props:['sections','pageNum'],
    methods:{
      changePage(index){
        //emit英文意思：触发，调用，发射的意思
        //需要先在用methods:{}中定义一个自身方法，
        // 再往这个方法中使用this.$emit('父组件传过来的方法名称',参数) 来调用父方法。
        this.$emit('change-page-by-index',index)
        //注：方法中定义的名字，不能用驼峰，否则无法识别 只能 'parent-fun' 和 <com2 @parent-fun="show"></com2>
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-nav-container{
    position:fixed;
    top: 0;
    right: 0;
    width: 25px;
    margin: 3% ;
    height: 80%;
    z-index: 300;
    display: flex;
    justify-content: center;
    align-items: center;

    .nodeList{
      position: relative;
      width: 100%;

      .node,.circle-outer{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .node{
        width: 100%;
        height: 25px;
        margin-bottom: 40px;
        align-items:flex-start!important;
        cursor:pointer;
        z-index: 500;
        .circle-outer{
          width: 75%;
          height: 75%;
          border-radius: 50%;
          background-color: rgba(255,255,255,.5);
          transition:all 1s;
        }

        .circle-inner{
          width: 35%;
          height: 35%;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.5);
          transition:all 1s;
        }

      }


      .node:hover,.node.select{
        .circle-outer{
          background-color: rgba(255,255,255,1);
        }
        .circle-inner{
          background-color: rgba(255,208,103,1);
        }
      }

    }

    .nodeList::before{
      content:'';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      border-left:1px dashed #FFFED7;
      width: 100%;
      height: calc(100% - 65px);
      margin-left: 45%;
      margin-top: 8px;
    }



  }



</style>