import { v4 } from 'uuid'

export const state = {
  isInit: false,
  showBreadcrumbMenu: false,
  navRoutes: [],
  menuItems: [
    { name: 'dashboard', selected: false },
    { name: 'account', selected: false },
    { name: 'products', selected: false },
    { name: 'conversions', selected: false },
    { name: 'metrics', selected: false },
    { name: 'training', selected: false },
    { name: 'contact', selected: false },
  ],
  page: {
    title: ''
  }
}

export const getters = {
  navigationRoutes: state => state.navRoutes,
  menuItems: state => state.menuItems,
  showBreadcrumbMenu: state => state.showBreadcrumbMenu,
  page: state => state.page,
}

export const mutations = {
  SET_NAVIGATION_ROUTES(state, nav) {
    state.navRoutes = nav
  },

  TOGGLE_BREADCRUMB_MENU(state, display) {
    state.showBreadcrumbMenu = display
  },

  INITIALIZE_LAYOUT_STATE(state) {
    state.isInit = true
  },

  SET_MENU_ITEM_STATE(state, menuItem) {
    state.menuItems.forEach((item) => {
      item.selected = menuItem.name === item.name
    })
  },

  SET_PAGE_INFO(state, page) {
    state.page.title = page.title
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
  },

  setMenuItemState({ commit }, { menuItem }) {
    commit('SET_MENU_ITEM_STATE', menuItem)
  },

  setPageTitle({ commit }, { page }) {
    commit('SET_PAGE_INFO', page)
  },
}
