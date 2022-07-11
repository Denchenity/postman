import { createRouter, createWebHistory } from 'vue-router'
import postman from '../views/postman.vue'

const routes = [
  {
    path: '/',
    name: 'postman',
    component: postman
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
