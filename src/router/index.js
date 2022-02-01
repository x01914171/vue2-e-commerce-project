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