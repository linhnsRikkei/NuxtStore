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
  },
  sortNameDecline(state) {
    state.danhMucs.sort((a, b) => {
      const modifier = 1
      if (a.content < b.content) { return -1 * modifier }
      if (a.content > b.content) { return modifier }
      return state.danhMucs
    })
  },
  sortNameIncrease(state) {
    state.danhMucs.sort((a, b) => {
      const modifier = 1
      if (a.content > b.content) { return -1 * modifier }
      if (a.content < b.content) { return modifier }
      return state.danhMucs
    })
  },
  async updateLoai(state, payload) {
    try {
      await HTTP.put(`Subject/${payload.id}`, payload.data)
    } catch (error) {
      console.log(error);
    }
  },
  async deleteLoai(state, payload) {
    try {
      await HTTP.delete(`Subject/${payload}`)
    } catch (error) {
      console.log(error);
    }
  },
  async AddLoai(state, payload) {
    try {
      await HTTP.post('Subject', payload.data)
    } catch (error) {
      console.log(error);
    }
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
  },
  sortNameIncrease({ commit }) {
    commit('sortNameIncrease')
  },
  sortNameDecline({ commit }) {
    commit('sortNameDecline')
  },
  updateLoai({ commit }, payload) {
    commit('updateLoai', payload)
  },
  deleteLoai({ commit }, payload) {
    commit('deleteLoai', payload)
  },
  AddLoai({ commit }, payload) {
    commit('AddLoai', payload)
  }
};
