import Router from '@router'

export const state = {
  isInit: false,
  hasAuthError: false,
  hasSuccessMsg: false,
  errorMsg: '',
  successMsg: '',
  loggedIn: false,
  authInfo: {
    isNewUser: false,
    operationType: 'signIn',
  },
}

export const getters = {
  hasAuthError: (state) => state.hasAuthError,
  hasSuccessMsg: (state) => state.hasSuccessMsg,
  successMsg: (state) => state.successMsg,
  errorMsg: (state) => state.errorMsg,
  loggedIn: (state) => state.loggedIn,
}

export const mutations = {
  INITIALIZE_AUTH_STATE(state) {
    state.isInit = true
  },
  SET_AUTH_ERROR(state, msg) {
    state.hasAuthError = true
    if (msg) state.errorMsg = msg
  },
  SET_AUTH_SUCCESS(state, msg) {
    state.hasSuccessMsg = true
    if (msg) state.successMsg = msg
  },
  RESET_ERROR(state) {
    state.hasSuccessMsg = false
    state.hasAuthError = false
  },
  SET_AUTH_INFO(state, { isNewUser, operationType }) {
    state.authInfo = { isNewUser, operationType }
  },
  SET_LOGGED_IN(state) {
    state.loggedIn = true
  },
  SET_LOGGED_OUT(state) {
    state.loggedIn = false
  },
}

export const actions = {
  init({ commit }) {
    this.$AxiosInstance.setAuth(this.$auth)
    commit('INITIALIZE_AUTH_STATE')
  },

  async getUser({ commit }) {
    commit('RESET_ERROR')
    return await this.$auth
      .getUser()
      .then((user) => {
        console.log(user)
        return { providerData: user.providerData, uid: user.uid }
      })
      .catch(() => {
        commit('SET_AUTH_ERROR')
        return false
      })
  },

  async getToken({ commit }) {
    commit('RESET_ERROR')
    return await this.$auth
      .accessToken()
      .then((token) => {
        return token
      })
      .catch(() => {
        commit('SET_AUTH_ERROR')
        return false
      })
  },

  async isTokenValid(){
    return await this.$auth.isTokenValid()
  },

  async refreshToken(){
    return await this.$auth.refreshToken()
  },

  async login({ commit }, { email, password }) {
    commit('RESET_ERROR')
    await this.$auth
      .login(email, password)
      .then(({ additionalUserInfo, operationType, code, message }) => {
        if (code) {
          //this means err with firebase
          commit('SET_AUTH_ERROR', message)
          return
        }
        commit('SET_AUTH_INFO', {
          isNewUser: additionalUserInfo.isNewUser,
          operationType,
        })
        commit('SET_LOGGED_IN')
        Router.push('/appLoader')
      })
      .catch(() => {
        commit('SET_AUTH_ERROR') // this means err with the code
      })
  },
  
  async logout({ commit }, redirect) {
    commit('RESET_ERROR')
    commit('SET_LOGGED_OUT')
    await this.$auth.logout().then(() => {
      if(redirect){
        Router.push({ name: 'signIn', query: { redirectFrom: redirect.from } })
      } else {
        Router.push({ name: 'signIn'})
      }
    })
  },

  resetPage({ commit }) {
    commit('RESET_ERROR')
    commit('SET_LOGGED_OUT')
  },

  async setSuccessMessage({ commit }, message) {
    commit('SET_AUTH_SUCCESS', message)
  },
}
