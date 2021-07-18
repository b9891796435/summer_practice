import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../views/Firstweek.vue'

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
