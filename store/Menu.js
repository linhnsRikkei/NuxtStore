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
      await HTTP.put('Menu/' + payload.id + '.json?auth=' + payload.token.token, payload.data)
    } catch (error) {
      console.log(error);
    }
  },
  async deleteLoai(state, payload) {
    try {
      await HTTP.delete('Menu/' + payload.idItem + '.json?auth=' + payload.token.token)
    } catch (error) {
      console.log(error);
    }
  },
  async AddLoai(state, payload) {
    try {
      await HTTP.post('Menu.json?auth=' + payload.token.token, payload.data)
    } catch (error) {
      console.log(error);
    }
  }
};
export const actions = {
  async getAllApi({ commit }) {
    try {
      const res = await HTTP.get('Menu.json');
      const menus = []
      for (const key in res.data) {
        menus.push({ ...res.data[key], id: key })
      }
      commit('getAllApi', menus);
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
