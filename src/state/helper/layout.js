import { mapState, mapActions, mapGetters } from 'vuex';

export const layoutComputed = {
  ...mapState('layout', {
    showBreadcrumbMenu: state => state.showBreadcrumbMenu,
    settings: state => state.settings
  }),
  ...mapGetters('layout', ['navigationRoutes'])
}

export const layoutMethods = mapActions('layout', ['breadcrumbMenu, setSetting'])
