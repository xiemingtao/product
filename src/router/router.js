
import Main from '@/views/Main.vue'
const routers = [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
      },
      {
        path: '/product_list',
        name: 'product_list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/ProductManage/ProductList.vue')
      },
      {
        path: '/package_management',
        name: 'package_management',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductManage/Package_management.vue')
      },
      {
        path: '/product_ground',
        name: 'product_ground',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductManage/product_ground.vue')
      },
      {
        path: '/holiday',
        name: 'holiday',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductManage/holiday.vue')
      },
      {
        path: '/product_classify',
        name: 'product_classify',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductManage/product_classify.vue')
      },
      {
        path: '/order_list',
        name: 'order_list',
        component: () => import(/* webpackChunkName: "home" */ '@/views/order_manage/order_list.vue')
      },
      {
        path: '/coupon',
        name: 'coupon',
        component: () => import(/* webpackChunkName: "home" */ '@/views/activity_manage/Coupon.vue')
      },
      {
        path: '/voucher',
        name: 'voucher',
        component: () => import(/* webpackChunkName: "home" */ '@/views/activity_manage/voucher.vue')
      },
      {
        path: '/order_details',
        name: 'order_details',
        component: () => import(/* webpackChunkName: "home" */ '@/views/order_manage/components/order_details.vue')
      },
      {
        path: '/delivery',
        name: 'delivery',
        component: () => import(/* webpackChunkName: "home" */ '@/views/order_manage/components/delivery.vue')
      },
      {
        path: '/add_product',
        name: 'add_product',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductManage/components/add_product.vue')
      }
    ]
  }
]
export default [...routers]
