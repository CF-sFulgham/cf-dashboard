import { mapGetters, mapActions, mapState } from 'vuex'

export const stateComputed = {
  ...mapState('classes/service', {
    pageState: (state) => state.pageState,
  }),
}

export const classesComputed = mapGetters('classes/service', [ 'pastClasses', 'currentClasses', 'upcomingClasses'])

export const classesMethods = mapActions('classes/service', ['fetchClasses', 'filterClasses', 'resetClasses', 'selectClass', 'saveSelectedClass'])
