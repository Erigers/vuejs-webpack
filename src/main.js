// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './routes'


const app = new Vue(Vue.util.extend({
  router,
}, App)).$mount("#app");

export { app, router }
