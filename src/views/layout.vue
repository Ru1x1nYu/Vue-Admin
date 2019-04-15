<template>
	<div class="layout-wrapper">
		<Layout class="layout-outer">
			<Sider collapsible v-model="collapsed" hide-trigger breakpoint="sm">
				<!-- 菜单列表 -->
			</Sider>
			<Layout>
				<Header class="header-wrapper">
					<Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerTranslate"></Icon>
				</Header>
				<Content class="content-wrapper">
					<Card shadow class="page-card">
							<router-view></router-view>
					</Card>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script>
export default {
	data(){
		return {
			collapsed:false
		}
	},
	computed:{
		triggerTranslate(){
			return[
				'trigger-icon',
				this.collapsed?'rotate':''
			]
		}
	},
	methods:{
		handleCollapsed(){
			this.collapsed=!this.collapsed
		}
	}
}
</script>

<style lang="scss" scoped>
.layout-wrapper{
	height: 100%;
	.layout-outer{
		height: 100%;
		.header-wrapper{
			background-color: #fff;
			box-shadow: 0 1px 1px rgba(0, 0, 1, 0.1);
			padding: 0 24px;
			.trigger-icon{
				cursor: pointer;
				transition: transform 0.4 ease ;
			}
			.rotate{
				transform: rotate(-90deg);
				transition: transform 0.4 ease ;
			}
		}
		.content-wrapper{
			padding: 10px;
			.page-card{
				min-height: calc(100vh - 84px)
			}
		}
	}
}
</style>
