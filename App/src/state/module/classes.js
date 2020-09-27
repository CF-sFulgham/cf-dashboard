import { v4 } from 'uuid'
import { LOG_TYPE } from '@utils/enums'

export const state = {
  isInit: false,
}

export const mutations = {
  INITIALIZE_CLASSES_STATE(state){
    state.isInit = true
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Initializing classes state.',
      mutation: 'Classes/INITIALIZE_CLASSES_STATE'
    }
    this.$Logger.CreateLog(newLog);
    this.$Logger.EndLog(newLog.id);
  }
}

export const getters = {}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_CLASSES_STATE')
  },
}
