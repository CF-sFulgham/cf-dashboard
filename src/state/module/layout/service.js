export const state = {
  showBreadcrumbMenu: false,
  navRoutes: [],
  settings: {
    stickyHeader: 'yes',
    fullWidth: 'no',
    theme: 'light',
  },
}

export const getters = {
  navigationRoutes (state) {
    return state.navRoutes
  },
  menuItems (state) {
    return state.menuItems
  },
}

export const mutations = {
  SET_NAVIGATION_ROUTES(state, nav) {
    state.navRoutes = nav
  },

  TOGGLE_BREADCRUMB_MENU(state, display) {
    state.showBreadcrumbMenu = display;
  },
  SET_SETTINGS(state, setting){
    const name = setting.name

    switch(name){
      case 'sticky-header':
        state.settings.stickyHeader = setting.value
        break;
      case 'full-width':
        state.settings.fullWidth = setting.value
        break;
      case 'skin-light-mode':
      case 'skin-dark-mode':
        state.settings.theme = setting.value
        break;
      default:
        break;
    }
  }
}

export const actions = {
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
