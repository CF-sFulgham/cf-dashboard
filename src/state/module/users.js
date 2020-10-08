import { v4 } from 'uuid'
import { LOG_TYPE } from '@utils/enums'
import * as fb from '../../utils/auth/firebase'
import router from '../../router/'

export const state = {
  isInit: false,
}

export const getters = {}

export const mutations = {
  INITIALIZE_USERS_STATE(state){
    state.isInit = true
    
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Initializing users state.',
      mutation: 'Users/INITIALIZE_USER_STATE', 
      setUserProfile(state, val) {
        state.userProfile = val
      },
      setPerformingRequest(state, val) {
        state.performingRequest = val
      },
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  }
}

export const actions = {
  init({commit}) {
    commit('INITIALIZE_USERS_STATE')
  },
}
