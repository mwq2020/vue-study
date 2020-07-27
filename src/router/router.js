import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

export default new Router({
  routes: [
     {
        path: '',
        redirect: '/home' //路由为空跳转到 /home
      },
      {
          path: '/home',
          component: home
      },
      {
          path: '/user',
          component: user
      },
  ]
})
