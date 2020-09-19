import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth/service', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth/service', ['loggedIn']),
}

export const authMethods = mapActions('auth/service', ['logIn', 'logOut'])
