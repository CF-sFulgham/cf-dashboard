import { routes404 } from '@viewFeatures/404/routes'
import { routesLogin } from '@viewFeatures/Login/routes'
import { routesAppLoader } from '@viewFeatures/AppLoader/routes'
import { routesAudioFormSetup } from '@viewFeatures/AudioFormSetup/routes'
import { routesProfilePage } from '@viewFeatures/Profile/routes'

export default [
  routesLogin,
  routesProfilePage,
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
]
