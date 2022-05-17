import { HTTP } from '~/static/Api';
export const state = () => ({
  danhMucs: []
});
export const getters = {
  getAllDanhMuc(state) {
    return state.danhMucs;
  }
};
export const mutations = {
  getAllApi(state, items) {
    state.danhMucs = items;
  }
};
export const actions = {
  async getAllApi({ commit }) {
    try {
      const res = await HTTP.get('Subject');
      commit('getAllApi', res.data);
    } catch (error) {
      console.log(error);
    }
  }
};
