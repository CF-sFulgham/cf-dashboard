import { lazyLoadView } from '@utils/routing'

const routesAccountPage = {
    path: '/account',
    name: 'account',
    component: () => lazyLoadView(import('@viewFeatures/Account/account-page.vue')),
    props: true,
    meta: {
      authRequired: true,
    },
  }
  
  export { routesAccountPage }