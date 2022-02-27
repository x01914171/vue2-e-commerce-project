import { reqDetail, reqAddOrUpdateShopCart } from "../../api";


const state = {
    detailList: {},
};
const mutations = {
    DETAILLIST(state, detailList) {
        state.detailList = detailList;
    },
}
const actions = {
    async detailList({ commit }, skuid) {
        //获取数据
        let res = await reqDetail(skuid);
        if (res.code == 200) {
            commit("DETAILLIST", res.data);
        }
    },
    async addDataOnShopCat({ commit }, {skuId, skuNum}) {
        let res = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (res.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    categoryView(state) {
        return state.detailList.categoryView || {};
    },
    skuInfo(state) {
        return state.detailList.skuInfo || {};
    },
    spuSaleAttrList() {
        return state.detailList.spuSaleAttrList || [];
    }
}
export default {
    state, mutations, actions, getters

}