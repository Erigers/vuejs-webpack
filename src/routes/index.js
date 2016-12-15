import Vue from 'vue'
import Router from 'vue-router'
import Landing from './../components/landing'

Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/', component: Landing }
  ]
})
