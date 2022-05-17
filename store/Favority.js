export const state = () => ({
  favoritys: {}
});
export const getters = {
  getAllFavorite(state) {
    return state.favoritys;
  }
};
export const mutations = {
  AddFavorite(state, data) {
    state.favoritys.push(data);
  }
};
export const actions = {
  getAllApi({ commit }, data) {
    commit('AddFavorite', data);
  }
};
