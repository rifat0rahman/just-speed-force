import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/landing.vue'
import About from '../views/about.vue'
import Team from '../views/team.vue'
import Progress from '../views/progress.vue'
import Research from '../views/research.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress,
    },
    {
      path: '/research',
      name: 'research',
      component: Research,
    },

  ],
})

export default router
