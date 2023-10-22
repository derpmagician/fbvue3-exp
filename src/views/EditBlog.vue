// views/EditBlog.vue
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter  } from 'vue-router';
import { useBlogPostStore } from "../stores/blogPosts";
import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';
import dayjs from 'dayjs';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const route = useRoute();
const router = useRouter()
const blogPostStore = useBlogPostStore();

let BlogPostParams = ref("");
const id = ref("")
const titulo = ref("");
const detalle = ref("");
const image = ref("");
const date = ref("");


// const { isValidUrl } = useIsValidUrl(url);

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  // Convierte el Timestamp de Firebase a un objeto Date de JavaScript
  const timeStampDate = timestamp.toDate();
  // Formatea la fecha con Day.js
  return dayjs(timeStampDate).format('DD/MM/YYYY HH:mm:ss');
};

onMounted(async () => {
  BlogPostParams = await blogPostStore.leerBlogPost(route.params.id);
  // titulo.value = await blogPostStore.leerBlogPost(route.params.id);
  titulo.value = await BlogPostParams.titulo
  detalle.value = await BlogPostParams.detalle
  image.value = await BlogPostParams.image
  date.value = await BlogPostParams.date

  // console.log(date.value)
});

const handleSubmit = async () => {

  if (titulo.value === "") {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
  if (titulo.value !== "") {
  // if (isValidUrl.value) {
    const updatedBlogPost = await blogPostStore.updateBlogPost(
      route.params.id, titulo.value, detalle.value, image.value);
    // titulo.value = await blogPostStore.updateBlogPost(route.params.id, titulo.value)
    const { triggerToast } = useTriggerToast("success");
    triggerToast();
    router.push("/blog")
  // } else {
    // const { triggerToast } = useTriggerToast("error");
    // triggerToast();
  // }
  }
}
</script>

<template>
<div class="container">

  <!-- {{ BlogPostParams }} -->
  <form @submit.prevent="handleSubmit" class="input-group input-group-sm mb-3 row">
    <h2>Editar Blog</h2>
    <div v-if="blogPostStore.loadingDoc">Loading docs...</div>
    <div v-else>
      <span>
      {{ route.params.id }}
      {{ formatTimestamp(date) }}

      </span>
      <div class="me-2 mt-3 col-sm-12">
        <input type="text" class="form-control" :placeholder="titulo" v-model="titulo"
          required
        />
      </div>
      <div class="me-2 mt-3 col-sm-12">
        <input type="text" class="form-control" :placeholder="detalle" v-model="detalle"/>
      </div>
      <div class="me-2 mt-3 col-sm-12">
        <input type="text" class="form-control" :placeholder="image" v-model="image"/>
      </div>
      <div class="me-2 mt-3 col-sm-12">
        <button type="submit" class="btn w-100"
        :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'" >Save</button>
      </div>
      <div class="me-2 mt-3 col-sm-12">
        <button type="" @click.prevent="router.go(-1)" class="btn w-100"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'" >Cancel</button>
      </div>


    </div>



  </form>
  
</div>
</template>

<style>

</style>