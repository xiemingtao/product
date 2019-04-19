
import Main from '@/views/Main.vue'
export const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
}
export const page404 = {
  path: '/page_404',
  name: 'page_404',
  component: () => import(/* webpackChunkName: "error" */ '@/views/error/404.vue')
}
export const menuRouter = {
  path: '/',
  name: 'Main',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: '/home',
      name: 'home',
      title: '首页',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
    },
    {
      path: '/product_list',
      name: 'product_list',
      title: '商品管理',
      component: () => import(/* webpackChunkName: "ProductManage" */ '@/views/ProductManage/ProductList.vue')
    },
    {
      path: '/package_management',
      name: 'package_management',
      title: '套餐管理',
      component: () => import(/* webpackChunkName: "Package_management" */ '@/views/Package_management/Package_management.vue')
    },
    {
      path: '/holiday',
      name: 'holiday',
      title: '节日管理',
      component: () => import(/* webpackChunkName: "holiday" */ '@/views/holiday/holiday.vue')
    },
    {
      path: '/classify_list',
      name: 'classify_list',
      title: '分类管理',
      component: () => import(/* webpackChunkName: "product_classify" */ '@/views/product_classify/classify_list.vue')
    },
    {
      path: '/order_list',
      name: 'order_list',
      title: '订单列表',
      component: () => import(/* webpackChunkName: "order_manage" */ '@/views/order_manage/order_list.vue')
    },
    {
      path: '/coupon',
      name: 'coupon',
      title: '优惠券',
      component: () => import(/* webpackChunkName: "activity_manage" */ '@/views/activity_manage/Coupon.vue')
    },
    {
      path: '/voucher',
      name: 'voucher',
      title: '兑换券',
      component: () => import(/* webpackChunkName: "activity_manage" */ '@/views/activity_manage/voucher.vue')
    }
  ]
}
export const childrenRouter = {
  path: '/',
  name: 'Main',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: '/add_product',
      name: 'add_product',
      title: '添加商品',
      component: () => import(/* webpackChunkName: "ProductManage" */ '@/views/ProductManage/components/add_product.vue')
    },
    {
      path: '/order_details',
      name: 'order_details',
      title: '订单详情',
      component: () => import(/* webpackChunkName: "order_manage" */ '@/views/order_manage/components/order_details.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      title: '发货',
      component: () => import(/* webpackChunkName: "order_manage" */ '@/views/order_manage/components/delivery.vue')
    },
    {
      path: '/product_classify',
      name: 'product_classify',
      title: '添加分类',
      component: () => import(/* webpackChunkName: "product_classify" */ '@/views/product_classify/components/product_classify.vue')
    },
    {
      path: '/add_holiday',
      name: 'add_holiday',
      title: '添加节日',
      component: () => import(/* webpackChunkName: "holiday" */ '@/views/holiday/components/add_holiday.vue')
    },
    {
      path: '/add_package',
      name: 'add_package',
      title: '添加套餐',
      component: () => import(/* webpackChunkName: "holiday" */ '@/views/Package_management/components/add_package.vue')
    },
    {
      path: '/add_voucher',
      name: 'add_voucher',
      title: '添加兑换券',
      component: () => import(/* webpackChunkName: "voucher" */ '@/views/activity_manage/components/add_voucher.vue')
    }
  ]
}
export const routes = [
  menuRouter,
  childrenRouter,
  loginRouter,
  page404
]
