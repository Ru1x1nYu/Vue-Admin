<template>
	<div>
		<h1>Count-To</h1>
		<count-to :end-val='endVal' ref="countTo" @on-animation-end="handleEnd" >
			<span slot="left">温度</span>
			<span slot="right">°C</span>
		</count-to>
		<button @click="getNumber()">获取数值</button>
		<button @click="changNumber()">改变数值</button>
	</div>
</template>

<script>
import CountTo from '_C/count-to'
export default {
	name:'count_to',
	components:{
		CountTo
	},
	data(){
		return{
			endVal:100,
		}
	},
	methods:{
		getNumber(){
			this.$refs.countTo.getCount()
		},
		changNumber(){
			this.endVal+=Math.random()*100
		},
		handleEnd(endVal){
			console.log('end',endVal);
		}
	}
}
</script>
