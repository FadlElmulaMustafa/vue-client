import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Customer',
    component: Home
  },
  {
    path: '/payments',
    name: 'Payments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/invoices',
    name:'Payments',
    component: () => import('../views/Invoices.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
