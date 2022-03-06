import requests from './request';
import mockRequest from './mockRequest'
//三级联动请求
// /api/product/getBaseCategoryList  GET  无参数

export const reqCategoryList = () => {
    //axios 返回Promise
    // return requests.get('/product/getBaseCategoryList');
    return requests({ url: '/product/getBaseCategoryList', method: 'GET' });
}
// 搜索数据
export const reqSearchInfo = (params) => {
    //至少设置一个空对象
    return requests({
        url: '/list',
        method: 'POST',
        data: params
    })
}
// 产品信息
export const reqDetail = (id) => {
    //至少设置一个空对象
    return requests({
        url: `/item/${id}`,
        method: 'GET',
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

// 购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'POST',
    })
}
// 删除购物车 
export const reqDeleteShopCart = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'DELETE',
    })
}
export const reqShopCartList = () => {
    return requests({
        url: `/cart/cartList`,
        method: 'GET',
    })
}
// 切换商品选中
export const reqUpdataSelected = (skuID,isChecked)=>{
    return requests({
        url: `/cart/checkCart/${skuID}/${isChecked}`,
        method: 'GET',
    })
}


// 注册验证码
export const reqCode = (phone)=>{
    return requests({
        url: `/user/passport/sendCode/${phone}`,
        method: 'GET',
    })
    
}
export const reqUserRegister = (data)=>{
    return requests({
        url: `/user/passport/register`,
        data,
        method: 'POST',
    })
    
}
