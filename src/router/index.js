import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Default',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Default.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard')
      },
      {
        path: '/transfers',
        name: 'Transfers',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/Transfers')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else if (!store.state.auth.token && to.name === 'Login') {
    next()
  } else if (store.state.auth.token && (to.name === 'Login')) {
    next({ name: 'Default' })
  } else {
    next()
  }
})

export default router
