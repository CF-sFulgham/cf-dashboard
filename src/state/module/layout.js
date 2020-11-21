export const state = {
  isInit: false,
}

export const getters = {
}

export const mutations = {
  INITIALIZE_LAYOUT_STATE(state){
    state.isInit = true
  },
}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_LAYOUT_STATE')
  },
}
