import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'


const routesProfilePage = {
    path: '/profile',
    name: 'profile',
    component: () => lazyLoadView(import('@viewFeatures/Profile/profile.vue')),
    props: true,
  }
  
  export { routesProfilePage }