import { createRouter, createWebHistory } from 'vue-router'
import CountDownTimer from '../components/CountDownTimer.vue'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/countdown',
      component: CountDownTimer
    },
    {
      path: '/',
      component: Home
    }
  ],
})

export default router
