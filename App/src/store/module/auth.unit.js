import * as authModule from './auth'

describe('@state/modules/auth', () => {
  it('exports a valid Vuex module', () => {
    expect(authModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store
    beforeEach(() => {
      store = createModuleStore(authModule)
      window.localStorage.clear()
    })

    it('actions.validate resolves to a user when currentUser contains a valid token', () => {
      expect.assertions(2)

      store.commit('SET_CURRENT_USER', { token: validUserExample.token })
      return store.dispatch('validate').then((user) => {
        expect(user).toEqual(validUserExample)
        expect(store.state.currentUser).toEqual(validUserExample)
      })
    })
  })
})

const validUserExample = {
  id: 1,
  username: 'admin',
  name: 'Vue Master',
  token: 'valid-token-for-admin',
}
