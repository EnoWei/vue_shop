import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Welcome from '@/components/welcome.vue'
import User from '@/components/user/user.vue'
import Rights from '@/components/power/rights.vue'
import Roles from '@/components/power/roles.vue'
import Cate from '@/components/goods/Cate.vue'
import Params from '@/components/goods/Params.vue'
import Goods from '@/components/goods/List.vue'
import Add from '@/components/goods/Add.vue'
import Order from '@/components/order/Order.vue'
import Report from '@/components/report/Report.vue'

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'login', component: Login},
    {
      path: '/home',
      name: 'home',
      redirect: '/welcome',
      component: Home,
      children: [
        {path: '/welcome', component: Welcome},
        {path: '/users', component: User},
        {path: '/rights', component: Rights},
        {path: '/roles', component: Roles},
        {path: '/categories', component: Cate},
        {path: '/params', component: Params},
        {path: '/goods', component: Goods},
        {path: '/goods/add', component: Add},
        {path: '/orders', component: Order},
        {path: '/reports', component: Report}
      ]
    }
  ]
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 1.如果登录了，就执行下一步
  if (to.path === '/login') return next()
  // 2.如果没登录，就跳到登录页，如果有token，就执行下一步，
  const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  if (!tokenStr) return router.push('/login')
  next()
})

export default router
