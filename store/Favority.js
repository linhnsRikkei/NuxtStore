export const state = () => ({
  favoritys: []
});
export const getters = {
  getAllFavorite (state) {
    return state.favoritys;
  }
};
export const mutations = {
  AddFavorite (state, data) {
    state.favoritys.push({ product: data });
    alert('Them favorite thanh cong')
  },
  RemoveFavorite (state, id) {
    console.log(state.favoritys);
    for (let i = 0; i < state.favoritys.length; i++) {
      if (state.favoritys[i].product.id === id) {
        state.favoritys.splice(i, 1);
        alert('Xoa thanh cong')
      }
    }
  }
};
export const actions = {
  AddFavorite ({ commit }, data) {
    commit('AddFavorite', data);
  },
  RemoveFavorite ({ commit }, id) {
    commit('RemoveFavorite', id);
  }
};
