import { reqCategoryList, reqBanner, reqFloor } from "../../api";


const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],

};
const mutations = {
    CATEGORYLIST(state, category) {
        state.categoryList = category;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
}
const actions = {
    async categoryList({ commit }) {
        //获取数据
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit("CATEGORYLIST", res.data);
        }

    },
    async bannerList({ commit }) {
        //获取数据
        let res = await reqBanner();
        if (res.code == 200) {
            commit("BANNERLIST", res.data);
        }
    },
    async floorList({ commit }) {
        //获取数据
        let res = await reqFloor();
        if (res.code == 200) {
            commit("FLOORLIST", res.data);
        }
    }
};
const getters = {}
export default {
    state, mutations, actions, getters

}