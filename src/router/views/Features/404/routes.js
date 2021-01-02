import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routes404 = {
  path: '/oops',
  name: '404',
  component: require('@viewFeatures/404/404.vue').default,
  props: true,
  meta: {
    authRequired: false,
  },
}

export { routes404 }