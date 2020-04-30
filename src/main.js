import Vue from 'vue';
import App from './App.vue';


// // export const vue =new Vue({
// //     router,
// //     store, // 使用store
// //     render: h => h(App),
// // }).$mount('#app');

// export const vue = new Vue({
//     el: '#app',
//     render: h => h(App),
//   });
// const Vues = require('vue')
export const vue =new Vue({
    render: h => h(App),
  })
  