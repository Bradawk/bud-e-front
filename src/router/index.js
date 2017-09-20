import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Thing from '@/components/Thing'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/thing/:id',
      name: 'Thing',
      component: Thing
    }
  ]
})
