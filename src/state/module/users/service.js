export const state = {
  username: '',
  profile: {},
  userInfo: {},
}

export const getters = {
  username: state => state.user,
  profile: state => state.profile,
}

export const mutations = {
  SET_CURRENT_USER(state, user){
    state.username = user.displayName || 'username'
    state.userInfo = user
  }
}

export const actions = {
  setUser({ commit }, { additionalUserInfo, user }){
    if(additionalUserInfo.isNewUser){
      // Reset password logic
    }
    commit('SET_CURRENT_USER', user)
  },
}
