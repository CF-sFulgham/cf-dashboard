export const state = {
  isInit: false,
}

export const getters = {}

export const mutations = {
  INITIALIZE_USERS_STATE(state){
    state.isInit = true
  }
}

export const actions = {
  init({commit}) {
    commit('INITIALIZE_USERS_STATE')
  },
}
