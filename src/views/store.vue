<template>
	<div>
		<h2>store.vue</h2>
		<a-input @input="handleInput"/>
		{{inputValue}}
		<Ashow :content='inputValue'></Ashow>
	</div>
</template>

<script>
import AInput from '_C/AInput.vue'
import Ashow from '_C/Ashow.vue'
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
	components:{
		AInput,
		Ashow
	}
}
</script>
