import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutation from './mutation'
import actions from './actions'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
	mutations: mutation,
	getters:getters,
	actions: actions,
	modules:{
		user
	}
})
