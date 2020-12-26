import { lazyLoadView } from '@utils/routing'


const routesPasswordReset = {
    path: '/passwordreset',
    name: 'passwordreset',
    component: () => lazyLoadView(import('@viewFeatures/PasswordReset/passwordReset.vue')),
    props: true,
  }
  
  export { routesPasswordReset }