export const state = () => ({
  token: null
});
export const getters = {
  getToken (state) {
    return state.token
  },
  isAuthenticated (state) {
    return state.token != null
  }
};
export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  clearToken(state) {
    state.token = null
  }
};
export const actions = {
  Register({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`, payload)
        .then((result) => {
          commit('setToken', result.idToken)
          resolve({ success: true })
          this.$toast.error('Register success')
        })
        .catch((error) => {
          this.$toast.error('Register fail')
          console.log(error);
        })
    })
  },
  Login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`, payload)
        .then((result) => {
          commit('setToken', result.idToken)
          resolve({ success: true })
          localStorage.setItem('User', JSON.stringify(result))
          localStorage.setItem('Token', result.idToken)
        })
        .catch((error) => {
          this.$toast.error('Fail authenticated')
          console.log(error);
        })
    })
  },
  initAuth({ commit }) {
    const tokenLocal = localStorage.getItem('Token')
    if (!tokenLocal) {
      return false
    }
    commit('setToken', tokenLocal)
  },
  logOut({ commit }) {
    commit('clearToken')
    localStorage.removeItem('Token')
  }
};
