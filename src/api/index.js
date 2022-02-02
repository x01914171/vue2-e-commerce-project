import requests from './request';

//三级联动请求
// /api/product/getBaseCategoryList  GET  无参数

export const reqCategoryList = () => {
    //axios 返回Promise
    return requests({ url: '/product/getBaseCategoryList', method: 'GET' });
}