import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

Vue.use(VueAxios, axios)// 把axios对象挂载上去
// 只使用axios时，每个页面都得导入，很麻烦，而vue-axios把作用域对象挂载到
// vue实例上面去，方便用this调用
// 根据前端跨域做调整，我们先暂时采取代理的方式
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 6000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data // 获取接口的整个信息（包括status，data，msg）
  if (res.status === 0) { // 登陆成功的状态码为0
    return res.data // 获取接口信息的data
  } else if (res.status === 10) { // 未登录的状态码为10（自己设定）
    window.location.href = '/#/login' // 直接跳转页面到login登陆页面，
    // 不能用路由的方式，因为这是main.js文件不是vue
  } else {
    alert(res.msg) //  否则报错，输出错误msg信息
  }
})

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL

Vue.config.productionTip = false// 生产环境的提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
