import Vue from 'vue'
import router from '@router'
import store from '@/src/state/store'
// import { User } from '@utils/user'
import App from './App.vue'
// Globally register all `_base`-prefixed components
import '@components/_globals'
import { auth } from './utils/auth/firebase'

const appEnv = process.env.NODE_ENV
// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = appEnv === 'production'
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
