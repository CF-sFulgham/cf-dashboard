import { lazyLoadView } from '@utils/routing'

const routesMetricsPage = {
    path: '/metrics',
    name: 'metrics',
    component: () => lazyLoadView(import('@viewFeatures/Metrics/metrics-page.vue')),
    props: true,
    meta: {
      authRequired: true,
    },
  }
  
  export { routesMetricsPage }