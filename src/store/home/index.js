import { reqCategoryList } from "../../api";

const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, category) {
        state.categoryList = category;
    }
}
const actions = {
    async categoryList({ commit }) {
        //获取数据
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit("CATEGORYLIST", res.data);
        }

    }
};
const getters = {}
export default {
    state, mutations, actions, getters

}