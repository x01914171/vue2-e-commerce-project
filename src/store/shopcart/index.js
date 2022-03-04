import { reqShopCartList } from "@/api";

const state = {
    shopCartList: []
};
const mutations = {
    GETSHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList;
    }
}
const actions = {
    async getShopCartList({ commit }) {
        let res = await reqShopCartList();
        if (res.code === 200) {
            commit('GETSHOPCARTLIST', res.data)
        }
    },
    async reqDeleteShopCart({ commit },skuId) {
        let res = await reqShopCartList();
        if (res.code === 200) {
            // 返回Promise
            return 'OK'
        }else{
            return new Promise.reject(new Error("faile"))
        }
    },
    
};
const getters = {
    shopCartList(state){
        return state.shopCartList[0]|| {};
    }
}
export default {
    state, mutations, actions, getters
}