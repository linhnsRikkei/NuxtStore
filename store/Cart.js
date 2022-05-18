export const state = () => ({
  carts: []
});
export const getters = {
  getAllCart (state) {
    return state.carts;
  },
  getTotal (state) {
    let total = 0;
    for (let i = 0; i < state.carts.length; i++) {
      total += state.carts[i].count * state.carts[i].product.Price
    }
    return total;
  }
};
export const mutations = {
  AddCart (state, data) {
    let dem = 0;
    for (let i = 0; i < state.carts.length; i++) {
      if (state.carts[i].product.id === data.id) {
        alert('Sản phẩm đã tồn tại trong giỏ hàng')
        dem++;
      }
    }
    if (dem === 0) {
      state.carts.push({ product: data, count: 1 });
      alert('Thêm vào giỏ hàng thành công')
    }
  },
  RemoveCart (state, id) {
    for (let i = 0; i < state.carts.length; i++) {
      if (state.carts[i].product.id === id) {
        state.carts.splice(i, 1);
        alert('Xóa khỏi giỏ hàng')
      }
    }
  },
  RemoveAllCart (state, id) {
    state.carts = []
    alert('Clear all carts')
  },
  updateCount (state, payload) {
    if (payload.count > 0) {
      console.log(payload);
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].product.id === payload.idItem) {
          state.carts[i].count = payload.count;
          alert('Update thành công')
        }
      }
    }
    console.log(state.carts);
  }
};
export const actions = {
  AddCart ({ commit }, data) {
    commit('AddCart', data);
  },
  RemoveCart ({ commit }, id) {
    commit('RemoveCart', id);
  },
  RemoveAllCart ({ commit }) {
    commit('RemoveAllCart');
  },
  updateCount ({ commit }, payload) {
    commit('updateCount', payload);
  }
};
