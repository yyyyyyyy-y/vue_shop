// 因为遵循的是node.js服务器，使用的是commonJS规范，需要用module.exports导入
module.exports = {
  devServer: { // 必须使用这个名字，这样才会默认使用这个里面的配置表
    host: 'localhost', // 主机
    port: 8080, //  端口，可以更改，但默认是8080，我们也使用8080
    proxy: { //  代理
      '/api': { // 当你访问到api时拦截
        target: 'https://www.imooc.com', // 代理目标，当你拦截到api时，就会跳转到这个网址
        changeOrigin: true, // 是否将主机头的原点设置为url,如果设置成true：发送请求头中host会设置成target·
        pathRewrite: { // 配置地址
          '/api': ''
        }
      }
    }
  }
}
