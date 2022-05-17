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
    console.log('state.products', state.products);
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
  }
};
