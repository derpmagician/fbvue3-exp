<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import { useUserStore } from "./stores/user";
import CustomHeader from './components/CustomHeader.vue';

const userStore = useUserStore();

const isDark = useDark(
  {
    selector: 'body',
    // attribute: 'b-dark',
    valueDark: 'bd-dark',
    valueLight: 'bd-light',
  },
  {
    selector: 'a',
    // attribute: 'b-dark',
    valueDark: 'bd-dark',
    valueLight: 'bd-light',
  },

  )
const toggleDark = useToggle(isDark)

</script>

<template>
<CustomHeader :isDark="isDark" @toggleDark="toggleDark"
  class="container my-2 p-4" :class="isDark ? 'bg-dark' : 'bg-light'"/>
<div>Veamos</div>
<div>{{userStore}}</div>

<div class="container-fluid">

  <main class="container my-2 p-4" :class="isDark ? 'bg-dark' : 'bg-light'">
    <RouterView />
  </main>
</div>

</template>

<style>

.bd-dark  {
  background: rgb(4, 21, 95);
  color: white;
}

.bd-light  {
  background: rgb(210, 212, 193);
}

</style>
