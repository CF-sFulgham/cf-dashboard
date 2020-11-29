import { mapGetters, mapActions } from 'vuex'

export const usersComputed = {
  ...mapGetters('users/service', ['user']),
}

export const usersMethods = mapActions('user/service', ['login', 'logout'])