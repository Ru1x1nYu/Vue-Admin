<template>
	<Form
		ref="form"
		v-if='Object.keys(valueList).length'
		:label-width='labelWidth'
		:model='valueList'
		:rules='rules'
	>
		<FormItem
			v-for="(item,index) in list"
			:key="`${_uid}_${index}`"
			label-position='left'
			:prop='item.name'
			:error='erroStore[item.name]'
			:label='item.label'
			@click.native="handleFocus(item.name)"
		>
			<component
				:is='item.type'
				:range='item.range'
				v-model="valueList[item.name]"

			>
				<template v-if="item.children">
				<component
					v-for='(child, i) in item.children.list'
					:is="item.children.type"
					:key="`${_uid}_${index}_${i}`"
					:value='child.value'
					:label='child.label'
				>
					{{child.title}}
				</component>
				</template>
			</component>
		</FormItem>
		<FormItem>
			<Button type="primary" @click='handleSubmit'>提交</Button>
			<Button @click="handleReset">重置</Button>
		</FormItem>
	</Form>
</template>

<script>
import { sentFormData } from "@/api/data";
import clonedeep from 'clonedeep'
export default {
	name:'FormGroup',
	data(){
		return{
			initValueList:[],
			rules:{},
			valueList:{},
			erroStore:{}
		}
	},
	props:{
		list:{
			type:Array,
			default:()=>[]
		},
		labelWidth:{
			type:Number,
			default:100
		},
		url:{
			type:String,
			required:true
		}
	},
	watch:{
		list(){
		this.setInitValue()
		}
	},
	methods:{
		setInitValue(){
			let erroStore={}
			let rules={}
			let valueList={}
			let initValueList={}
			this.list.forEach(item=>{
				rules[item.name]=item.rule
				valueList[item.name]=item.value
				initValueList[item.name]=item.value
				erroStore[item.name]=''
			})
			this.rules=rules
			this.valueList=valueList
			this.initValueList=initValueList
			this.erroStore=erroStore
		},
		handleReset(){
			this.valueList=clonedeep(this.initValueList)
		},
		handleSubmit(){
			this.$refs.form.validate(valid=>{
				if(valid){
					sentFormData({
						url:this.url,
						data:this.valueList
					}).then(res=>{
						this.$emit('on-submit-success',res)
					}).catch(err=>{
						console.log(err);
						this.$emit('on-submit-error',err)
						for(let key in err){
							this.erroStore[key]=err[key]
						}
					})
				}
			})
		},
		handleFocus(name){
			this.erroStore[name]=''
		}

	},
	mounted(){
		this.setInitValue()
	}
}
</script>

<style lang="scss" scoped>

</style>
