import { LOG_TYPE } from '@utils/enums'
import { v4 } from 'uuid'

const isDev = process.env.NODE_ENV === 'development'

export const state = {
  cachedUser: '',
  userProfile: {},
}

export const getters = {
  user: state => state.userProfile,
}

export const mutations = {
  SET_CURRENT_USER(state, user)
  {
    state.cachedUser = user
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Setting the current user to ${user.loggedInUserId}.`,
      mutation: 'USERS/CACHE_USER'
    }
    this.$Logger.CreateLog(newLog);
    this.$Logger.EndLog(newLog.id);
  }
}

export const actions = {
  // Set current user
  async login({ dispatch }, {form}) {
    // sign user in
    const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

    // fetch user profile and set in state
    dispatch('fetchUserProfile', user)
  },

  async signup({ dispatch }, {form}) {
    // sign user up
    const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

    // create user object in userCollections
    await fb.usersCollection.doc(user.uid).set({
      name: form.name,
      title: form.title
    })

    // fetch user profile and set in state
    dispatch('fetchUserProfile', user)
  },

  async fetchUserProfile({ commit }, user) {
    // fetch user profile
    const userProfile = await fb.usersCollection.doc(user.uid).get()

    // set user profile in state
    commit('setUserProfile', userProfile.data())

    // change route to dashboard
    if (router.currentRoute.path === '/login') {
      router.push('/')
    }
  },

  async logout({ commit }) {
    // log user out
    await fb.auth.signOut()

    // clear user data from state
    commit('setUserProfile', {})

    // redirect to login view
    router.push('/login')
  },

}
