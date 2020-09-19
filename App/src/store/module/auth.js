export const state = {
  isInit: false,
}

export const mutations = {
  INITIALIZE_AUTH_STATE(state){
    state.isInit = true
  }
}

export const getters = {}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_AUTH_STATE')
  },
}
