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
    <h2>Mi Personal Blog</h2>
    <br />
    <div>

      <form @submit.prevent="handleSubmit"
        class="input-group input-group-sm mb-3 row">
        <div class="mt-3 col-sm-12">
          <input class="form-control" type="text"
            placeholder="Ingrese Titulo" v-model="title" />
        </div>
        <div class="mt-3 col-sm-12">
          <input  class="form-control" type="text"
            placeholder="Ingrese Image" v-model="image" />
        </div>
        <div class="mt-3 col-sm-12">
          <textarea class="form-control" id="contenido"
            placeholder="Ingrese Contenido"
            name="detail" rows="4" v-model="detail">
          </textarea>
        </div>
        <div class="mt-3 d-grid gap-2">
          <button type="submit" class="btn"
              :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">
              Agregar
          </button>
        </div>
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
