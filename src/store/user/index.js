import { reqCode, reqUserRegister } from "../../api";

const state = {
    code: '',
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    }
}
const actions = {
    async getCode({ commit }, phone) {
        let res = await reqCode(phone);
        if (res.code == 200) {
            commit('GETCODE', res.data);
            return 'ok'
        } else {
            return new Promise.reject(new Error('fail'))
        }
    },
    async userReigiter({ commit },data) {
        let res = await reqUserRegister(data);
        if (res.code == 200) {
            return ''
        } else {
            return new Promise.reject(new Error('fail'))
        }
    }
};
const getters = {

}
export default {
    state, mutations, actions, getters

}