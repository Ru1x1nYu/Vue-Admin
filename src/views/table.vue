	<template>
		<div>
			<!-- <edit-table :columns='columns' v-model='tableData' @on-edit='handleEdit'></edit-table> -->
			<edit-table-mul :columns='columns' v-model='tableData'></edit-table-mul>
			<Button @click="turnTo">打开参数页</Button>
		</div>
	</template>

	<script>
	import{getTableData} from '@/api/data'
	import EditTable from '_C/edit-table'
	import EditTableMul from '_C/edit-table-mul'
	export default {
		name:'tables',
		components:{
			EditTable,
			EditTableMul
		},
		data(){
			return{
				tableData:[],
				columns:[
					{key:'name',title:'姓名'},
					{key:'age',title:'年龄',edittable:true},
					{key:'email',title:'邮箱',edittable:true},
				]
			}
		},
		mounted(){
			getTableData().then(res=>{
				this.tableData=res

			})
		},
		methods:{
			handleEdit({row ,index ,column ,newVal}){
				console.log({row ,index ,column ,newVal});
			},
			turnTo(){
				let name='params'+(Math.random()*100).toFixed(0)
				this.$router.push({
					name:'params',
					params:{
						name
					}
				})
			}
		}
	}
	</script>

	<style lang="scss" scoped>

	</style>
