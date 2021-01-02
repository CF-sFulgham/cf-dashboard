import { lazyLoadView } from '@utils/routing'

const routesDashboardPage = {
    path: '/dashboard',
    name: 'dashboard',
    component: () => lazyLoadView(import('@viewFeatures/Dashboard/dashboard-page.vue')),
    props: true,
    meta: {
      authRequired: true,
    },
  }
  
  export { routesDashboardPage }