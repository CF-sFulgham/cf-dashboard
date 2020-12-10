import { routes404 } from '@viewFeatures/404/routes'
import { routesSignIn } from '@viewFeatures/SignIn/routes'
import { routesAppLoader } from '@viewFeatures/AppLoader/routes'
import { routesAudioFormSetup } from '@viewFeatures/AudioFormSetup/routes'
import { routesBilling } from '@viewFeatures/Billing/routes'
import { routesProfilePage } from '@viewFeatures/Profile/routes'
import { routesPasswordReset } from '@viewFeatures/PasswordReset/routes'
import { routesPasswordUpdate } from '@viewFeatures/PasswordUpdate/routes'

export default [
  routesSignIn,
  routesProfilePage,
  routesAppLoader,
  routesAudioFormSetup,
  routesBilling,
  routes404,
  routesPasswordReset,
  routesPasswordUpdate,
  
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]
