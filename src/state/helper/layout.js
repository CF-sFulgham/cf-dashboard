import { mapState, mapActions, mapGetters } from 'vuex';

export const layoutComputed = {
  ...mapState('layout', {
    showBreadcrumbMenu: state => state.showBreadcrumbMenu,
    settings: state => state.settings
  }),
  ...mapGetters('layout/service', ['navigationRoutes'])
}

export const layoutMethods = mapActions('layout/service', ['breadcrumbMenu, setSetting'])
