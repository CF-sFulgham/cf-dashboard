import store from '@/src/state/store'
import { lazyLoadView } from '@utils/routing'


const routesSignIn = {
    path: '/auth/signIn',
    name: 'signIn',
    component: () => lazyLoadView(import('@viewFeatures/SignIn/signIn.vue')),
    props: true,
    meta: {
      authRequired: false,
    },
  }
  
  export { routesSignIn }