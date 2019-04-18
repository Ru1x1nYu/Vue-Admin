<template>
		<Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
	name:'EditTable',
	props:{
		columns:{
			type:Array,
			default:()=>[]
		},
		value:{
			type:Array,
			default:()=>[]
		}
	},
	data(){
		return{
			insideColumns:[],
			edittingId:'',
			edittingContent:''
		}
	},
	methods:{
		handleClick({row,index,column}){

			if(this.edittingId===`${column.key}_${index}`){
				//保存
				if(this.edittingContent==='') this.edittingContent=row[column.key]
				let tableData=clonedeep(this.value)
				tableData[index][column.key]=this.edittingContent
				this.$emit('input',tableData)
				this.$emit('on-edit',{row ,index ,column ,newVal:this.edittingContent})
				this.edittingId=''
				this.edittingContent=''
			}else{
				//编辑
				this.edittingId=`${column.key}_${index}`
			}

		},
		handlInput(newVal){
			if(newVal) this.edittingContent=newVal
		},
		handleColums(){
			const insideColumns = this.columns.map(item => {
			if (!item.render && item.edittable) {
				item.render = (h, { row, index, column }) => {
					const isEditting=(this.edittingId===`${column.key}_${index}`)
					return(
						<div>
							{isEditting?
							<i-input value={row[column.key]} style="width:50px;" on-input={this.handlInput}></i-input>
							:<span>{row[column.key]}</span>
							}
							<i-button on-click={this.handleClick.bind(this,{ row, index, column })}>{isEditting?'保存':'编辑'}</i-button>
						</div>
					)
				}
				console.log('return item');
				return item
			}else {
				console.log('item');
				return item
			}
		})
		this.insideColumns=insideColumns
		}
	},
	watch:{
		columns(){
			this.handleColums()
		}
	},
	mounted(){
		this.handleColums()
	}
}
</script>

<style lang="scss" scoped>

</style>
