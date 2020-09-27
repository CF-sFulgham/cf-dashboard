import * as sessionFeature from './service'

describe('@state/features/session', () => {
  it('exports a valid Vuex module', () => {
    expect(sessionFeature).toBeAVuexModule()
  })
})
