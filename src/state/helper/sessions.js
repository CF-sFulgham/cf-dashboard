import { mapGetters, mapActions, mapState } from 'vuex'

export const stateComputed = {
  ...mapState('sessions/service', {
    pageState: (state) => state.pageState,
  }),
}

export const sessionsComputed = mapGetters('sessions/service', [
  'pastSessions',
  'currentSessions',
  'upcomingSessions',
])

export const sessionsMethods = mapActions('sessions/service', [
  'fetchSessions',
  'filterSessions',
  'resetSessions',
  'selectSession',
  'saveSelectedSession',
])
