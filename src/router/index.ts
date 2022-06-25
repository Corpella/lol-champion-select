import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: "/champ-select"
    // component: Home
  },
  {
    path: '/champ-select',
    name: 'ChampionSelect',
    component: () => import('@/views/ChampionSelect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
