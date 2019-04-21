<template>
	<Form
		ref="form"
		v-if='config'
		:label-width='80'
		:model='valueData'
		:rules='ruleData'
	>
		<FormItem
			:key="`${_uid}`"
			label-position='left'
			:prop='config.name'
			:error='errorData[config.name]'
			:label='config.label'
			@click.native="handleFocus(config.name)"
		>
			<component
				:is='config.type'
				:range='config.range'
				v-model="valueData[config.name]"

			>
				<template v-if="config.children">
				<component
					v-for='(child, i) in config.children.list'
					:is="config.children.type"
					:key="`${_uid}_${i}`"
					:value='child.value'
					:label='child.label'
				>
					{{child.title}}
				</component>
				</template>
			</component>
		</FormItem>

	</Form>
</template>

<script>
export default {
	name:'FormSingle',
	props:{
		valueData:{
			type:Object,
			default:()=>({})
		},
		ruleData:{
			type:Object,
			default:()=>({})
		},
		errorData:{
			type:Object,
			default:()=>({})
		},
		config:{
			type:Object
		}
	},
	methods:{
		handleFocus(name){
			this.errorData[name]=''
		},
		validate(callback){
			this.$refs.form.validate(valid=>{
				callback(valid)
			})
		}

	}
}
</script>

<style lang="scss" scoped>

</style>
