import Vue from 'vue'
import Vuex from 'vuex'
import { menuRouter, childrenRouter } from '../router/router'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    menuList: [...menuRouter.children],
    AllRouter: [...childrenRouter.children, ...menuRouter.children],
    hearderName: '',
    navRouter: JSON.parse(localStorage.getItem('NavRouter')) || [
      {
        name: 'home',
        path: '/home',
        title: '首页'
      }
    ],
    targetRouter: ''
  },
  mutations: {
    // 路由跳转市header跟着变化
    getRouterName (state, payload) {
      let arr = []
      state.AllRouter.forEach(item => {
        arr.push(item)
      })
      let index = arr.find(item => item.name === payload)
      state.hearderName = index.title
    },
    // 设置横向导航条
    setNavRouter (state, payload) {
      let isRouter = state.navRouter.find(item => item.name === payload)
      if (!isRouter) {
        let result = state.AllRouter.find(item => item.name === payload)
        state.navRouter.push(result)
        localStorage.setItem('NavRouter', JSON.stringify(state.navRouter))
      }
    },
    // 点击横向导航关闭
    closeRouter (state, name) {
      let index = state.navRouter.findIndex(item => item.name === name)
      state.navRouter.splice(index, 1)
      localStorage.setItem('NavRouter', JSON.stringify(state.navRouter))
    },
    // 横向滚动条在当前页面关闭时,需要跳转的路由
    getTargetRouter (state, name) {
      let index = state.navRouter.findIndex(item => item.name === name)
      if (index === state.navRouter.length - 1) {
        state.targetRouter = state.navRouter[index - 1].name
      } else {
        state.targetRouter = state.navRouter[index + 1].name
      }
    },
    // 除了首页全部关闭
    clearAllRouter (state) {
      state.navRouter.splice(1)
      localStorage.setItem('NavRouter', JSON.stringify(state.navRouter))
    },
    // 关闭其他触发函数
    clearOutherRouter (state, name) {
      let result = state.navRouter.find(item => item.name === name)
      if (result.name !== 'home') {
        state.navRouter.splice(0, state.navRouter.length, {
          name: 'home',
          path: '/home',
          title: '首页'
        }, result)
      }
    }
  },
  actions: {

  },
  getters: {
    getRouterName (state) {
      return state.hearderName
    }
  }
})
