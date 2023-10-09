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
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="email" v-model.trim="email" />
        <input
            type="password"
            placeholder="password"
            v-model.trim="password"
        />
        <button type="submit" :disabled="userStore.loadingUser">
            Crear cuenta
        </button>
    </form>
</div>
</template>

<style>

</style>