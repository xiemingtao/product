import Vue from 'vue'

// 注意：需要用到moment包
import moment from 'moment'

// 创建全局过滤器：用来进行日期格式化
Vue.filter('date', (input, format = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(input).format(format)
})
