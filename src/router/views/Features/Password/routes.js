import { lazyLoadView } from '@utils/routing'
import store from '@/src/state/store'

const routesPassword = {
    path: '/auth/password',
    name: 'password',
    component: () => lazyLoadView(import('@viewFeatures/Password/password.vue')),
    props: true,
    meta: {
      authRequired: false,
      beforeResolve(routeTo, routeFrom, next) {
        if (Object.keys(routeTo.query).length) {
          //if the url has query (?query)
          const mode = routeTo.query.mode
          const code = routeTo.query.oobCode
          store.dispatch('auth/password/verifyCode', { mode, code })
            .then(email => {
              store.dispatch('auth/password/setEmail', email)
              next({ name: 'password'})
            })
            .catch(({ message }) => {
              const title = 'Oops!'
              const h1 = 'Your link has expired or has already been used.'
              const h2 = 'You can reset your password again on the Sign In page.'
              const linkText = 'Back to Sign In'
              const route = '/auth/signIn'
              store.dispatch('pageError/setPageDetails', { title, h1, h2, linkText, route })
              next({ name: '404'})
            })
        }
        next()
      },
    },
  }
  
  export { routesPassword }