import Vue from 'vue';
import App from './App.vue';
//引入仓库
import store from '@/store';

//全局组件注册：
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from '@/components/Pagination';
//name、component
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false

import '@/mock/mockServer.js'
import router from '@/router'

// 引入swiper
import 'swiper/css/swiper.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  render: h => h(App),
  beforeCreate() {
    // 全局事件配置
    Vue.prototype.$bus = this;
  },
  router,
  //注册仓库，组件会多一个$store属性
  store,
}).$mount('#app')
