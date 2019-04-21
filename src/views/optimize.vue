<template>
	<div class="optimize-wrapper">
		<Card>
			<Select v-model="selectData" style="width:200px">
				<virtual-list :size='30' :remain='6'>
					<Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</virtual-list>
			</Select>
			<Select v-model="selectData" style="width:200px">
				<virtual-list :size='30' :remain='6'>
					<Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</virtual-list>
			</Select>
			<Select v-model="selectData" style="width:200px">
			<virtual-list :size='30' :remain='6'>
					<Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</virtual-list>
			</Select>
			<Select v-model="selectData" style="width:200px">
				<virtual-list :size='30' :remain='6'>
					<Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</virtual-list>
			</Select>
		</Card>
		<Card>
			<CheckboxGroup v-model="checkedArr">
				<virtual-list :size='30' :remain='10'>
					<p style="height:30px" v-for="item in list" :key="`check${item.value}`">
						<Checkbox :label="item.value">
								<Icon type="logo-twitter"></Icon>
								<span>{{item.label}}</span>
						</Checkbox>
					</p>
				</virtual-list>
			</CheckboxGroup>
		</Card>
	</div>
</template>

<script>
import {doCustomTimes} from '@/lib/tools'
import VirtualList from 'vue-virtual-scroll-list'
export default {
	name:'optimize',
	components:{
		VirtualList
	},
	data(){
		return{
			list:[],
			selectData:0,
			checkedArr:[]
		}
	},
	mounted(){
		let list=[]
		doCustomTimes(1000,(index)=>{
			list.push({
				value:index,
				label:`select${index}`
			})
		})
		this.list=list
	}
}
</script>

<style lang="scss" scoped>
.optimize-wrapper{
	// height: 400px;
	// overflow: scroll;
}
</style>
