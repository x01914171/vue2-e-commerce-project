// 路由配置信息

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';

export default  [
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
    {
        path: `/detail/:skuId`,
        name: "detail",
        component: Detail,
        meta: { show: false }
    },
    // 项目运行时候跳转首页
    {
        path: "*",
        redirect: "/home"
    }
]