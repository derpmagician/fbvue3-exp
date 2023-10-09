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
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{userStore.userData}}</h2>
    <br />
    <!-- <h3>{{databaseStore.documents}}</h3> -->
    <!-- <h3>{{databaseStore}}</h3> -->
    <div>
      <!-- {{ databaseStore.documents }}
      <br />  -->

      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese Url" v-model="url" />
        <button type="submit" >Agregar</button>
      </form>
    </div>

    <div v-if="databaseStore.loadingDoc">Loading docs...</div>
    <div v-else>
      <ul >
        <li v-for="item of databaseStore.documents" :key="item?.id">
          {{item?.name}} <br /> {{ item?.short }}<br /> 
          <button @click="router.push(`/editlink/${item.id}`)">Editar</button>
          <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
        </li>
      </ul>
    </div>


  </div>
</template>

<style>

</style>
