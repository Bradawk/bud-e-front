import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Thing from '@/components/Thing'
import AdminPage from '@/components/AdminPage'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import auth from '../auth/index'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/thing/:id',
      name: 'Thing',
      component: Thing
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/admin',
      component: AdminPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
