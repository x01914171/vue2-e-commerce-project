import { reqDetail } from "../../api";


const state = {
    detailList: {},
};
const mutations = {
    DETAILLIST(state, detailList) {
        state.detailList = detailList;
    },
}
const actions = {
    async detailList({ commit },skuid) {
        //获取数据
        let res = await reqDetail(skuid);
        if (res.code == 200) {
            commit("DETAILLIST", res.data);
        }

    },
};
const getters = {
    categoryView(state){
        return state.detailList.categoryView || {};
    },
    skuInfo(state){
        return state.detailList.skuInfo || {};
    },
    spuSaleAttrList(){
        return state.detailList.spuSaleAttrList || [];
    }
}
export default {
    state, mutations, actions, getters

}