import Vue from 'vue'
import Router from 'vue-router'
//import routes from './router'

Vue.use(Router)
// export default new Router({
//   routes
// })

/*
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
*/
const _import = file => resolve => require([`@/page/${file}`], resolve)

export default new Router({
  routes:[
    // 地址为空时跳转movie页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      //name: 'Home',
      component: _import('home/home')
    },
    // 电影
    {
      path: '/user',
      //name: 'User',
      component: _import('user/user')
    },
    {
      path: '*',
      component: resolve => require(['@/components/notfound'], resolve)
    }
  ]
})
