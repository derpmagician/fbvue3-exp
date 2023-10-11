<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user';
import { useDatabaseStore } from '@/stores/database';
import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';

const userStore = useUserStore();


const router = useRouter();

const databaseStore = useDatabaseStore();
const url = ref('');
const { isValidUrl } = useIsValidUrl(url);


onMounted(() => {
  databaseStore.$reset();
  databaseStore.getUrls();
});

const handleSubmit = () => {
  if (isValidUrl.value) {
    databaseStore.addUrl(url.value)
    const { triggerToast } = useTriggerToast("success");
    triggerToast();
  } else {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
}

</script>
<template>
  <div class="savedl">
    <h2>Mi List of Saved Links</h2>
    <h3>{{userStore.userData}}</h3>
    <br />
    <div>

      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese Url" v-model="url" />
        <button type="submit" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Agregar</button>
      </form>
    </div>

    <div v-if="databaseStore.loadingDoc">Loading docs...</div>
    <div v-else>
      <ul >
        <li v-for="item of databaseStore.documents" :key="item?.id">
          {{item?.name}} <br /> {{ item?.short }}<br /> 
          <button @click="router.push(`/editlink/${item.id}`)" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Edit</button>
          <button @click="databaseStore.deleteUrl(item.id)" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'">Delete</button>
        </li>
      </ul>
    </div>


  </div>
</template>

<style>

</style>
