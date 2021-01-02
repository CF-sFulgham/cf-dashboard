import { mapGetters, mapActions } from 'vuex'

export const pageErrorComputed = {
    ...mapGetters('pageError', ['title', 'h1', 'h2', 'linkText', 'route'])
}

export const pageErrorMethods = mapActions('pageError', ['setPageDetails'])