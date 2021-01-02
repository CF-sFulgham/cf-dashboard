import Router from '@router'

export const state = {
  isInit: false,
  mode: '',
  code: '',
  email: '',
}

export const getters = {
    mode: state => state.mode,
    email: state => state.email,
}

export const mutations = {
  INITIALIZE_PASSWORD_STATE(state) {
    state.isInit = true
  },
  SET_RESET_PARAMS(state, { mode, code }){
    state.mode = mode
    state.code = code
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_PASSWORD_STATE')
  },
  async verifyCode({ commit }, { mode, code }) {
    if (mode !== 'resetPassword') return Promise.reject()

    return await this.$auth.verifyCode(code)
        .then(email => {
            commit('SET_RESET_PARAMS', { mode, code })
            return Promise.resolve(email)
        })
  },
  async sendPasswordReset({ state, dispatch }, newP){
    return await this.$auth
        .sendResetPassword({ code: state.code, newP})
        .then(() => {
            dispatch('auth/setSuccessMessage', 'Your password has been reset.', { root: true})
            setTimeout(() => {
                Router.push({ name: 'signIn'})
              }, 6000)
        })
  },
  setEmail({ commit }, email){
      commit('SET_EMAIL', email)
  }
}
