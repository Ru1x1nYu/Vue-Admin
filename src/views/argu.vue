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
	beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
    next()
  }
}
</script>

<style lang="sass" scoped>

</style>
