import { mapActions, mapGetters } from 'vuex'

export const authComputed = {
  ...mapGetters('auth', [
    'hasAuthError',
    'hasSuccessMsg',
    'errorMsg',
    'successMsg',
  ]),
}

export const passwordComputed = {
  ...mapGetters('auth/password', [
    'mode',
    'email',
  ]),
}

export const authMethods = mapActions('auth', [
  'getUser',
  'login',
  'logout',
  'resetPage',
  'getToken',
  'resetPassword',
])

export const resetMethods = mapActions('auth/reset', [
  'requestResetPassword',
])

export const passwordMethods = mapActions('auth/password', [
  'sendPasswordReset',
])
