import Vue from 'vue'
import router from '@router'
import store from '@/src/state/store'
import vuetify from '@utils/plugins/vuetify'
import App from './App.vue'
// Globally register all `_base`-prefixed components
import '@components/_globals'

const appEnv = process.env.NODE_ENV
// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = appEnv === 'production'

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
