import Vue from 'vue'
import Router from 'vue-router'

// 包含公用头部
import Index from '../pages/Index.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
