import { lazyLoadView } from '@utils/routing'
import store from '@/src/state/store'

const routesProfilePage = {
    path: '/profile',
    name: 'profile',
    component: () => lazyLoadView(import('@viewFeatures/Profile/profile-page.vue')),
    props: true,
    meta: {
      authRequired: true,
      resolve(routeTo, routeFrom, next) {
        const nav = [
          {
            name: 'account',
            title: 'Account',
          },
          {
            name: 'profile',
            title: 'Profile',
          },
        ]
        const menuItem = { name: 'account' }
        const page = { title: 'My Profile'}
  
        store.dispatch('layout/service/setNavigationRoutes', { nav, }, { root: true, })
        store.dispatch('layout/service/breadcrumbMenu', { display: true, }, { root: true, })
        store.dispatch('layout/service/setMenuItemState', { menuItem, }, { root: true, })
        store.dispatch('layout/service/setPageTitle', { page, }, { root: true, })
  
        next()
      },
    },
    
  }
  
  export { routesProfilePage }