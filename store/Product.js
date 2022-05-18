import { HTTP } from '~/static/Api';
export const state = () => ({
  products: []
});
export const getters = {
  getAllProduct (state) {
    return state.products;
  }
};
export const mutations = {
  getAllApi (state, items) {
    state.products = items;
  },
  sortPriceDecline(state) {
    state.products.sort((a, b) => {
      const modifier = 1
      if (a.Price > b.Price) { return -1 * modifier }
      if (a.Price < b.Price) { return modifier }
      return state.products
    })
  },
  sortPriceIncrease(state) {
    state.products.sort((a, b) => {
      const modifier = 1
      if (a.Price < b.Price) { return -1 * modifier }
      if (a.Price > b.Price) { return modifier }
      return state.products
    })
  }
};
export const actions = {
  async getAllApi ({ commit }) {
    try {
      const res = await HTTP.get('Product');
      commit('getAllApi', res.data);
    } catch (error) {
      console.log(error);
    }
  },
  sortPriceIncrease({ commit }) {
    commit('sortPriceIncrease')
  },
  sortPriceDecline({ commit }) {
    commit('sortPriceDecline')
  }
};
