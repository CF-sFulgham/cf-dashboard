import { lazyLoadView } from '@utils/routing'

const routesConversionsPage = {
    path: '/conversions',
    name: 'conversions',
    component: () => lazyLoadView(import('@viewFeatures/Conversions/conversions-page.vue')),
    props: true,
    meta: {
      authRequired: true,
    },
  }
  
  export { routesConversionsPage }