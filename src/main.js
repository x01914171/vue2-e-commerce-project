import Vue from 'vue';
import App from './App.vue';
//引入仓库
import store from '@/store';

//全局组件注册：
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
//name、component
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false

import '@/mock/mockServer.js'
import router from '@/router'

// 引入swiper
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  router,
  //注册仓库，组件会多一个$store属性
  store,
}).$mount('#app')
