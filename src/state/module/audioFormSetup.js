export const state = {
  isInit: false,
}

export const mutations = {
  INITIALIZE_AUDIO_FORM_SETUP_STATE(state){
    state.isInit = true
  }
}

export const getters = {}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_AUDIO_FORM_SETUP_STATE')
  },
}
