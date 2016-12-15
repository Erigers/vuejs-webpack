// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from './components/landing'

/* eslint-disable no-new */
const routes = [
  { path: '/', component: Landing }
];



new Vue({
  router: new VueRouter({
    routes
  }),
  components: { Landing }
}).$mount('#app');



