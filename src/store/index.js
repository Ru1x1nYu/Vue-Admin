import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutation from './mutation'
import actions from './actions'
import user from './module/user'
import savaInLocal from './plugin/saveInLocal'

Vue.use(Vuex)
export default new Vuex.Store({
	strict:process.env.NODE_ENV ==='development',
	namespaced: true,
  state: state,
	mutations: mutation,
	getters:getters,
	actions: actions,
	modules:{
		user
	},
	// plugins:[ savaInLocal ]
})
