<template>
	<li class="a-menu-item">
			<slot></slot>
	</li>
</template>

<script>
export default {
	name:'AMenuItem'
}
</script>

<style lang="scss" scoped>
.a-menu-item{
	background-color: rgb(192, 180, 230);
}
</style>
