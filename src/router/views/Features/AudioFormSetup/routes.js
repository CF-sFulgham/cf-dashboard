import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesAudioFormSetup = {
  path: '/audioFormSetup',
  name: 'audioFormSetup',
  component: () => lazyLoadView(import('@viewFeatures/AudioFormSetup/audioFormSetup.vue')),
  props: true,
  meta: {
    authRequired: true,
    resolve(routeTo, routeFrom, next) {
      const nav = [
        {
          name: 'home',
          title: 'Home',
        },
      ]
      store.dispatch('layout/service/setNavigationRoutes', { nav }, { root: true })
      store.dispatch('layout/service/breadcrumbMenu', { display: true }, { root: true })
      next()
    },
  },
}

export { routesAudioFormSetup }