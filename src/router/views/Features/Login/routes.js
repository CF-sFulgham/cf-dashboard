import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'


const routesLogin = {
    path: '/',
    name: 'login',
    component: () => lazyLoadView(import('@viewFeatures/Login/login.vue')),
    props: true,
  }
  
  export { routesLogin }