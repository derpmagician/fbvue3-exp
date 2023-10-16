// views/Login.vue
<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useTriggerToast } from '@/composables/triggerToast.js';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

const userStore = useUserStore();

let email = ref("renren@ren.com");
let password = ref("123123");

const handleSubmit = async () => {
    if (!email.value || password.value.length < 6) {
        // alert("ingresa los campos");
        const { triggerToast } = useTriggerToast("credentials");
        triggerToast();
    }

    await userStore.loginUser(email.value, password.value);
};
</script>

<template>
<div class="container">
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit" class="input-group input-group-sm mb-3 row">
    <div class="me-2 mt-3 col-sm-12">
      <input class="form-control"
        type="email" placeholder="email" v-model.trim="email" required />
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <input class="form-control"
        type="password"
        placeholder="password"
        v-model.trim="password"
        required
      />
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <button type="submit" :disabled="userStore.loadingUser"
      class="btn w-100"
        :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">
        Acceder</button>
    </div>
  </form>
</div>
</template>

<style>

</style>