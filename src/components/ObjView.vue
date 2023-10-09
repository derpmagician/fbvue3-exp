<script setup>
import { ref } from 'vue';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const exampleImg = "https://images.unsplash.com/photo-1600331947525-65394059bdb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
let topVal = ref(61);
let rightVal = ref(44);
let bottomVal = ref(20);
let leftVal  = ref(35);
</script>

<template>
<div class="row gap-3 ">
  <div class="d-flex-row align-items-center col-lg-4">
    <p class="text-center">Original Image {{ isDark }}</p>
    <img class="img-0 mx-auto d-flex align-items-center " :src="exampleImg" alt="Reduced Size of the full image">
  </div>
  <div class="item col  d-flex-row">
    <p  class="text-center bg-white py-1 rounded">
      <code>img { object-view-box: inset({{topVal}}% {{rightVal}}% {{bottomVal}}% {{leftVal}}%); }</code>
    </p>
    <img :style="{
      'object-view-box': `inset(${topVal}% ${rightVal}% ${bottomVal}% ${leftVal}%)`
    }" class="img-1 mx-auto d-flex align-items-center" :src="exampleImg" alt="Show onlt a part of the Image">
  </div>
  <div class="col flex-fill"
    :class="isDark ? 'btn-outline-primary  bd-secondary ' : 'bg-secondary text-white'">
    <div class="row mt-4">
      <div class="col">
        <label for="topVal" class="py-2">
          <span class="">topVal</span>
        </label>
      </div>
      <div class="col">
        <input class="py-2" type="range" min="-100" max="100"
          id="topVal" v-model="topVal"
        />
      </div>
      <div class="col">
        {{ topVal }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="rightVal" class="py-2">
          <span class="">rightVal</span>
        </label>
      </div>
      <div class="col">
        <input class="py-2" type="range" min="-100" max="100"
          id="rightVal" v-model="rightVal"
        />
      </div>
      <div class="col">
        {{ rightVal }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="bottomVal" class="py-2">
          <span class="">bottomVal</span>
        </label>
      </div>
      <div class="col">
        <input class="py-2" type="range" min="-100" max="100"
          id="bottomVal" v-model="bottomVal"
        />
      </div>
      <div class="col">
        {{ bottomVal }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="leftVal" class="py-2">
          <span class="">leftVal</span>
        </label>
      </div>
      <div class="col">
        <input class="py-2" type="range" min="-100" max="100"
          id="leftVal" v-model="leftVal"
        />
      </div>
      <div class="col">
        {{ leftVal }}
      </div>
    </div>
  </div>

</div>
</template>


<style>

img {
  object-fit: cover;
}

.img-0 {
  width: 250px;
  /* aspect-ratio: 3 / 2; */
}

.img-1 {
  width: 120px;
  aspect-ratio: 2 / 3;
}


.item code {
  font-size: 14px;
  /* color: rgb(35, 14, 129); */
}
</style>