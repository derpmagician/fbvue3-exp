// components/TheWelcome.vue
<script setup>
import { onMounted, ref } from 'vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { useUserStore } from "@/stores/user";

let userStore = useUserStore();

let usuario = ref("")

onMounted( async () => {
  await userStore.currentUser();
  if (userStore.userData) usuario.value = userStore.userData.nombre
  else usuario.value = ""

});

</script>

<template>
<h1>
  Bienvenido usuario <span v-if="userStore?.userData">
    {{ usuario }}
  </span>
</h1>
<p>
  Esta SPA fue hecha con Vue + Booststrap
  para demostrar las funcionalidades con Firebase.
</p>
<p>
  Necesitas crear una cuenta para poder acceder a las páginas:
</p>
<p>
  No necesitas verificar la cuenta
</p>
<ul>
  <li>
    Blog
  </li>
  <li>
    Chat
  </li>
  <li>
    Links
  </li>
</ul>

</template>
