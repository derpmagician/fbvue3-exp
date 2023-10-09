<script setup>
import { useUserStore } from "@/stores/user"

const userStore = useUserStore();
const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

defineEmits(['toggleDark'])
</script>

<template>
  <header >
    <nav class="row " >
      <div class="" v-if="!useUserStore.loading" >
        <router-link to="/" class="btn col me-2" 
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Home
        </router-link>
        <router-link to="/cssexperiment" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Css Experiment
        </router-link>
        <router-link to="/about" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">About
        </router-link>
        <label for="lightChck">Cambiar luz</label>
        <input id="lightChck" type="checkbox" name="ligh_check" class="me-2" :checked="isDark"
          @change="$emit('toggleDark')" />
        <router-link to="/login" class="btn col me-2" v-if="!userStore.userData"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Login 
        </router-link>
        <router-link to="/register" class="btn col me-2" v-if="!userStore.userData"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Register
        </router-link>
        <button class="btn btn-primary"
          v-if="userStore.userData"
          @click="userStore.logoutUser"
        >Logout
        </button>
      </div>
      <div v-else>Loading user...</div>
    </nav>

  </header>
</template>

<style>

</style>