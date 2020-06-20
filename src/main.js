// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// 按需引入
import {Button, Form, FormItem, Input, Message,
  Header, Main, Aside, Container, Menu, Submenu,
  MenuItemGroup, MenuItem, BreadcrumbItem, Breadcrumb,
  Card, Row, Col, Table, TableColumn, Switch, Tooltip, Pagination,
  Dialog, Tag, MessageBox, Tree, Select, Option, Cascader} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TreeTable from 'vue-table-with-tree-grid'
// import './plugins/element.js'
// 导入全局样式表
import './assets/css/common.css'
import axios from 'axios'

// 把message挂载到vue原型对象上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
// 配置axios请求的跟路径
axios.defaults.baseURL = `http://localhost:8888/api/private/v1/`

// 通过axios 请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')

  return config
})

// 全局挂载axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.component('tree-table', TreeTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
