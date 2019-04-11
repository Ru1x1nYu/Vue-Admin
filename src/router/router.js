
import Home from '@/views/Home.vue'
export default [
	{
		path: '/',
		alias:'/home_page',
		name: 'home',
		component: Home,
		props:route=>({
			food:route.query.food
		}),
		// beforeEnter: (to, from, next) => {
		// 	if(from.name==='login') alert('登录页来的')
		// 	else alert('这不是登录页来的')
		// 	next()
		// }
		meta:{
			title:'HOME'
		}
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
		props:{
			food:'apple'
		},
		meta:{
			title:'ABOUT'
		}
	},
	{
		path: '/argu/:name',
		name:'argu',
		props:true,
		component: () => import('@/views/argu.vue')
	},
	{
		path: '/named_view',
		components: {
			default: () => import('@/views/child.vue'),
			email: () => import('@/views/email.vue'),
			tel: () => import('@/views/tel.vue')

		}
	},
	{
		path: '/main',
		redirect: to => 'home_page'
	},
	{
		path:'/parent',
		name:'parent',
		component:()=>import('@/views/parent.vue'),
		children:[
			{
			path:'child',
			component:()=>import('@/views/child.vue')
		}
		]
	},
	{
		path:'/login',
		name:'login',
		component:()=>import('@/views/login.vue')
	},



	{
		path:'*',
		component:()=>import('@/views/404.vue')
	}
]
