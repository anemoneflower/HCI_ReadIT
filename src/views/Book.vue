<template>
    <div>
        <div class="wrapper" @mouseover="mouseOver" @mouseout="mouseOut">
            <img class="img" :src= book.img style="position: relative;">
<!--            <md-button  v-show="Hide" class="btn1" style="position: absolute">Board</md-button>-->
<!--            <md-button  v-show="Hide" class="btn2" style="position: absolute">Quiz</md-button>-->
        </div>
        <h3 class="title">{{ book.title }}</h3>
        <h4>{{ book.publisher }}</h4>
    </div>
</template>

<script>
  export default {
    data: () =>({
      Hide:false
    }),
    props:{
      book : {
        type : Object
      }
    },
    methods: {
      mouseOver: function () {
        this.Hide = true;
      },
      mouseOut:function () {
        this.Hide = false;
      }
    }
  }
</script>

<style scoped>
    .img{
        height: 150px;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
    }
    .wrapper {
        align-items: center;
        width: fit-content;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
    /*.btn1 {*/
    /*    left: -2%;*/
    /*    top:15%;*/
    /*    background-color: #c4c4c4;*/
    /*}*/
    /*.btn2 {*/
    /*    left: 6%;*/
    /*    top:43%;*/
    /*    background-color: #FBBC04;*/
    /*}*/
</style>