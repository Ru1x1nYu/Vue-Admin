<template>
	<div>
		<h2>store.vue</h2>
		<a-input @input="handleInput"/>
		{{inputValue}}--》lastLetter is {{inputValueLastLetter}}
		<Ashow :content='inputValue'></Ashow>
		<!-- <p>{{appName}}</p> -->
		<p>{{userName}}</p>
		<p>{{appNameWithVersion}}</p>
		<p>{{userName}}===》firstLetter :{{firstLetter}}</p>
	</div>
</template>

<script>
import AInput from '_C/AInput.vue'
import Ashow from '_C/Ashow.vue'
import { mapState, mapGetters } from 'vuex'
export default {
	name:'store',
	data(){
		return{
			inputValue:''
		}
	},
	methods:{
		handleInput(val){
			this.inputValue=val
		}
	},
	computed:{
		...mapState('user',{
			// appName:state=>state.appName,
			userName:state=>state.userName
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
		// appName(){
		// 	return this.$store.state.appName
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
