import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesAppLoader = {
  path: '/appLoader',
  name: 'appLoader',
  component: () => lazyLoadView(import('@viewFeatures/AppLoader/appLoader.vue')),
  props: true,
  meta: {
    authRequired: false,
  },
}

export { routesAppLoader } 