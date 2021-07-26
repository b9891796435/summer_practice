import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../views/Firstweek.vue'

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  },
  {
    path: '/second',
    name: 'Second',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Secondweek.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
