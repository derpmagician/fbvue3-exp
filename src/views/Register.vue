<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const email = ref("bluuweb1@test.com");
const password = ref("123123");

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    alert("La clave tiene que tener 7 o mas caracteres");
  }

  await userStore.registerUser(email.value, password.value);
};
</script>

<template>
<div>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit"  class="input-group input-group-sm mb-3 row">
    <div class="me-2 mt-3 col-sm-12">
      <input class="form-control"
        type="email" placeholder="email" v-model.trim="email" />
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <input class="form-control"
        type="password" placeholder="password" v-model.trim="password"/>
    </div>
    <div class="me-2 mt-3 col-sm-12">
      <button type="submit" :disabled="userStore.loadingUser"
        class="btn w-100" :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-danger'" >
        Crear cuenta
      </button>
    </div>
  </form>
</div>
</template>

<style>

</style>