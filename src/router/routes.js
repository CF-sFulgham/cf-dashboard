import { routes404 } from '@viewFeatures/404/routes'
import { routesAppLoader } from '@viewFeatures/AppLoader/routes'
import { routesAudioFormSetup } from '@viewFeatures/AudioFormSetup/routes'

export default [
  routesAppLoader,
  routesAudioFormSetup,
  routes404,
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@viewFeatures/Login/login.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('layout/breadcrumbMenu', { display: false }, { root: true })
        next()
      },
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => lazyLoadView(import('@viewFeatures/Profile/profile.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('layout/breadcrumbMenu', { display: false }, { root: true })
        next()
      },
    },
  },
]
