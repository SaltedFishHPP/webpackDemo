import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: resolve => require(['@/pages/home'], resolve), // 路由懒加载,
    children: [
      {
        name: '页面A',
        path: '/pageA',
        component: resolve => require(['@/pages/pageA'], resolve)
      },
      {
        name: '页面B',
        path: '/pageB',
        component: resolve => require(['@/pages/pageB'], resolve)
      }
    ]
  }
]

const routerConfig = process.env.NODE_ENV === 'development' ? require('./dev.js') : require('./prod.js')

export default new VueRouter({
  mode: routerConfig.mode,
  routes // (缩写) 相当于 routes: routes
})
