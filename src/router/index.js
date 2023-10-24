// router/index.js
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
      next("/");
  } else {
      next();
  }
  userStore.loading = false;
};

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: process.env.NODE_ENV === 'production' ? createWebHistory('/fbvue3-exp/') : createWebHashHistory(),
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
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue'),
      beforeEnter: requireNoAuth,
    },{
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      beforeEnter: requireNoAuth,
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
      // beforeEnter: requireAuth,
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/urlcollection',
      name: 'urlcollection',
      component: () => import('../views/UrlCollection.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/editurlcollection:id',
      name: 'editurlcollection',
      component: () => import('../views/EditUrlCollection.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/editblog/:id',
      name: 'editblog',
      component: () => import('../views/EditBlog.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/myblogposts',
      name: 'myblogposts',
      component: () => import('../views/MyBlogPosts.vue'),
      beforeEnter: requireAuth,
    },
  ]
})

export default router
