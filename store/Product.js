import { HTTP } from '~/static/Api';
export const state = () => ({
  products: [],
  productByID: []
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
  async deleteProduct(state, payload) {
    try {
      await HTTP.delete('Product/' + payload + '.json')
    } catch (error) {
      console.log(error);
    }
  },
  async updateProduct(state, payload) {
    console.log(payload);
    try {
      await HTTP.put('Product/' + payload.id + '.json', payload.data)
    } catch (error) {
      console.log(error);
    }
  },
  async AddProduct(state, payload) {
    try {
      await HTTP.post('Product.json', payload.data)
    } catch (error) {
      console.log(error);
    }
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
  },
  sortNameDecline(state) {
    state.products.sort((a, b) => {
      const modifier = 1
      if (a.Name < b.Name) { return -1 * modifier }
      if (a.Name > b.Name) { return modifier }
      return state.products
    })
  },
  sortNameIncrease(state) {
    state.products.sort((a, b) => {
      const modifier = 1
      if (a.Name > b.Name) { return -1 * modifier }
      if (a.Name < b.Name) { return modifier }
      return state.products
    })
  }
};
export const actions = {
  async getAllApi ({ commit }) {
    try {
      const res = await HTTP.get('Product.json');
      const products = []
      for (const key in res.data) {
        products.push({ ...res.data[key], id: key })
      }
      commit('getAllApi', products);
    } catch (error) {
      console.log(error);
    }
  },
  sortPriceIncrease({ commit }) {
    commit('sortPriceIncrease')
  },
  sortPriceDecline({ commit }) {
    commit('sortPriceDecline')
  },
  sortNameIncrease({ commit }) {
    commit('sortNameIncrease')
  },
  sortNameDecline({ commit }) {
    commit('sortNameDecline')
  },
  deleteProduct({ commit }, payload) {
    commit('deleteProduct', payload)
  },
  updateProduct({ commit }, payload) {
    commit('updateProduct', payload)
  },
  AddProduct({ commit }, payload) {
    commit('AddProduct', payload)
  }
};
