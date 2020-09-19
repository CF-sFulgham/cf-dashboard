import axios from 'axios'
const appSettings = JSON.parse(process.env.VUE_APP_SETTINGS)


const rosterMock = new Roster(MockData)

export const state = {
  cached: [],
}

export const getters = {}

export const mutations = {
  CACHE_ROSTER(state, newRoster)
  {
    state.cached.push(newRoster)
  },
}

export const actions = {
  fetchRoster({ commit, state, rootState }, { username })
  {
    console.log(appSettings)
    if (appSettings.mock) {
      const promise = new Promise((resolve, reject) =>
      {
        const roster = rosterMock.getRoster()
        commit('CACHE_ROSTER', roster)
        resolve(rosterMock.getRoster())
      })
      return promise
    }
    return axios.get('http://localhost:5583/api/v1/roster').then((response) =>
    {
      const roster = response.data
      commit('CACHE_ROSTER', roster)
      return roster
    })
  },
}
