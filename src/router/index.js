import Vue from 'vue'// 引入vue
import VueRouter from 'vue-router'
// 声明使用vue-router

import layout from '@/views/layout/layout'// 引入vue-router

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('@/views/products/products')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/detail/detail')
      }
    ]
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart')
  },

  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/order'),
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../views/orderConfirm/orderConfirm')
      },
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../views/orderList/oderList')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../views/orderPay/orderPay')
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: () => import('../views/aliPay/aliPay')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login')
  }
]

const router = new VueRouter({ // 声明我们写的路由
  routes
})

export default router// 导出我们写的路由
