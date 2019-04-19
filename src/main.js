import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/store'
import iView from 'iview'
import { VTable, VPagination } from 'vue-easytable'
import preview from 'vue-photo-preview'
import Print from 'vue-print-nb'
import 'iview/dist/styles/iview.css'
import 'vue-photo-preview/dist/skin.css'
import 'vue-easytable/libs/themes-base/index.css'
import './assets/index.scss'
import './filters'
// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(Print)
Vue.use(preview)
Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
