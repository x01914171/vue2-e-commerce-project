module.exports = {
    //关闭eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {   //在请求路径中附带'api'时，代理服务器工作
                target: 'http://39.98.123.211',   //目标服务器地址
            }
        }
    }
}