<template>
	<div>
		<h2>store.vue</h2>
		<a-input v-model="stateValue"/>
		<p>{{stateValue}}--》lastLetter is {{inputValueLastLetter}}</p>
		<p><Ashow :content='inputValue'></Ashow>
		appName:{{appName}}</p>
		<p>userName:{{userName}}</p>
		<p>appNameVersion:{{appNameWithVersion}}</p>
		<p>userName:{{userName}}===》firstLetter :{{firstLetter}}</p>
		<button @click="handleChangeAppname">修改appName</button>
		<P>{{appVersion}}</P>
		<button @click="ChangeUserName">修改用户</button>
		<button @click="registerModule">动态注册模块</button>
		<p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
	</div>
</template>

<script>
import AInput from '_C/AInput.vue'
import Ashow from '_C/Ashow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { stat } from 'fs';
export default {
	name:'store',
	data(){
		return{
			inputValue:''
		}
	},
	methods:{
		...mapMutations([
			'SET_APP_NAME',
			'SET_STATE_VALUE'
		]),
		...mapMutations('user',[
			'SET_USER_NAME'
		]),
		...mapActions([
			'updateAppName'
		]),
		handleInput(val){
			this.inputValue=val
		},
		handleChangeAppname(){
			// this.$store.commit({
			// 	'type':'SET_APP_NAME',
			// 	'appName':'NewAppName'
			// })
			this.SET_APP_NAME('NewAppName')
			// this.$store.commit('SET_APP_VERSION')
			// this.$store.dispatch('updateAppName','123')
			// this.updateAppName()
		},
		ChangeUserName(){
			this.SET_USER_NAME('小新')

			// this.$store.commit('SET_USER_NAME','NewUserName')
		},
		registerModule(){
			this.$store.registerModule('todo',{
				state:{
					todoList:[
						'学习A',
						'学习B'
					]
				}
			})
		},
		// handleStateValueChange(val){
		// 	this.SET_STATE_VALUE(val)
		// }
	},
	computed:{
		...mapState({
			appVersion:state=>state.appVersion,
			todoList:state=>state.todo?state.todo.todoList:[],
		}),
		...mapState('user',{
			// appName:state=>state.appName,
			userName:state=>state.userName,
		}),
		// appNameWithVersion(){
		// 	return this.$store.getters.appNameWithVersion
		// },
		...mapGetters([
			'appNameWithVersion',
			'firstLetter'
		]),
		...mapGetters('user',[
			'firstLetter'
		]),
		stateValue:{
			set(val){
				this.SET_STATE_VALUE(val)
			},
			get(){
				return this.$store.state.stateValue
			}
		},
		appName(){
			return this.$store.state.appName
		},
		// 	appName:{
		// 	set:function(newVal){
		// 		this.inputValue=newVal+'set'
		// 	},
		// 	get:function(){
		// 		return this.inputValue+'Get'
		// 	}
		// },
		// userName(){
		// 	return this.$store.state.user.userName
		// }
		inputValueLastLetter(){
			return this.inputValue.substr(-1,1)
		}
	},
	components:{
		AInput,
		Ashow
	}
}
</script>
