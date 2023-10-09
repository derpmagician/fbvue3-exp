// views/Login.vue
<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

let email = ref("renren@ren.com");
let password = ref("123123");

const handleSubmit = async () => {
    if (!email.value || password.value.length < 6) {
        alert("ingresa los campos");
    }

    await userStore.loginUser(email.value, password.value);
};
</script>

<template>
<div>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model.trim="email" />
    <input
      type="password"
      placeholder="password"
      v-model.trim="password"
    />
    <button type="submit" :disabled="userStore.loadingUser">
      Acceder
    </button>
  </form>
</div>
</template>

<style>

</style>