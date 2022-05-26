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
    console.log(payload);
    if (payload.data.products.length > 0) {
      try {
        await HTTP.post('Invoice.json?auth=' + payload.token.token, payload.data)
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
      const res = await HTTP.get('Invoice.json');
      const invoices = []
      for (const key in res.data) {
        invoices.push({ ...res.data[key], id: key })
      }
      commit('getAllApi', invoices);
    } catch (error) {
      console.log(error);
    }
  },
  addInvoice({ commit }, payload) {
    commit('addInvoice', payload)
  }
};
