<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter  } from 'vue-router';
import { useDatabaseStore } from "../stores/database";
import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';


const route = useRoute();
const router = useRouter()
const databaseStore = useDatabaseStore();

const url = ref("");
const { isValidUrl } = useIsValidUrl(url);


onMounted(async () => {
  url.value = await databaseStore.leerUrl(route.params.id);
});



const handleSubmit = async () => {
  if (isValidUrl.value) {
    url.value = await databaseStore.updateUrl(route.params.id, url.value)
    const { triggerToast } = useTriggerToast("success");
    triggerToast();
    router.push("/about")
  } else {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
}
</script>

<template>
<div>
  Editar {{ url }}
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Ingrese Url" v-model="url" />
    <button type="submit" >Editar</button>
  </form>
</div>
</template>

<style>

</style>