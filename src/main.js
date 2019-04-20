import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// if (process.env.NODE_ENV !== 'production') {
//   require('./mock')
// }
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
