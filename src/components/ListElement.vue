<script setup>
const props = defineProps({
  index: {
    type: Number,
  },
  text: {
    type: String,
  }
})
const emit = defineEmits(['processChangeDefaultValue'])

const processText = () => {
  let lastChar = props.text.slice(-1);
  emit('processChangeDefaultValue', lastChar)
}

</script>

<template>
<div class="row">
  <div class="col-8">
    <div :class="['', 'p-3', (index % 2 !== 0) ? 'bg-secondary' : 'bg-warning']" >{{ text }}</div>
  </div>
  <div class="col alto d-flex align-items-center">
    <!-- <button class="btn btn-primary" type="button"
      @click="$emit('changeDefaultValue', text)"
    >Click Me!</button> -->
    <button class="btn btn-primary" type="button"
      @click="processText"
    >Seleccioname</button>
  </div>
</div>

</template>

<style>
/* .alto {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>