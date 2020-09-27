import { mapState } from 'vuex'

export const apiComputed = {
  ...mapState('api', {
    apiState: (state) => state.apiState,
  }),
}
