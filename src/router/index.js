import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import { routes } from './router'
import Cookies from 'js-cookie'
Vue.use(Router)
export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to) => {
  iView.LoadingBar.finish()
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 路由登陆判断1首先判断Cookie中是否有用户信息,如果有并且前往的页面
  if (to.name === 'login') {
    next()
    // eslint-disable-next-line no-useless-return
    return
  }
  if (Cookies.get('user')) {
    next()
  } else if (!Cookies.get('user') || to.name !== 'login') {
    next({
      name: 'login'
    })
  }
  // if (!to.name) {
  //   next({
  //     name: 'page_404'
  //   })
  // }
})
