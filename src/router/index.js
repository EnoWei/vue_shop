import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'login', component: Login},
    {path: '/home', name: 'home', component: Home}
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
