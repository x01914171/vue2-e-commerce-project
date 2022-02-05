import { reqSearchInfo } from "../../api";

const state = {
    seachList: {},
};
const mutations = {
    GETSEARCHINFO(state, seachList) {
        state.seachList = seachList;
    }
}
const actions = {
    async getSearchInfo({ commit }, params = {}) {
        let res = await reqSearchInfo(params);
        if (res.code == 200) {
            commit("GETSEARCHINFO", res.data);
        }
    }
};
const getters = {
    //类似于计算属性，简化仓库中数据
    goodsList(state) {
        //网络不好goodsList会成undifine，改用[]防止报错
        return state.seachList.goodsList || [];
    },
    trademarkList(state) {
        return state.seachList.trademarkList || [];
    },
    attrsList(state) {
        return state.seachList.attrsList || [];
    },
}
export default {
    state, mutations, actions, getters

}