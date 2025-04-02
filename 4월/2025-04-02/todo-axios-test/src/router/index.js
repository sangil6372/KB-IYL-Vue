import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
// import All from '../pages/All.vue'
// import Get from '../pages/Get.vue'
// import Post from '../pages/Post.vue' 안해도 되나 ?

// Routing TABLE
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/all',
      name: 'all',
      // Lazy Loading 
      component: () => import('../pages/All.vue'),
    },
    {
      path: '/get/:id?',
      name: 'get',
      component: () => import('../pages/Get.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../pages/Post.vue'),
    },
  


  ],
})

export default router
