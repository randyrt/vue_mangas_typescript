import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Mangas from '@/views/Mangas.vue'
import Actus from '@/views/Actus.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mangas',
      name: 'Mangas',
      component: Mangas
    },
    {
      path: '/manga/:id',
      name: 'Manga',
      component: () => import('@/components/Manga.vue')
      },
     {
      path: '/actus',
      name: 'Actus',
      component: Actus
    }
  ]
})

export default router

