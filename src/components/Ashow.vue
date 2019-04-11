<template>
	<div>
		<p>Ashow:</p>
		<p>{{content}}</p>
	</div>
</template>

<script>

export default {
	props:{
		content:{
			type:[String,Number],
			default:''
		}
	},

}
</script>
