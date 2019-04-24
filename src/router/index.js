import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './router'
import { setTitle, getToken, setToken } from '@/lib/utils'
import store from '@/store'
import iView from 'iview'
import clonedeep from 'clonedeep'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

const HAS_LOGINED = true



router.beforeEach((to, from, next) => {
	iView.LoadingBar.start()
  // next()
	// to and from are both route objects. must call `next`.
	console.log(to.meta.title);
	to.meta && setTitle(to.meta.title)

  // if (to.meta.titlle) { to.meta && setTitle(to.meta.title) }
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) next()
  //   else next({ name: 'login' })
  // } else {
  //   if (HAS_LOGINED) next({ name: 'home' })
  //   else next()
  // }

  //   const token = getToken()
  //   if (token) {
  //     store.dispatch('user/authorization', token).then(() => {
  //       if (to.name === 'login') {
  //         next({ name: 'home' })
  //       } else {
  //         next()
  //       }
  //     }).catch(() => {
  //       setToken('')
  //       next({ name: 'login' })
  //     })
  //   } else {
  //     if (to.name === 'login') {
  //       next()
  //     } else {
  //       next({ name: 'login' })
  //     }
  //   }

  const token = getToken()
  if (token) {
    // 存在token，使之获得路由规则
    if (!store.state.router.hasGetRules) {
      store.dispatch('user/authorization').then(rules => {
        store.dispatch('router/concatRoutes', rules).then(routers => {
					// console.log(routers);
          router.addRoutes(clonedeep(routers))
          next({ ...to, replace: true })
        }).catch(() => {
          next({ path: '/login' })
        })
      }).catch(() => {
        setToken('')
        next({ name: 'login' })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') next()
		else next({ name: 'login' })
  }
})

// router.brforeResolve
router.afterEach((to, from) => {
  // to and from are both route objects.
	// logining = false
	setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

/**
 * 1 导航被触发
 * 2 在失活的租价（即将离开的页面组件）里调用beforeRouteLeave
 * 3 调用全局前置守卫 beforEach
 * 4 在重用的组件里调用 beforeRouteUpdate
 * 5 调用路由独享的守卫 beforeEnter
 * 6 解析异步路由组件
 * 7 在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
 * 8 调用全局的解析首位 beforeResolve（导航确认之前，路由组件解析之后）
 * 9 导航被确认
 * 10 确认之后调用全局的后置守卫 afterEach
 * 11 触发DOM更新
 * 12 用创建好的实例调用beforeRouterEnter 守卫里传给next的回调函数
 */
export default router
