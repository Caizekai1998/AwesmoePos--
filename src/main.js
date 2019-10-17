import Vue from 'vue';
import App from './App.vue';
//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
