import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Enroll from '@/components/reg'
import Forge from '@/components/forge'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:"/reg",
      name:'reg',
      component:Enroll
    },
    {
      path:'/forge',
      name:'forge',
      component:Forge
    }
  ]
})
