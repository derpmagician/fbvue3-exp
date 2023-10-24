// views/Register/vue
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useTriggerToast } from '@/composables/triggerToast.js';
const userStore = useUserStore();

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const email = ref("");
const password = ref("");
const nombre = ref("");

const handleSubmit = async () => {
  if (!nombre.value || !email.value || password.value.length < 6) {
    const { triggerToast } = useTriggerToast("characters");
    triggerToast();
  }

  await userStore.registerUser(email.value, password.value, nombre.value);
};
</script>

<template>
<div>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit"
    class="input-group input-group-sm mb-3 row">
    <div class="mt-3 col-sm-12">
      <input class="form-control" required
        type="email" placeholder="email"
        autocomplete="email"
        v-model.trim="email" />
    </div>
    <div class="mt-3 col-sm-12">
      <input class="form-control" required
        type="password" placeholder="password"
        autocomplete="current-password"
        v-model.trim="password"/>
    </div>
    <div class="mt-3 col-sm-12">
      <input class="form-control" required
        type="text" placeholder="nombre" v-model.trim="nombre" />
    </div>
    <div class="mt-3 d-grid gap-2">
      <button type="submit" :disabled="userStore.loadingUser"
        class="btn" :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'" >
        Crear cuenta
      </button>

    </div>
  </form>
</div>
</template>

<style>

</style>