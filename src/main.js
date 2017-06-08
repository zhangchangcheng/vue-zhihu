// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import {
  Swipe,
  SwipeItem,
  Lazyload,
  Spinner,
  Popup,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Loadmore
} from 'mint-ui'

import './assets/sass/main.scss'
import './assets/font/iconfont.css'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Lazyload)
Vue.use(InfiniteScroll)

Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Popup.name, Popup)

// 全局方法（加 $ 前缀区别）
Vue.prototype.$MessageBox = MessageBox
Vue.prototype.$Toast = Toast
Vue.prototype.$Indicator = Indicator

sync(store, router, { moduleName: 'route' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
