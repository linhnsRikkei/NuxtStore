import { HTTP } from '~/static/Api';
export const state = () => ({
  comments: []
});
export const getters = {
  getAllComment (state) {
    return state.comments;
  }
};
export const mutations = {
  getAllApi (state, items) {
    state.comments = items;
  },
  async addComment(state, payload) {
    if (payload.content.length > 0) {
      try {
        await HTTP.post('Comments', payload)
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
      const res = await HTTP.get('Comments');
      commit('getAllApi', res.data);
    } catch (error) {
      console.log(error);
    }
  },
  addComment({ commit }, payload) {
    commit('addComment', payload)
  }
};
