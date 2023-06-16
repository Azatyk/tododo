import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/common/layouts/main-layout/main-layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout
    }
  ]
})

export default router
