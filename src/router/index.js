import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

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
        originPush.call(this, location, resolve, reject);
    } else {
        // 没有传递则使用自定义
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        // 没有传递则使用自定义
        originReplace.call(this, location, () => { }, () => { });
    }
}

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }

    }
})