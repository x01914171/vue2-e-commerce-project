import { reqShopCartList, reqDeleteShopCart, reqUpdataSelected } from "@/api";

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
    async getDeleteShopCart({ commit }, skuId) {
        let res = await reqDeleteShopCart(skuId);
        if (res.code === 200) {
            // 返回Promise
            return 'OK'
        } else {
            return new Promise.reject(new Error("faile"))
        }
    },
    async updataCheckedById({ commit }, sku) {
        let res = await reqUpdataSelected(sku.skuId, sku.checked);
        if (res.code === 200) {
            // 返回Promise
            return 'OK'
        } else {
            return new Promise.reject(new Error("faile"))
        }
    },
    deleteSelected({ getters, dispatch }) {
        let promises = [];
        getters.shopCartList.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('getDeleteShopCart', element.skuId) : '';
            promises.push(promise);
        });
        return Promise.all(promises);
    },
    // 全选
    selectAll({ getters, dispatch }, checked) {
        let promises = [];
        getters.shopCartList.cartInfoList.forEach(element => {
            let promise = dispatch('updataCheckedById', { skuId: element.skuId, checked: checked });
            promises.push(promise);
        });
        return Promise.all(promises);
    },

};
const getters = {
    shopCartList(state) {
        return state.shopCartList[0] || {};
    }
}
export default {
    state, mutations, actions, getters
}