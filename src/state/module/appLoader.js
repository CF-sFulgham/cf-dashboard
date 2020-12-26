export const state = {
  isInit: false,
}

export const mutations = {
  INITIALIZE_APP_LOADER(state) {
    state.isInit = true
  },
}

export const getters = {}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_APP_LOADER')
  },
}
