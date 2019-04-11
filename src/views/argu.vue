<template>
	<div>
		{{name}}
	</div>
</template>

<script>
export default {
	props:{
		name:{
			type:[String,Number],
			default:'小余'
		}
	},
	beforeRouteUpadate(to,from,next){
		
	}
}
</script>

<style lang="sass" scoped>

</style>
