import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'


const routesSignIn = {
    path: '/',
    name: 'signIn',
    component: () => lazyLoadView(import('@viewFeatures/SignIn/signIn.vue')),
    props: true,
  }
  
  export { routesSignIn }