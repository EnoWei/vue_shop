import Vue from 'vue'
import {Button, Form, FormItem, Input, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 把message挂载到vue原型对象上
Vue.prototype.$message = Message
