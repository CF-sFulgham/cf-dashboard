import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'

const routesBilling = {
  path: '/billing',
  name: 'billing',
  component: () => lazyLoadView(import('@viewFeatures/Billing/billing.vue')),
  props: true,
  meta: {
    authRequired: true,
    resolve(routeTo, routeFrom, next) {
      const nav = [
        {
          name: 'account',
          title: 'Account',
        },
        {
          name: 'billing',
          title: 'Billing',
        },
      ]
      const menuItem = { name: 'account' }
      const page = { title: 'My Billing'}

      store.dispatch('layout/service/setNavigationRoutes', { nav, }, { root: true, })
      store.dispatch('layout/service/breadcrumbMenu', { display: true, }, { root: true, })
      store.dispatch('layout/service/setMenuItemState', { menuItem, }, { root: true, })
      store.dispatch('layout/service/setPageTitle', { page, }, { root: true, })

      next()
    },
  },
}

export { routesBilling }
