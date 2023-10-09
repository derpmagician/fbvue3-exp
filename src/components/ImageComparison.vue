<script setup>
import { ref } from 'vue';

const sliderValue = ref(50);
</script>

<template>
  <div class="row mb-3">
    Image Comparison Slider
  </div>
  <div class="row">
    <div class="wrapper">
      <div class="images">
        <!-- <img class="img-1" src="/im-a.png">
        <img class="img-2" :style="{ width: sliderValue + '%' }" src="/im-b.png"> -->
        <div class="img-1" ></div>
        <div class="img-2" :style="{ width: sliderValue + '%' }" ></div>
      </div>
      <div class="slider">
        <div class="drag-line" :style="{ left: sliderValue + '%' }" >
          <span></span>
        </div>
        <input type="range" min="0" max="98" v-model="sliderValue">
        
      </div>
    </div>
  </div>
</template>

<style scope>
.wrapper{
  position: relative;
  height: 500px;
  width: 750px;
  overflow: hidden;
  background: #fff;
  border: 7px solid #fff;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.15);
}
.wrapper .images{
  height: 100%;
  width: 100%;
  display: flex;
}
.wrapper .images .img-1{
  height: 100%;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1695418625020-d48ccb5dc1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80") no-repeat;
  /* background: url("images/car.jpg") no-repeat; */
}
.wrapper .images .img-2{
  position: absolute;
  height: 100%;
  width: 50%;
  filter: blur(5px);
  background: url("https://images.unsplash.com/photo-1695418625020-d48ccb5dc1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80") no-repeat;
  /* background: url("images/car.png") no-repeat; */
}
.wrapper .slider{
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}
.wrapper .slider input{
  width: 100%;
  outline: none;
  background: none;
  appearance: none;
  -webkit-appearance: none;
}
.slider input::-webkit-slider-thumb{
  height: 486px;
  width: 3px;
  background: none;
  appearance: none;
  -webkit-appearance: none;
  cursor: col-resize;
}
.slider .drag-line{
  width: 3px;
  height: 486px;
  position: absolute;
  left: 49.85%;
  pointer-events: none;
}
.slider .drag-line::before,
.slider .drag-line::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 222px;
  background: #fff;
}
.slider .drag-line::before{
  top: 0;
}
.slider .drag-line::after{
  bottom: 0;
}
.slider .drag-line span{
  height: 42px;
  width: 42px;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.slider .drag-line span::before,
.slider .drag-line span::after{
  position: absolute;
  content: "";
  top: 50%;
  border: 10px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  transform: translate(-50%, -50%) rotate(45deg);
}
.slider .drag-line span::before{
  left: 40%;
  border-left-color: #fff;
}
.slider .drag-line span::after{
  left: 60%;
  border-top-color: #fff;
}
</style>