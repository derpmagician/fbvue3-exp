<script setup>
import { ref } from 'vue';
import ListElement from './ListElement.vue'

const props = defineProps({
  checkedNames: Array,
})

const defaultValue = ref('');

const changeDefaultValue = (text) => {
  defaultValue.value = text;
}

</script>

<template>
<div>
  Seleccionado: {{ defaultValue }}
</div>
<section v-for="(item, index) in checkedNames" :key="index" class="row bg-info">
  <ListElement :index=index  :text=item.optionCheck 
    @processChangeDefaultValue="changeDefaultValue"
  />
  <!-- <div
    :class="['', '', (index % 2 !== 0) ? 'bg-secondary' : 'bg-warning']"
  >{{ item.optionCheck }}</div> -->
</section>
<hr>
</template>

<style>
:root {
  font-size: 1em;
}
/* .altura {
  height: 1.5em;

} */
</style>