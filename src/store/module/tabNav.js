import {routeHasExist} from '@/lib/utils'
const state={
	tabList:[]
}

const mutations={
	UPDATE_ROUTER(state,route){
		if(!routeHasExist(state.tabList,route)){
		state.tabList.push(route)
		}
	}
}

const actions={
	//
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
