import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/pages/home'

Vue.use(VueRouter)

const routes = [
  // 设置默认路径页面
  {
    path: '/',
    redirect: to => {
      return '/home'
    }
  },
  {
    name: '首页',
    path: '/home',
    component: home,
    children: [
      {
        name: '页面A',
        path: '/pageA',
        component: resolve => require(['@/pages/pageA'], resolve) // 路由懒加载
      },
      {
        name: '页面B',
        path: '/pageB',
        component: resolve => require(['@/pages/pageB'], resolve)
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history', // 将路由模式切换为history（去除#），需要设置默认路径页面
  routes // (缩写) 相当于 routes: routes
})

export default router
