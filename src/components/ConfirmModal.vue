// components/ConfirmModal.vue
<!-- ConfirmModal.vue -->
<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <slot></slot>
      <button @click="$emit('confirm')">Confirmar</button>
      <button @click="$emit('cancel')">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen']
}
</script>


<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
  },
  class: {
    type: String,
  }
})
</script>

<style>
/* .modal-dialog {
  position: relative;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
} */

</style>