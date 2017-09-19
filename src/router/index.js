import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import thingForm from '@/components/forms/thingForm'

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
      component: thingForm
    }
  ]
})
