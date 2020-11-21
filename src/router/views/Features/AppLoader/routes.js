import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesAppLoader = {
  path: '/',
  name: 'appLoader',
  component: () => lazyLoadView(import('@viewFeatures/AppLoader/appLoader.vue')),
  meta: {
    beforeResolve(routeTo, routeFrom, next) {
      store.dispatch('layout/breadcrumbMenu', { display: false }, { root: true })
      next()
    },
  },
}

export { routesAppLoader }