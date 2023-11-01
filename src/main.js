// main.js
import './assets/main.css'

import { createApp } from 'vue'
// import VueChatScroll from 'vue-chat-scroll'
import  resetStore  from './resetStore'
import { createPinia } from 'pinia'
import Toast from 'vue3-toastify';
import VirtualList from 'vue3-virtual-scroll-list';


import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia()
pinia.use(resetStore)

// app.use(VueChatScroll)
app.use(pinia)
app.use(router)
app.use(Toast)
app.component('virtual-list', VirtualList);

app.mount('#app')