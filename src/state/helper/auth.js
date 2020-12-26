import { mapActions, mapGetters } from 'vuex'

export const authComputed = {
    ...mapGetters('auth', ['hasAuthError', 'errorMsg']),
  }
  
export const authMethods = mapActions('auth', ['getUser', 'login', 'logout', 'resetPage', 'getToken'])