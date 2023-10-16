// views/UrlCollection.vue
<script setup>
import { ref, computed, onMounted, watch } from 'vue'
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

const urlStore = useUrlStore();
const url = ref('');
const { isValidUrl } = useIsValidUrl(url);

watch(() => urlStore.documents, (newVal, oldVal) => {
  // Aquí puedes actualizar la vista con los nuevos valores de 'users'
}, { deep: true, immediate: true });


onMounted(() => {
  urlStore.$reset();
  urlStore.getColUrls();
});

const handleSubmit = () => {
  if (isValidUrl.value) {
    urlStore.addColUrl(url.value)
    const { triggerToast } = useTriggerToast("success");
    url.value = ''
    triggerToast();

  } else {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
}

</script>

<template>
  <h2>Urls</h2>
  <h3>{{userStore.userData}}</h3>
  <br />
  <!-- <div>{{urlStore}}</div> -->
  <div>
    <form @submit.prevent="handleSubmit" class="mx-4">
      <input type="text" placeholder="Ingrese Url" v-model="url" />
      <button type="submit" class="btn col mx-2" :disabled="urlStore.loadingDoc"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Agregar</button>
    </form>
  </div>
  <div v-if="urlStore.loadingDoc">Loading docs...</div>
  <div v-else>
    <ul >
      <li v-for="item of urlStore.documents" :key="item?.id">
        <!-- {{ urlStore.documents.length }} -->
        <div class="my-2" >{{item?.longUrl}}</div>
        <div class="my-2" >{{ item?.shortUrl }}</div>
        <button @click="urlStore.deleteColUrl(item.id)" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'">Delete</button>

      </li>
    </ul>
  </div>
</template>

<style>

</style>