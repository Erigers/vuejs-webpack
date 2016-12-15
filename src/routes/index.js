import Vue from 'vue'
import Router from 'vue-router'
import Landing from './../components/landing'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Landing }
  ]
})
