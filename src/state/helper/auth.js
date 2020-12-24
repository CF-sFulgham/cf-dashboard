import { mapActions, mapGetters } from 'vuex'

export const authComputed = {
    ...mapGetters('auth', ['hasFbError', 'errorMsg']),
  }
  
  export const authMethods = mapActions('auth', ['getUser', 'login', 'logout'])