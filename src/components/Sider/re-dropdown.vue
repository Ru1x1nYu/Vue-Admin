<template>
	<Dropdown @on-click='handleClick' placement="right-start">
		<span class="drop-menu-span" :style="titleStyle">
			<Icon :type="parent.icon" :size="30" :color="iconColor"></Icon>
			<span v-if="showTitle">{{parent.title}}</span>
		</span>
		<DropdownMenu slot="list">
			<template v-for="item in parent.children">
				<re-dropdown
					v-if="item.children"
					:key="`drop_${item.name}`"
					:parent="item"
				>
				</re-dropdown>
				<DropdownItem
					v-else
					:key="`drop_${item.name}`"
					:name="item.name"
				>
					<Icon :type="item.icon" :size="30" color="#515a6e"></Icon>
					{{item.title}}
				</DropdownItem>
			</template>
		</DropdownMenu>
	</Dropdown>
</template>

<script>
export default {
	name:'ReDropdown',
	props:{
		parent:{
			type:Object,
			default:()=>({})
		},
		iconColor:{
			type:String,
			default:"#515a6e"
		},
		showTitle:{
			type:Boolean,
			default:true
		}
	},
	computed:{
		titleStyle(){
			return{
				textAlign:this.showTitle?'left':'center',
				paddingLeft:this.showTitle?'20px':''
			}
		}
	},
	methods:{
		handleClick(name){
			if(this.showTitle){
				this.$emit('on-select',name)
			}
		}
	}
}
</script>

<style lang="scss" scoped>

.ivu-dropdown-menu{
	min-width: 130px;
}
.drop-menu-span{
	cursor: pointer;
}
</style>
