<template>
	<div  class="a-menu">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name:'AMenu'
}
</script>

<style lang="scss">
.a-menu{

	ul{
		padding:0;
		margin: 0;
	}
}
*{
	list-style: none;
}
</style>
