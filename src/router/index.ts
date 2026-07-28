import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue';
import CountDown from '../pages/count-down.vue';
import Posts from '../pages/posts.vue';
import PostDetail from '../pages/post-detail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/countdown',
      component: CountDown
    },
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      component: PostDetail
    },
    {
      path: '/',
      component: Home
    }
  ],
})

export default router
