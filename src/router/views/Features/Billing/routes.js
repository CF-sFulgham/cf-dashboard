import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesBilling = {
    path: '/billing',
    name: 'billing',
    component: () => lazyLoadView(import('@viewFeatures/Billing/billing.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        const nav = [
          {
            name: 'billing',
            title: 'Billing',
          },
        ]
        store.dispatch('layout/setNavigationRoutes', { nav }, { root: true })
        store.dispatch('layout/breadcrumbMenu', { display: true }, { root: true })
        next()
      },
    },
  }

  export { routesBilling }