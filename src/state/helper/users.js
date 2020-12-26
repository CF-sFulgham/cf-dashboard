import { mapGetters, mapActions } from 'vuex'

export const usersComputed = {
  ...mapGetters('users/service', ['username', 'profile']),
}

export const usersMethods = mapActions('users/service', ['setUser', 'setClaims'])