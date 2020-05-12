import Vue from 'vue'
import App from './App.vue'
import router from './router'

export const vue = new Vue({
  // store, // 使用store
  router,
  render: (h) => h(App)
}).$mount('#app')
