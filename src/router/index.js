import Vue from 'vue'
import Router from 'vue-router'
import myContent from '@/components/myContent'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'myContent',
      component: myContent
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
  ]
})
