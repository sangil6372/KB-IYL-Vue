import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
   /* 소개 페이지 */
   {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },

  /* 할 일 목록 페이지 */
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../pages/TodoList.vue'),
  },

  /* 할 일 추가 페이지 */
  {
    path: '/todos/add',
    name: 'addTodo',
    component: () => import('../pages/AddTodo.vue'),
  },

  /* 할 일 상세 페이지 */
  {
    path: '/todos/:id',
    name: 'editTodo',
    component: () => import('../pages/EditTodo.vue'),
  },
  ],
})

export default router
