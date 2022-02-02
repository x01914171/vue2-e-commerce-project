//二次封装AXIOS
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css"
// start:开始  done:结束


//利用axios的create方法创建实例
const requests = axios.create({
    baseURL: "/api",     //使得发送请求时在路径后自动加上/api再发送
    timeout: 5000,
})
//请求拦截器：再请求发送之前活动
requests.interceptors.request.use(
    (config) => { //config为配置对象，包含请求头headers
        //进度条
        nprogress.start();
        return config;
    }
)
// 响应拦截
requests.interceptors.response.use(
    (res) => { //成功回调
        nprogress.done();
        return res.data;
    },
    (err) => { //失败回调
        return Promise.reject(new Error("faile"));
    }
)
export default requests;