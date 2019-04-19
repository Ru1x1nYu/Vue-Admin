import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import('@/views/table.vue')
      },
      {
        path: '/folder_tree',
        name: 'folder_tree',
        component: () => import('@/views/folder-tree/folder-tree.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue'),
    props: {
      food: 'apple'
    },
    meta: {
      title: 'ABOUT'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    props: true,
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
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render_page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },

  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
