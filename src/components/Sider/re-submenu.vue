<template>
	<Submenu :name='parent.name' accordion>
		<template slot="title">
				<Icon :type="parent.icon"  size="26"/>
				<span >{{parent.title}}</span>
		</template>
		<template v-for="item in parent.children">
				<re-submenu
					v-if="item.children"
					:key="`menu_${item.name}`"
					:name="item.name"
					:parent="item"
				>
					<menu-item></menu-item>
				</re-submenu>
				<menu-item
					v-else
					:key="`menu_${item.name}`"
					:name="item.name"
				>
				<Icon :type="item.icon" size="26"/>
				{{item.title}}
				</menu-item>
			</template>
	</Submenu>
</template>

<script>

export default {
	name:'ReSubmenu',
	props:{
		parent:{
			type:Object,
			default:()=>({})
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
