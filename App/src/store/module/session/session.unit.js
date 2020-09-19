import * as sessionFeature from './session'

describe('@state/features/session', () => {
  it('exports a valid Vuex module', () => {
    expect(sessionFeature).toBeAVuexModule()
  })
})
