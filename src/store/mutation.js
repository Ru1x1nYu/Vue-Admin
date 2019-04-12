import Vue from 'vue'


const mutations={
	SET_APP_NAME (state,parmas){
		state.appName=parmas
	},
	SET_APP_VERSION (state){
		Vue.set(state,'appVersion','v2.0')
	},
	SET_STATE_VALUE(state,value){
		state.stateValue=value
	}
}
export default mutations
