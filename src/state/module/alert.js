export const state = {
  isInit: false,
  show: false,
}

export const mutations = {
  INITIALIZE_ALERT_STATE(state) {
    state.isInit = true
  },
  SHOW_ALERT(state) {
    state.show = true
  },
  HIDE_ALERT(state) {
    state.show = false
  },
}

export const getters = {
  show: (state) => state.show,
}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_ALERT_STATE')
  },
  showAlert({ commit }) {
    commit('SHOW_ALERT')
  },
  hideAlert({ commit }) {
    commit('HIDE_ALERT')
  },
}
