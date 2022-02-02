import Vue from 'vue';
import App from './App.vue';
//引入仓库
import store from '@/store';
//全局组件注册：
import TypeNav from "@/components/TypeNav";
//name、component
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

import router from '@/router'
new Vue({
  render: h => h(App),
  router,
  //注册仓库，组件会多一个$store属性
  store,
}).$mount('#app')
