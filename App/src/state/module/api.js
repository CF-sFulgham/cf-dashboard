import { API_STATE, LOG_TYPE } from '@utils/enums'
import { v4 } from 'uuid'

const appSettings = JSON.parse(process.env.VUE_APP_SETTINGS)

export const state = {
  isInit: false,
  apiState: API_STATE.INIT,
  axiosInstance: null,
}

export const mutations = {
  INITIALIZE_API_STATE(state)
  {
    state.isInit = true
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Initializing api state.',
      mutation: 'API/INITIALIZE_API_STATE'
    }
    this.$Logger.CreateLog(newLog);
    this.$Logger.EndLog(newLog.id);
  },
  SET_API_STATE(state, apiState)
  {
    state.apiState = apiState;
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Axios Instance API state ${apiState}.`,
      mutation: 'API/SET_API_STATE'
    }
    this.$Logger.CreateLog(newLog);
    this.$Logger.EndLog(newLog.id);
  },
  CONFIGURE_AXIOS(state, newValue)
  {
    state.axiosInstance = newValue
    this.$Logger.SetAxiosInstance(newValue)
    this.$Logger.SetReady(true)
  },
}

export const getters = {}

export const actions = {
  init({ commit, dispatch })
  {
    commit('INITIALIZE_API_STATE')
    // dispatch('getServerInfo')
  },
  // Get server environments
  getServerInfo({ commit, dispatch, rootState })
  {
    commit('SET_API_STATE', API_STATE.LOADING);
    if (appSettings.mock) {
      commit('SET_API_STATE', API_STATE.LOADED);
      return
    }
    this.$AxiosInstance
      .getInstance()
      .then((ai) =>
      {
        if (ai.error) {
          // call fails on 500 or other status
          // log error and redirect
          commit('SET_API_STATE', API_STATE.ERROR);
          return;
        }

        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: 'Axios Instance has been initialized for the API calls.',
          mutation: 'API/Action/getServerInfo'
        }
        this.$Logger.CreateLog(newLog)
        this.$Logger.EndLog(newLog.id)

        commit('CONFIGURE_AXIOS', ai)
        commit('SET_API_STATE', API_STATE.LOADED)
        dispatch('users/service/fetchUser', {}, { root: true })
      });
    // todo: add messages when call fails on 404
    // .catch((err) => {
    //   // log error and redirect
    //   commit('SET_API_STATE', API_STATE.ERROR);
    //   console.log(err)
    // });
  },
}
