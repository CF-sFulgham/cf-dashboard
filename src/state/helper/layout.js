import { mapActions, mapGetters } from 'vuex';

export const layoutComputed = {
  ...mapGetters('layout/service', ['navigationRoutes', 'showBreadcrumbMenu', 'menuItems', 'page'])
}

export const layoutMethods = mapActions('layout/service', ['breadcrumbMenu, setSetting'])
