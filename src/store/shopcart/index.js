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
    }
};
const getters = {
    shopCartList(state){
        return state.shopCartList[0]|| {};
    }
}
export default {
    state, mutations, actions, getters
}