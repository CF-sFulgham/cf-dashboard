export const state = {
  isInit: false,
}

export const mutations = {
  INITIALIZE_ROSTER_STATE(state){
    state.isInit = true
  }
}

export const getters = {}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_ROSTER_STATE')
  },
}

