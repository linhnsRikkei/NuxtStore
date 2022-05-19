import { HTTP } from '~/static/Api';
export const state = () => ({
  invoices: []
});
export const getters = {
  getAllProduct (state) {
    return state.invoices;
  }
};
export const mutations = {
  getAllApi (state, items) {
    state.invoices = items;
  },
  async addInvoice(state, payload) {
    // console.log(payload);
    if (payload.products.length > 0) {
      try {
        await HTTP.post('Invoice', payload)
        alert('Them thanh cong')
      } catch (error) {
        console.log(error)
      }
    }
  }
};
export const actions = {
  async getAllApi ({ commit }) {
    try {
      const res = await HTTP.get('Invoice');
      commit('getAllApi', res.data);
    } catch (error) {
      console.log(error);
    }
  },
  addInvoice({ commit }, payload) {
    commit('addInvoice', payload)
  }
};
