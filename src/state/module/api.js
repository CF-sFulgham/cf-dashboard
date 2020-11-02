import { API_STATE } from '@utils/enums'

export const state = {
  isInit: false,
  apiState: API_STATE.INIT,
  axiosInstance: null,
}

export const mutations = {
  INITIALIZE_API_STATE(state)
  {
    state.isInit = true
  },
  SET_API_STATE(state, apiState)
  {
    state.apiState = apiState;
  },
  CONFIGURE_AXIOS(state, newValue)
  {
    state.axiosInstance = newValue
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

    this.$AxiosInstance
      .getInstance()
      .then((ai) => {
        if (ai.error) {
          // call fails on 500 or other status
          // log error and redirect
          commit('SET_API_STATE', API_STATE.ERROR);
          return;
        }

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
