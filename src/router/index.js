import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Welcome from '@/components/welcome.vue'
import User from '@/components/user/user.vue'

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
        {path: '/users', component: User}
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
