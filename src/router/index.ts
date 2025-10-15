import { createRouter, createWebHistory } from 'vue-router'
import RocketList from '@/pages/RocketList.vue'
import RocketDetail from '@/pages/RocketDetail.vue'

const routes = [
  { path: '/', component: RocketList },
  { path: '/rocket/:id', component: RocketDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
