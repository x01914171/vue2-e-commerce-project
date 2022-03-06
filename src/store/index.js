import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from "./user";

//state 存储数据
const state = {};
//mutations 修改state唯一手段
const Mutations = {}
//actions 处理action，响应dispatch，通过commit让mustation来修改state，可以书写自己业务逻辑
const actions = {};
//getters 类似计算属性，简化获取数据
const getters = {}
export default new Vuex.Store({
    modules: { home, search,detail,shopcart,user }

})