// App.vue
<script setup>
import { useDark, useToggle } from '@vueuse/core';
import CustomHeader from '@/components/CustomHeader.vue';

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

<div class="container-fluid">

  <main class="container my-2 p-4" :class="isDark ? 'bg-dark' : 'bg-light'">
    <RouterView />
  </main>
</div>

</template>

<style>

.bd-dark  {
  background: #233938;
  color: white;
}

.bd-light  {
  background: rgb(210, 212, 193);
  color: black;
}

</style>
