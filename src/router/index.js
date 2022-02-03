import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

//先把初始push存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写方法
/**
 * 
 * @param {Object} location 路由配置
 * @param {Function} resolve 
 * @param {Function} reject 
 */
VueRouter.prototype.push = function (location, resolve, reject) {
    //使用.call()方法调用保存的push；当前this就指向VueRouter实例；
    //call与apply：
    //  相同：都可以调用函数，改变上下文
    //  不同：call用逗号隔开参数，apply传递数组；
    if (resolve && reject) {
        originPush.call(this, location, resolve,reject);
    } else {
        // 没有传递则使用自定义
        originPush.call(this, location,() => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve,reject);
    } else {
        // 没有传递则使用自定义
        originReplace.call(this, location,() => { }, () => { });
    }
}

export default new VueRouter({
    routes: [
        {
            path: "/home",
            name: 'home',
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyword?",
            name: "search",
            component: Search,
            meta: { show: true }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: { show: false }
        },
        // 项目运行时候跳转首页
        {
            path: "*",
            redirect: "/home"
        }
    ]
})