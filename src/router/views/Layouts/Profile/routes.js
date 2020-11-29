import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'


const routesProfilePage = {
    path: '/',
    name: 'profile',
    component: () => lazyLoadView(import('@viewLayouts/Profile/profile-page.vue')),
    props: true,
  }
  
  export { routesProfilePage }