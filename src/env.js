let baseURL
// process.env.NODE_ENV获取node.js进程里的环境变量
switch (process.env.NODE_ENV) {
  // 开发
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  // 测试
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  // 预发布
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api'
    break
  // 线上
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  // 以上的情况都不是
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}

export default {
  baseURL
}
