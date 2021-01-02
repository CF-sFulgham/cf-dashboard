import { lazyLoadView } from '@utils/routing'

const routesContactUsPage = {
    path: '/contactus',
    name: 'contact us',
    component: () => lazyLoadView(import('@viewFeatures/ContactUs/contactUs-page.vue')),
    props: true,
    meta: {
      authRequired: true,
    },
  }
  
  export { routesContactUsPage }