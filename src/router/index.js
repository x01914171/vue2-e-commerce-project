import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home
        }, {
            path: "/search",
            component: Search
        }, {
            path: "/register",
            component: Register
        }, {
            path: "/login",
            component: Login
        },
        // 项目运行时候跳转首页
        {
            path:"*",
            redirect:"/home",
        }
    ]
})