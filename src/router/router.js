import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HubView from '@/views/HubView.vue'
import ExtraView from '@/views/ExtraView.vue'
import CourseView from '@/views/CourseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeCenter',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'Hub',
          component: HubView,
        },
        {
          path: ':courseTypeName',
          name: 'Course',
          component: CourseView,
          children: [
            {
              path: ':courseLevel',
              name: 'CourseLevel',
              component: CourseView,
            }
          ]
        }
      ]
    },
  ]
})

export default router
