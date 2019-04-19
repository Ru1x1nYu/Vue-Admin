<template>
	<div class="layout-wrapper">
		<Layout class="layout-outer">
			<Sider
				collapsible
				v-model="collapsed"
				hide-trigger
				breakpoint="sm"
				width='300'
			>
				<!-- 菜单列表 -->
				<side-menu
					:collapsed="collapsed"
					:list="menuList"
				>
					<p slot="logo">LOGO</p>
				</side-menu>
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
import SideMenu from '_C/Sider'
export default {
	data(){
		return {
			collapsed:false,
			menuList:[
				{
					title:'111111',
					name:'menu1',
					icon:'ios-alarm'
				},
				{
					title:'222222',
					name:'menu2',
					icon:'ios-alarm'
				},
				{
					title:'3',
					name:'menu3',
					icon:'ios-alarm',
					children:[
						{
							title:'3-1',
							name:'menu31',
							icon:'ios-alarm'
						},
						{
							title:'3-2',
							name:'menu32',
							icon:'ios-alarm',
							children:[
								{
									title:'3-2-1',
									name:'menu321',
									icon:'ios-alarm'
								},
								{
									title:'3-2-2',
									name:'menu322',
									icon:'ios-alarm'
								},
							]
						},
						{
							title:'3-3',
							name:'menu33',
							icon:'ios-alarm',
							children:[
								{
									title:'3-3-1',
									name:'menu331',
									icon:'ios-alarm'
								},
								{
									title:'3-3-2',
									name:'menu332',
									icon:'ios-alarm'
								},
							]
						},
					]
				},
				{
					title:'44',
					name:'menu4',
					icon:'ios-alarm'
				},
				{
					title:'5',
					name:'menu5',
					icon:'ios-alarm',
					children:[
						{
							title:'5-1',
							name:'menu51',
							icon:'ios-alarm'
						}
					]
				}
			]
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
	},
	components:{
		SideMenu
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
	.ivu-menu-item{
		position: relative;
		.menu-item{
			position: absolute;
			top: 0;
			left: 0;
			}
	}
}
</style>
