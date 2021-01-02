export const state = {
    isInit: false,
    title: '',
    h1: '',
    h2: '',
    linkText: '',
    route: ''
  }
  
  export const getters = {
      title: state => state.title,
      h1: state => state.h1,
      h2: state => state.h2,
      linkText: state => state.linkText,
      route: state => state.route,
  }
  
  export const mutations = {
    INITIALIZE_PAGE_ERROR_STATE(state){
      state.isInit = true
    },
    SET_PAGE_DETAILS(state, { title, h1, h2, linkText, route }){
        state.title = title
        state.h1 = h1
        state.h2 = h2
        state.linkText = linkText
        state.route = route
    }
  }
  
  export const actions = {
    init({commit}) {
      commit('INITIALIZE_PAGE_ERROR_STATE')
    },
    setPageDetails({ commit }, { title, h1, h2, linkText, route }){
        commit('SET_PAGE_DETAILS', { title, h1, h2, linkText, route })
    },
  }
  