import { lazyLoadView } from '@utils/routing'

const routesProfilePage = {
    path: '/profile',
    name: 'profile',
    component: () => lazyLoadView(import('@viewFeatures/Profile/profile-page.vue')),
    props: true,
  }
  
  export { routesProfilePage }