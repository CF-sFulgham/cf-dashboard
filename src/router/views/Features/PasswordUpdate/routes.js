import { lazyLoadView } from '@utils/routing'


const routesPasswordUpdate = {
    path: '/passwordupdate',
    name: 'passwordupdate',
    component: () => lazyLoadView(import('@viewFeatures/PasswordUpdate/passwordUpdate.vue')),
    props: true,
  }
  
  export { routesPasswordUpdate }