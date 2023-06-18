import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/common/layouts/main-layout/main-layout.vue'
import TasksView from '@/modules/tasks/views/tasks-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'tasks',
          component: TasksView
        }
      ]
    }
  ]
})

export default router
