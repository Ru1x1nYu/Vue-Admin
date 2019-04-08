import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'
import state from './state'
import mutation from './mutation'
import actions from './actions'
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutation,
	actions: actions,
	modules:{
		user
	}
})
