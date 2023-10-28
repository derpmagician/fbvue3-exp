import './assets/main.css'

import { createApp } from 'vue'
// import VueChatScroll from 'vue-chat-scroll'
import  resetStore  from './resetStore'
import { createPinia } from 'pinia'
import Toast from 'vue3-toastify';

import App from './App.vue'
import router from './router'

const app = createApp(App);

// app.use(VueChatScroll)

const pinia = createPinia()
pinia.use(resetStore)

app.use(pinia)
app.use(router)
app.use(Toast)

app.mount('#app')