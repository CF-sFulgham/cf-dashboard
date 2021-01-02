import Router from '@router'

export const state = {
  isInit: false,
}

export const getters = {}

export const mutations = {
  INITIALIZE_RESET_STATE(state) {
    state.isInit = true
  },
}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_RESET_STATE')
  },
  async requestResetPassword({ dispatch }, email){
    await this.$auth
      .requestResetPassword(email)
      .then(sentReset => {
        if(sentReset)
          dispatch('auth/setSuccessMessage', 'A password reset link has been sent to your email address.', { root: true})
          setTimeout(() => {
            Router.push({ name: 'signIn'})
          }, 6000)
      })
  },
}
