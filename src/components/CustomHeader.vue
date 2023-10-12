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
      <ul class="d-flex" v-if="!useUserStore.loading" >
        <li>
          <router-link to="/" class="btn col me-2" 
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Home
          </router-link>
        </li>
        <li>
          <router-link to="/savedlinks" class="btn col me-2" 
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Saved Links
          </router-link>
        </li>
        <li>
          <router-link to="/cssexperiment" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Css Experiments
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="btn col me-2"
            :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">About
          </router-link>
        </li>

        <li>
          <input type="checkbox" id="swc" class="swc-checkbox"
            :checked="isDark" @change="$emit('toggleDark')">
          <label for="swc" class="swc-label">
            <span class="swc-inner"></span>
            <!-- <span class="swc-switch-mask"></span> -->
            <span class="swc-switch"></span>
            <span class="swc-switch-mask"></span>

          </label>
        </li>

        <li>
          <router-link to="/login" class="btn col me-2" v-if="!userStore.userData"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Login 
        </router-link>
        </li>
        <li>
          <router-link to="/register" class="btn col me-2" v-if="!userStore.userData"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Register
        </router-link>
        </li>
        <li>
          <button class="btn btn-primary"
            v-if="userStore.userData"
            @click="userStore.logoutUser"
          >Logout
          </button>
        </li>
      </ul>
      <div v-else>Loading user...</div>
    </nav>

  </header>
</template>

<style>

.swc-checkbox {
  display: none;
}

.swc-label {
  /* background: red; */
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  cursor: pointer;
}

.swc-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #030566;
  border-radius: 34px;
  transition: background 2.3s;
}

.swc-checkbox:checked + .swc-label .swc-inner {
  background: #0ea5c0;
}

.swc-switch {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  background: rgb(231, 228, 25);
  border-radius: 50%;
  transition: left 2.3s;
}

.swc-switch-mask {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: #030566;
  border-radius: 50%;
}

.swc-checkbox:checked + .swc-label .swc-switch-mask  {
  background: transparent;
}

.swc-checkbox:checked + .swc-label .swc-switch {
  left: 28px;
}

</style>