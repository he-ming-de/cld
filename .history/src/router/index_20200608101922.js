import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publics from '../views/publics/Publics'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Publics',
    component: Publics,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'detailspage',
        name: 'Detailspage',
        component: ()=> import('../views/detailspage/Detailspage')
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/signin/Signin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
