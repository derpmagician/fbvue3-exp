<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user';
import dayjs from 'dayjs';

const props = defineProps({
  reversedDocuments: {
    type: Array,
    required: true
  },
})

const userStore = useUserStore();

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  // Convierte el Timestamp de Firebase a un objeto Date de JavaScript
  const timeStampDate = timestamp.toDate();
  // Formatea la fecha con Day.js
  return dayjs(timeStampDate).format('DD/MM/YYYY HH:mm:ss');
};
</script>

<template>
<li  v-for="item, of reversedDocuments"
  :key="`${item?.createdAt.seconds}${item?.createdAt.nanoseconds}`" >
  <div class="mt-2 me-2 py-1 chat__user"
    :class="item.sender === userStore.userData?.nombre ? 'text-end' : 'text-start'" >
    <span class="bg-success text-white rounded-2 px-2 py-1">
      {{item?.sender}}
    </span>
    {{ formatTimestamp(item?.createdAt) }}
    <div class="" >{{item?.msg}}</div>
  </div>
  
</li>
 </template>
