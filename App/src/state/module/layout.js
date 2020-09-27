import { v4 } from 'uuid'
import { LOG_TYPE } from '@utils/enums'

export const state = {
  isInit: false,
  showBreadcrumbMenu: false,
  navRoutes: [],
  settings: {
    stickyHeader: 'no',
    fullWidth: 'no',
    theme: 'light',
  },
}

export const getters = {
  navigationRoutes (state) {
    return state.navRoutes
  }
}

export const mutations = {
  SET_NAVIGATION_ROUTES(state, nav) {
    state.navRoutes = nav
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Breadcrumb navigation was set to ${JSON.stringify(state.navRoutes)}.`,
      mutation: 'Layout/SET_NAVIGATION_ROUTES'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },

  TOGGLE_BREADCRUMB_MENU(state, display) {
    state.showBreadcrumbMenu = display;
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: `Breadcrumb menu was toggled ${state.showBreadcrumbMenu === true ? 'on' : 'off'}.`,
      mutation: 'Layout/TOGGLE_BREADCRUMB_MENU'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },
  INITIALIZE_LAYOUT_STATE(state){
    state.isInit = true
    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: 'Initializing layout state.',
      mutation: 'Layout/INITIALIZE_LAYOUT_STATE'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  },
  SET_SETTINGS(state, setting){
    const name = setting.name
    const prefix = name === 'skin-light-mode' ? 'Light' : 'Dark'
    let message = ''

    switch(name){
      case 'sticky-header':
        state.settings.stickyHeader = setting.value
        message = 'Sticky header page setting is'
        break;
      case 'full-width':
        state.settings.fullWidth = setting.value
        message = 'Full width page setting is'
        break;
      case 'skin-light-mode':
      case 'skin-dark-mode':
        state.settings.theme = setting.value
        message = `${prefix} mode page setting is`
        break;
      default:
        break;
    }

    const newLog = {
      id: v4(),
      logType: LOG_TYPE.INFO,
      message: message,
      mutation: 'Layout/SET_SETTINGS'
    }
    this.$Logger.CreateLog(newLog)
    this.$Logger.EndLog(newLog.id)
  }
}

export const actions = {
  init({ commit }) {
    commit('INITIALIZE_LAYOUT_STATE')
  },
  setNavigationRoutes({ commit }, { nav }) {
    commit('SET_NAVIGATION_ROUTES', nav)
  },
  breadcrumbMenu({ commit }, { display }) {
    commit('TOGGLE_BREADCRUMB_MENU', display)
  },
  setSetting({ commit }, { settings }) {
    commit('SET_SETTINGS', settings)
  }
}
