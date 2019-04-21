<template>
	<div class="icon-page-wrapper">
		<Icon type="ios-bug" :size='70' color='purple'/>
		<i class="iconfont smile">&#xe6a6;</i>
		<svg class="iconfont-svg" aria-hidden="true" style="fontSize:70px">
    	<use xlink:href="#icon-privacy_closed"></use>
		</svg>
		<svg class="iconfont-svg" aria-hidden="true" style="fontSize:70px">
    	<use xlink:href="#icon-Autoconcretemixer"></use>
		</svg>
		<i class="iconfont icon-night smile"></i>
		<Icon custom='iconfont icon-night smile'></Icon>
		<icon-font icon='call' :size='50' color='green'></icon-font>
		<icon-svg icon='restore' :size='70' color="green"></icon-svg>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.icon-page-wrapper{
	.smile{
		color:red;
		font-size:70px
	}
}
</style>
