import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useUserStore } from '@/stores/user'

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if (user) {
      next();
  } else {
      next("/login");
  }
  userStore.loading = false;
};

const requireNoAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if (user) {
      next("/about");
  } else {
      next();
  }
  userStore.loading = false;
};

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: process.env.NODE_ENV === 'production' ? createWebHistory() : createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      // beforeEnter: requireAuth,
      // component: HomeView
    },
    {
      path: '/savedlinks',
      name: 'savedlinks',
      component: () => import('../views/SavedLinks.vue'),
      // beforeEnter: requireNoAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: requireNoAuth,
    },{
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      beforeEnter: requireNoAuth,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/editlink/:id',
      name: 'editlink',
      component: () => import('../views/EditLink.vue'),
      beforeEnter: requireAuth,
    },    
    {
      path: '/cssexperiment',
      name: 'cssexperiment',
      component: () => import('../views/CssExperimentView.vue'),
      beforeEnter: requireAuth,
    }
  ]
})

export default router
