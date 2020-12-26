import { mapActions, mapGetters } from 'vuex'

export const alertComputed = {
  ...mapGetters('alert', ['show']),
}

export const alertMethods = mapActions('alert', ['showAlert', 'hideAlert'])
