import { PAGE_STATE, LOG_TYPE } from '@utils/enums'
import { v4 } from 'uuid'
import { Storage } from '@utils/storage'

const storage = new Storage(window.sessionStorage)

export const state = {
  cachedSessions: [],
  pastSessions: [],
  upcomingSessions: [],
  currentSessions: [],
  pageState: PAGE_STATE.INIT,
  selectedSession: {},
}

export const getters = {
  pastSessions: (state) => state.pastSessions,
  currentSessions: (state) => state.currentSessions,
  upcomingSessions: (state) => state.upcomingSessions,
}

export const mutations = {
  SET_PAGE_STATE(state, pageState)
  {
    state.pageState = pageState
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Updating Sessions page state to ${pageState}.`,
      mutation: 'sessions/service/SET_PAGE_STATE',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  SELECT_SESSION(state, session)
  {
    // Click event on particular session
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Session ${session.sessionName} was clicked.`,
      mutation: 'sessions/service/SELECT_SESSION',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  SAVE_SELECTED_SESSION(state, session)
  {
    // save the sessionItem
    state.selectedSession = session
    storage.set('SELECTED_SESSION', session)
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Session ${session.sessionName} was selected.`,
      mutation: 'session/service/SAVE_SELECTED_SESSION',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  RESET_SESSIONS(state)
  {
    state.pageState = PAGE_STATE.INIT
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Resetting Sessions page state to INIT.',
      mutation: 'sessions/service/RESET_SESSIONS',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  FILTER_SESSIONS(state)
  {
    const currentSessions = BLL.groupSessions(state.cachedSessions, 'current')
    const pastSessions = BLL.groupSessions(state.cachedSessions, 'past')
    const upcomingSessions = BLL.groupSessions(state.cachedSessions, 'upcoming')

    state.currentSessions = currentSessions
    state.pastSessions = pastSessions
    state.upcomingSessions = upcomingSessions

    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message:
        'Creating Past, Current and Upcoming groupings from cached Sessions.',
      mutation: 'sessions/service/FILTER_SESSIONS',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  CACHE_SESSIONS(state, newClass)
  {
    state.cachedSessions = newClass

    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Set sessions returned from REST API call to get rosters.',
      mutation: 'sessions/service/CACHE_SESSIONS',
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },
}

export const actions = {
  saveSelectedSession({ commit }, { session })
  {
    commit('SAVE_SELECTED_SESSION', session)
  },

  selectSession({ commit }, { session })
  {
    commit('SELECT_SESSION', session)
  },

  filterSessions({ dispatch, commit })
  {
    const promise = new Promise((resolve, reject) =>
    {
      commit('FILTER_SESSIONS')
    })
    return promise
  },

  fetchSessions({ dispatch, commit, rootState, state })
  {
    const axiosInstance = rootState.api.axiosInstance
    const selectedClass = rootState.classes.service.selectedClass.rosterId ?
      rootState.classes.service.selectedClass :
      storage.get('SELECTED_CLASS')

    commit('SET_PAGE_STATE', PAGE_STATE.LOADING)

    /* if (appSettings.mock) {
      const promise = new Promise((resolve, reject) => {
        const sessions = sessionsMock.getSessions()
        commit('CACHE_SESSIONS', sessions)
        commit('SET_PAGE_STATE', PAGE_STATE.LOADED)
        resolve(true)
      })
      return promise
    }
 */
    return axiosInstance
      .get('')
      .then((response) =>
      {
        console.log(response.data)
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: 'Sessions/Sessions API call successful.',
          mutation: 'SESSIONS/Action/fetchSessions',
        }
        this.$Logger.CreateLog(newLog)
        this.$Logger.EndLog(newLog.id)
        commit('CACHE_SESSIONS', response.data.sessions)
        commit('SET_PAGE_STATE', PAGE_STATE.LOADED)
        return response
      })
      .catch((err) =>
      {
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: 'Sessions/Sessions API call unsuccessful.',
          mutation: 'SESSIONS/Action/fetchSessions',
        }
        this.$Logger.CreateLog(newLog)
        this.$Logger.EndLog(newLog.id)
        commit('SET_PAGE_STATE', PAGE_STATE.ERROR)
        console.log(err)
      })
  },

  resetSessions({ dispatch, commit })
  {
    commit('RESET_SESSIONS')
  },
}
