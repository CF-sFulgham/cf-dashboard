import * as rosterFeature from './service'

describe('@state/features/roster', () => {
  it('exports a valid Vuex module', () => {
    expect(rosterFeature).toBeAVuexModule()
  })
})
