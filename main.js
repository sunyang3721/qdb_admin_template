import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'font-awesome/css/font-awesome.css'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

// 跨域问题
import axios from 'axios'
Vue.prototype.$axios = axios
import qs from 'qs'
Vue.prototype.$qs = qs
//       axios.interceptors.request.use(function (config) {
//         // Do something before request is sent
//         console.log('开始请求')
//         console.log(`请求地址: ${config.url}`)
//         return config
//       }, function (error) {
//         // Do something with request error
//         console.log('请求失败')
//         return Promise.reject(error)
//       })
//       axios.interceptors.response.use(function (config) {
//         // Do something before request is sent
//         console.log('接收响应')
//         return config
//       }, function (error) {
//         // Do something with request error
//         console.log('响应出错')
//         return Promise.reject(error)
//       })
//

import '@/icons' // icon
import '@/permission' // permission control 权限控制

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.directive('loadmore', {
  bind(el, binding) {
    const selectWrap = el.querySelector('.el-table__body-wrapper')
    selectWrap.addEventListener('scroll', function() {
      const sign = 0
      const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
      if (scrollDistance <= sign) {
        binding.value()
      }
    })
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
