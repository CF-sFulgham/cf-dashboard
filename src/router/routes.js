import { routes404 } from '@viewFeatures/404/routes'
import { routesSignIn } from '@viewFeatures/SignIn/routes'
import { routesAppLoader } from '@viewFeatures/AppLoader/routes'
import { routesAudioFormSetup } from '@viewFeatures/AudioFormSetup/routes'
import { routesAccountPage } from '@viewFeatures/Account/routes'
import { routesBilling } from '@viewFeatures/Billing/routes'
import { routesProfilePage } from '@viewFeatures/Profile/routes'
import { routesDashboardPage } from '@viewFeatures/Dashboard/routes'
import { routesPasswordReset } from '@viewFeatures/PasswordReset/routes'
import { routesPasswordUpdate } from '@viewFeatures/PasswordUpdate/routes'
import { routesProductsPage } from '@viewFeatures/Products/routes'
import { routesConversionsPage } from '@viewFeatures/Conversions/routes'


export default [
  routesSignIn,
  routesAccountPage,
  routesProfilePage,
  routesConversionsPage,
  routesDashboardPage,
  routesAppLoader,
  routesAudioFormSetup,
  routesBilling,
  routes404,
  routesPasswordReset,
  routesPasswordUpdate,
  routesProductsPage,
  
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]
