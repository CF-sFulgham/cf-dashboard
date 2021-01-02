import { lazyLoadView } from '@utils/routing'
import store from '@/src/state/store'

const routesSendPasswordReset = {
  path: '/auth/reset',
  name: 'sendPasswordreset',
  component: () =>
    lazyLoadView(import('@viewFeatures/SendPasswordReset/sendPasswordReset.vue')),
  props: true,
  meta: {
    authRequired: false,
  },
}

export { routesSendPasswordReset }
