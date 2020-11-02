import store from '@/src/state/store'

export default [
  {
    path: '/',
    name: 'appLoader',
    component: () => lazyLoadView(import('@viewFeatures/AppLoader/appLoader.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('layout/breadcrumbMenu', { display: false }, { root: true })
        next()
      },
    },
  },
  {
    path: '/audioFormSetup',
    name: 'audioFormSetup',
    component: () => lazyLoadView(import('@viewFeatures/AudioFormSetup/audioFormSetup.vue')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        const nav = [
          {
            name: 'home',
            title: 'Home',
          },
        ]
        store.dispatch('layout/setNavigationRoutes', { nav }, { root: true })
        store.dispatch('layout/breadcrumbMenu', { display: true }, { root: true })
        next()
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('@viewFeatures/404/404.vue').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@components/Loading/_loading.vue').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@components/Timeout/_timeout.vue').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(handle, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return handle(AsyncHandler, data, children)
    },
  })
}
