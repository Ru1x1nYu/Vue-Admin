const state={
	userName:'小余'
}
const getters={
	firstLetter:(state)=>{
		return state.userName.substr(0,1)
	}
}

const mutations={
	//
}

const actions={
	//
}

export default {
	namespaced: true,
	getters,
	state,
	mutations,
	actions
}
