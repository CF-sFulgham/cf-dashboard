import { LOG_TYPE } from '@utils/enums'
import { v4 } from 'uuid'

const isDev = process.env.NODE_ENV === 'development'

export const state = {
  cachedUser: '',
}

export const getters = {
  user: state => state.cachedUser,
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
  setCurrentUser({ commit }, { user })
  {
    commit('SET_CURRENT_USER', user)
  },
  fetchUser({ dispatch, commit, rootState })
  {
    const axiosInstance = rootState.api.axiosInstance

    return axiosInstance
      .get('')
      .then((response) =>
      {
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: `User lookup API call successful.`,
          mutation: 'USERS/Actions/fetchUser'
        }
        this.$Logger.CreateLog(newLog);
        this.$Logger.EndLog(newLog.id);
        dispatch('setCurrentUser', { user: isDev ? axiosInstance.loggedInUserId : response.data.loggedInUserId })
        return response
      })
      .catch(err =>
      {
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.ERROR,
          message: `User lookup API call unsuccessful.`,
          mutation: 'USERS/Actions/fetchUser'
        }
        this.$Logger.CreateLog(newLog);
        this.$Logger.EndLog(newLog.id);
        console.log(err)
      })
  },

}
