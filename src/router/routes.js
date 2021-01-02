import { routes404 } from '@viewFeatures/404/routes'
import { routesSignIn } from '@viewFeatures/SignIn/routes'
import { routesAppLoader } from '@viewFeatures/AppLoader/routes'
import { routesAudioFormSetup } from '@viewFeatures/AudioFormSetup/routes'
import { routesAccountPage } from '@viewFeatures/Account/routes'
import { routesBilling } from '@viewFeatures/Billing/routes'
import { routesProfilePage } from '@viewFeatures/Profile/routes'
import { routesDashboardPage } from '@viewFeatures/Dashboard/routes'
import { routesSendPasswordReset } from '@viewFeatures/SendPasswordReset/routes'
import { routesPassword } from '@viewFeatures/Password/routes'
import { routesProductsPage } from '@viewFeatures/Products/routes'
import { routesConversionsPage } from '@viewFeatures/Conversions/routes'
import { routesMetricsPage } from '@viewFeatures/Metrics/routes'
import { routesContactUsPage } from '@viewFeatures/ContactUs/routes'


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
  routesSendPasswordReset,
  routesPassword,
  routesProductsPage,
  routesMetricsPage,
  routesContactUsPage,
  // Redirect any unmatched routes to the sign in page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: { name: 'signIn' },
  },
  {
    path: '/',
    redirect: { name: 'signIn' },
  },
]
