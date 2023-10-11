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
    router.push("/savedlinks")
  } else {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
}
</script>

<template>
<div class="container">
  <form @submit.prevent="handleSubmit" class="input-group input-group-sm mb-3 row">
    <h2>Editar</h2>
    <span>
      {{ url }}
    </span>
    <div class="me-2 mt-3 col-sm-12">
      <input type="text" class="form-control" placeholder="Ingrese Url" v-model="url"/>
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <button type="submit" class="btn w-100"
      :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'" >Save</button>
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <button type="" @click.prevent="router.go(-1)" class="btn w-100"
        :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'" >Cancel</button>
    </div>

  </form>
  
</div>
</template>

<style>

</style>