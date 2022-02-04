import requests from './request';
import mockRequest from './mockRequest'
//三级联动请求
// /api/product/getBaseCategoryList  GET  无参数

export const reqCategoryList = () => {
    //axios 返回Promise
    return requests({ url: '/product/getBaseCategoryList', method: 'GET' });
}

export const reqBanner = ()=>{
    //在封装时候已经设置好baseurl=‘/mock’
    return mockRequest({ url: '/banner', method: 'GET' });
}

export const reqFloor = ()=>{
    //在封装时候已经设置好baseurl=‘/mock’
    return mockRequest({ url: '/floor', method: 'GET' });
}