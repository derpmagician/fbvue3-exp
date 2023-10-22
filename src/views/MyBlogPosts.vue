// views/Blog.vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogPostStore } from '@/stores/blogPosts';
// import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';
import dayjs from 'dayjs';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const router = useRouter();

const blogPostStore = useBlogPostStore();
const title = ref('');
const image = ref('');
const detail = ref('');

// const { isValidUrl } = useIsValidUrl(url);

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  // Convierte el Timestamp de Firebase a un objeto Date de JavaScript
  const timeStampDate = timestamp.toDate();
  // Formatea la fecha con Day.js
  return dayjs(timeStampDate).format('DD/MM/YYYY HH:mm:ss');
};

onMounted(() => {
  blogPostStore.$reset();
  blogPostStore.getMyBlogPosts();
});

const handleSubmit = () => {
  // if (isValidUrl.value) {
    blogPostStore.addBlogPost(title.value, detail.value, image.value)
    const { triggerToast } = useTriggerToast("success");
    triggerToast();
  // } else {
    // const { triggerToast } = useTriggerToast("error");
    // triggerToast();
  // }
}

</script>
<template>
  <div class="savedl">
    <h2>Blog</h2>
    <br />
    <div>

      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese Titulo" v-model="title" /><br/>
        <input type="text" placeholder="Ingrese Image" v-model="image" /><br/>

        <textarea id="contenido" placeholder="Ingrese Contenido"
          name="w3review" rows="4" cols="50" v-model="detail">

        </textarea>
        <button type="submit" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Agregar</button>
      </form>
    </div>

    <div v-if="blogPostStore.loadingDoc">Loading docs...</div>
    <div v-else>
      <ul > 
        <li v-for="item of blogPostStore.documents" :key="item?.id">
          {{ formatTimestamp(item?.date) }}
          {{item?.titulo}} <br /> {{ item?.detalle }}<br />
          <img :src=item?.image class="w-50">
          <button @click="router.push(`/editblog/${item.id}`)" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Edit</button>
          <button @click="blogPostStore.deleteBlogPost(item.id)" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'">Delete</button>
        </li>
      </ul>
    </div>


  </div>
</template>

<style>

</style>
