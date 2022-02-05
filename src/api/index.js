import requests from './request';
import mockRequest from './mockRequest'
//三级联动请求
// /api/product/getBaseCategoryList  GET  无参数

export const reqCategoryList = () => {
    //axios 返回Promise
    // return requests.get('/product/getBaseCategoryList');
    return requests({ url: '/product/getBaseCategoryList', method: 'GET' });
}

export const reqSearchInfo = (params) => {
    //至少设置一个空对象
    return requests({
        url: '/list',
        method: 'POST',
        data: params
    })
}

//mock模拟数据
export const reqBanner = () => {
    //在封装时候已经设置好baseurl=‘/mock’
    return mockRequest({ url: '/banner', method: 'GET' });
}

export const reqFloor = () => {
    //在封装时候已经设置好baseurl=‘/mock’
    return mockRequest({ url: '/floor', method: 'GET' });
}