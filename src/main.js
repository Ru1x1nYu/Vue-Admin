import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}
import '@/assets/fonts/iconfont.js'
import '@/assets/fonts/iconfont.css'
import IconFont from '_C/icon-font'
import IconSvg from '_C/icon-svg'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)
Vue.component('icon-font',IconFont)
Vue.component('icon-svg',IconSvg)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
