import { PAGE_STATE, LOG_TYPE } from '@utils/enums'
import { v4 } from 'uuid'
import { Storage } from '@utils/storage'

const storage = new Storage(window.sessionStorage)
const appSettings = JSON.parse(process.env.VUE_APP_SETTINGS)

export const state = {
  cachedClasses: [],
  pastClasses: [],
  upcomingClasses: [],
  currentClasses: [],
  pageState: PAGE_STATE.INIT,
  selectedClass: {},
}

export const getters = {
  pastClasses: state => state.pastClasses,
  currentClasses: state => state.currentClasses,
  upcomingClasses: state => state.upcomingClasses
}

export const mutations = {
  SET_PAGE_STATE(state, pageState)
  {
    state.pageState = pageState
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Updating Classes page state to ${pageState}.`,
      mutation: 'classes/service/SET_PAGE_STATE'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  SELECT_CLASS(state, classItem)
  { //Click event on particular class
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `${classItem.courseTitle} was clicked. RosterId is ${classItem.rosterId} and CourseId is ${classItem.courseId}.`,
      mutation: 'classes/service/SELECT_CLASS'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  SAVE_SELECTED_CLASS(state, classItem)
  { // save the classItem
    state.selectedClass = classItem
    storage.set('SELECTED_CLASS', classItem)
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `${classItem.courseTitle} was selected. RosterId is ${classItem.rosterId} and CourseId is ${classItem.courseId}.`,
      mutation: 'classes/service/SAVE_SELECTED_CLASS'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  RESET_CLASSES(state)
  {
    state.pageState = PAGE_STATE.INIT
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Resetting Classes page state to INIT.',
      mutation: 'classes/service/RESET_CLASSES'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  FILTER_CLASSES(state)
  {
    const currentClasses = BLL.groupClasses(state.cachedClasses, 'current')
    const pastClasses = BLL.groupClasses(state.cachedClasses, 'past')
    const upcomingClasses = BLL.groupClasses(state.cachedClasses, 'upcoming')

    state.currentClasses = currentClasses
    state.pastClasses = pastClasses
    state.upcomingClasses = upcomingClasses

    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Creating Past, Current and Upcoming groupings from cached classes.',
      mutation: 'classes/service/FILTER_CLASSES'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  CACHE_CLASSES(state, newClass)
  {
    state.cachedClasses = newClass

    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Set classes returned from REST API call to get rosters.',
      mutation: 'classes/service/CACHE_CLASSES'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  }
}

export const actions = {
  saveSelectedClass({ commit }, { classItem })
  {
    commit('SAVE_SELECTED_CLASS', classItem)
  },

  selectClass({ commit }, { classItem })
  {
    commit('SELECT_CLASS', classItem)
  },

  filterClasses({ dispatch, commit })
  {
    const promise = new Promise((resolve, reject) =>
    {
      commit('FILTER_CLASSES')
    })
    return promise
  },

  fetchClasses({ dispatch, commit, rootState })
  {
    const axiosInstance = rootState.api.axiosInstance

    commit('SET_PAGE_STATE', PAGE_STATE.LOADING)

    if (appSettings.mock) {
      const promise = new Promise((resolve, reject) =>
      {
        const classes = classesMock.getClasses()
        commit('CACHE_CLASSES', classes)
        commit('SET_PAGE_STATE', PAGE_STATE.LOADED)
        resolve(true)
      })
      return promise
    }

    return axiosInstance
      .get(``)
      .then((response) =>
      {
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: 'Classes/Rosters API call successful.',
          mutation: 'ClASSES/Action/fetchClasses'
        }
        this.$Logger.CreateLog(newLog)
        this.$Logger.EndLog(newLog.id)
        commit('CACHE_CLASSES', response.data.rosters)
        commit('SET_PAGE_STATE', PAGE_STATE.LOADED)
        return response
      })
      .catch(err =>
      {
        const newLog = {
          id: v4(),
          logType: LOG_TYPE.INFO,
          message: 'Classes/Rosters API call unsuccessful.',
          mutation: 'ClASSES/Action/fetchClasses'
        }
        this.$Logger.CreateLog(newLog)
        this.$Logger.EndLog(newLog.id)
        commit('SET_PAGE_STATE', PAGE_STATE.ERROR)
        console.log(err)
      })
  },

  resetClasses({ dispatch, commit })
  {
    commit('RESET_CLASSES')
  },
}
