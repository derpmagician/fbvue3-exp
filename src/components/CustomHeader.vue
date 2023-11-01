// components/CustomHeader.vue
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
    <nav class="navbar navbar-expand-md expand-sm row " >
      <ul class="d-flex" v-if="!useUserStore.loading" >
        <li >
          <router-link to="/" class="btn col me-2" tabindex="1"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Inicio
          </router-link>
        </li>
        <li >
          <router-link to="/blog" class="btn col me-2" tabindex="2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Blog
          </router-link>
        </li>
        <li >
          <router-link to="/myblogposts" class="btn col me-2" tabindex="2"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Mi Blog Personal
          </router-link>
        </li>
        <li >
          <router-link to="/chat" class="btn col me-2" tabindex="3"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Chat
          </router-link>
        </li>
        <li>
          <router-link to="/savedlinks" class="btn col me-2" tabindex="4"
            :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Mis Links
          </router-link>
        </li>
        <li>
          <router-link to="/cssexperiment" class="btn col me-2"  tabindex="5"
            :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Css tricks
          </router-link>
        </li>
        <li>
          <router-link to="/urlcollection" class="btn col me-2"  tabindex="7"
            :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Mis Urls
          </router-link>
        </li>
        <li>
          <input type="checkbox" id="swc" class="swc-checkbox"
            :checked="isDark" @change="$emit('toggleDark')">
          <label for="swc" class="swc-label me-2"  aria-label="cambio a modo oscuro o claro"  tabindex="7">
            <span class="swc-inner"></span>
            <span class="swc-switch"></span>
            <span class="swc-switch-mask"></span>

          </label>
        </li>
        <li >
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
:root {
  --outline-color: rgb(0, 156, 204);
}
li label:hover,
li button:hover,
li a:hover {
  outline: 3px solid var(--outline-color);
}

.swc-inner:hover {
  outline: 3px solid var(--outline-color);
}

.swc-checkbox {
  display: none;
}

.swc-label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  cursor: pointer;
  border-radius: 34px;
  /* transition: 2.3s; */
}

.swc-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #030566;
  border-radius: 34px;
  transition: 2.3s;
}

.swc-checkbox:checked + .swc-label .swc-inner {
  background: #016b7e;
}

.swc-switch {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  background: rgb(231, 228, 25);
  border-radius: 50%;
  z-index: 0;
  /* transition: left 2.3s; */
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
  left: 26px;
}

</style>