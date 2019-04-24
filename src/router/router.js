
import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/',
    // alias: '/home_page',
		name: 'home',
		meta:{
			title:'首页'
		},
    component: Layout,
    children: [
      {
        path: 'home',
				name: 'home_index',
				meta:{
					title:'响应式布局'
				},
        component: ()=>import('@/views/Home.vue')
      },
      {
        path: 'table',
				name: 'tables',
				meta:{
					title:'表格'
				},
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
				name: 'folder_tree',
				meta:{
					title:'树形结构'
				},
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'form',
				name: 'forms',
				meta:{
					title:'表单'
				},
        component: () => import('@/views/form.vue')
			},
			{
				path:'icon',
				name:'icon_page',
				meta:{
					title:'图标'
				},
				component:()=>import('@/views/icon_page.vue')
			},
			{
				path:'optimize',
				meta:{
					title:'大数据优化'
				},
				name:'optimize',
				component:()=>import('@/views/optimize.vue')
			},
			{
        path: 'params/:name',
        name: 'params',
        meta: {
          title: '参数'
				},
        props: true,
				component: () => import('@/views/argu.vue')
			},
    ]
  },
  {
    path: '/about',
		name: 'about',
		meta:{
			title:'关于'
		},
    component: () => import('@/views/About.vue'),
    props: {
      food: 'apple'
    }
  },

  {
		path: '/named_view',
		name:'name_view',
		meta:{
			title:'视图页面'
		},
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
		path: '/main',
		name:'main',
		meta:{
			title:'MAIN'
		},
    redirect: to => 'home_page'
	},
	{
		path: '/parent',
    // alias: '/home_page',
		// name: 'parents',
		meta:{
			title:'父类与子类'
		},
    component: Layout,
    children: [
			{
				path: '',
				name: 'parent',
				meta:{
					title:'Parent'
				},
				component: () => import('@/views/parent.vue'),
			},
      {
				path: 'child',
				name:'child',
				meta:{
					title:'Child'
				},
        component: () => import('@/views/child.vue')
      }
    ]
	},
	{
		path: '/store',
		name: 'store',
		meta:{
			title:'Store',
			hideInBread: true
		},
    component: Layout,
		children: [
			{
				path: 'store_page',
				name: 'store_page',
				meta:{
					title:'Store'
				},
				component: () => import('@/views/store.vue')
			}
		]
	},
  {
    path: '/count-to',
		name: 'count_to',
		meta:{
			title:'数字渐变'
		},
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
		name: 'split_pane',
		meta:{
			title:'分割窗口'
		},
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render_page',
		name: 'render_page',
		meta:{
			title:'渲染'
		},
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu_page',
		name: 'menu_page',
		meta:{
			title:'菜单'
		},
    component: () => import('@/views/menu-page.vue')
  }

]

export const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
		path: '*',
		meta:{
			title:'404没有找到'
		},
    component: () => import('@/views/404.vue')
  }
]
