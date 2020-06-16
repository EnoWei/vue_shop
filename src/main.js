// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// 按需引入
import {Button, Form, FormItem, Input, Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './plugins/element.js'
// 导入全局样式表
import './assets/css/common.css'
import axios from 'axios'

// 把message挂载到vue原型对象上
Vue.prototype.$message = Message
// 配置axios请求的跟路径
axios.defaults.baseURL = `http://localhost:8888/api/private/v1/`
// 全局挂载axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
