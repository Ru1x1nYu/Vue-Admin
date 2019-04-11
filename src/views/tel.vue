<template>
	<div>
		tel:15916460933

		<p>{{message}}</p>
	</div>
</template>

<script>
export default {
	data(){
			return{
				message:''
		}
	},
	methods:{

	},
	mounted(){
		this.$bus.$on('on-click',mes=>{
			this.message=mes
		})
	}
}
</script>
