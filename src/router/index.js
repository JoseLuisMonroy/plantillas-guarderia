import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/padre',
    name: 'padre',
    component: () => import(/* webpackChunkName: "padres" */ '../views/padreView.vue')
  },
  {
    path: '/maestro',
    name: 'maestro',
    component: () => import(/* webpackChunkName: "maestro" */ '../views/MaestroView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
