import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/index.scss'
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import { VTable, VPagination } from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
