import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/kaikei',
    name: 'kaikei',
    component: () => import(/* webpackChunkName: "about" */ '../views/kaikei.vue')
  },
  {
    path: '/addmember',
    name: 'addmember',
    component: () => import(/* webpackChunkName: "about" */ '../views/addmember.vue')

  },
  {
    path: '/shinsei',
    name: 'shinsei',
    component: () => import(/* webpackChunkName: "about" */ '../views/shinseiform.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
