// views/Chat.vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user';
import { useUrlStore } from '@/stores/colUrls';
import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const userStore = useUserStore();
const router = useRouter();

// const filteredDocuments = computed(
  // () => urlStore.documents.filter(item => item.users.some(user => user === userStore.uid)));


const urlStore = useUrlStore();
const url = ref('');
const { isValidUrl } = useIsValidUrl(url);


onMounted(() => {
  urlStore.$reset();
  urlStore.getColUrls();
});

const handleSubmit = () => {
  if (isValidUrl.value) {
    urlStore.addColUrl(url.value)
    const { triggerToast } = useTriggerToast("success");
    triggerToast();
  } else {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
}

</script>

<template>
  <h2>Chat</h2>
  <h3>
    {{userStore.userData}}
  </h3>
  <br />
  <div>
    {{urlStore}}
  </div>
  <div>

    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese Url" v-model="url" />
      <button type="submit" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Agregar</button>
    </form>
  </div>
  <div v-if="urlStore.loadingDoc">Loading docs...</div>
  <div v-else>
    <ul >
      <!-- <li v-for="item of filteredDocuments.value" :key="item?.id">
        {{item?.longUrl}} <br /> {{ item?.shortUrl }}
      </li> -->

      <li v-for="item of urlStore.documents" :key="item?.id">
        {{item?.longUrl}} <br /> {{ item?.shortUrl }}<br /> 
        <!-- <button @click="router.push(`/editlink/${item.id}`)" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Edit</button> -->
        <!-- <button @click="userStore.deleteUrl(item.id)" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'">Delete</button> -->
      </li>
    </ul>
  </div>
</template>

<style>

</style>