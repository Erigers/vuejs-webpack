// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from './components/landing'
import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
      { path: '/', component: Landing }
    ]
});

const app = new Vue(Vue.util.extend({
  router,
}, App)).$mount("#app");

export { app, router }
