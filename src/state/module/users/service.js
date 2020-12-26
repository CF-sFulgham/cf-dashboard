export const state = {
  username: '',
  uid: '',
  profile: {
    email: '',
    phoneNumber: '',
    photoURL: ''
  },
  claims: {
    admin: false,
    level: 0,
  },
}

export const getters = {
  username: state => state.username,
  profile: state => state.profile,
}

export const mutations = {
  SET_DISPLAY_NAME(state, displayName){
    state.username = displayName || 'username'
  },
  SET_PROFILE(state, { uid, email, phoneNumber, photoURL }){
    state.uid = uid,
    state.profile = { email, phoneNumber, photoURL }
  },
  SET_CLAIMS(state, { admin, level }){
    state.claims = { admin, level }
  }
}

export const actions = {
  setUser({ commit }, { uid, displayName, email, phoneNumber, photoURL }){
    commit('SET_DISPLAY_NAME', displayName)
    commit('SET_PROFILE', { uid, email, phoneNumber, photoURL })
  },
  setClaims({ commit }, { admin, level }){
    commit('SET_CLAIMS', { admin, level })
  }
}
