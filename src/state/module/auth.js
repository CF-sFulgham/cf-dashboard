export const state = {
  isInit: false,
  hasFbError: false,
  errorMsg: '',
}

export const getters = {
    hasFbError: state => state.hasFbError,
    errorMsg: state => state.errorMsg,
}

export const mutations = {
  INITIALIZE_FIREBASE_STATE(state){
    state.isInit = true
  },
  SET_FB_ERROR(state, msg){
      state.hasFbError = true
      if(msg) state.errorMsg = msg
  },
  RESET_ERROR(state){
    state.hasFbError = false
  },
}

export const actions = {
  init({commit}){
    commit('INITIALIZE_FIREBASE_STATE')
  },
  async getUser({ commit, dispatch }){
    commit('RESET_ERROR')
    return await this.$auth
                    .getUser()
                    .then(user => {
                        console.log(user)
                    })
                    .catch(() => {
                        commit('SET_FB_ERROR')
                    })
  },
  async login({ commit, dispatch }, { email, password }){
    commit('RESET_ERROR')
    return await this.$auth
                    .login(email, password)
                    .then(auth => {
                      dispatch('users/service/setUser', auth, { root: true })
                    })
                    .catch(() => {
                        commit('SET_FB_ERROR', 'We are having problems authenticating. Try again in a few minutes.')
                    })
  },
  async logout({ commit, dispatch }){
    commit('RESET_ERROR')
    return await this.$auth.logout()
  }
}
