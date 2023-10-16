// views/EditBlog.vue
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter  } from 'vue-router';
import { useBlogPostStore } from "../stores/blogPosts";
import { useIsValidUrl } from '@/composables/isValidUrl.js';
import { useTriggerToast } from '@/composables/triggerToast.js';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const route = useRoute();
const router = useRouter()
const blogPostStore = useBlogPostStore();

const titulo = ref("");
const detalle = ref("");
const image = ref("");
const date = ref("");


const BlogPostParams = ref("");

// const { isValidUrl } = useIsValidUrl(url);


onMounted(async () => {
  BlogPostParams.value = await blogPostStore.leerBlogPost(route.params.id);
  titulo.value = BlogPostParams.value.titulo
  detalle.value = BlogPostParams.value.detalle
  image.value = BlogPostParams.value.image
  date.value = BlogPostParams.value.date

  console.log(BlogPostParams.value)
});



const handleSubmit = async () => {

  if (titulo.value === "") {
    const { triggerToast } = useTriggerToast("error");
    triggerToast();
  }
  if (titulo.value !== "") {
  // if (isValidUrl.value) {
    const updatedBlogPost = await blogPostStore.updateBlogPost(route.params.id, titulo.value, detalle.value, image.value);
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
  <form @submit.prevent="handleSubmit" class="input-group input-group-sm mb-3 row">
    <h2>Editar Blog</h2>
    <span>
      {{ titulo }}
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

  </form>
  
</div>
</template>

<style>

</style>