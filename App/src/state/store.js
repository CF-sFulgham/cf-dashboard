import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import dispatchActionForAllFeatures from '@/src/utils/dispatch/dispatch-action-for-all-modules'
// import { AxiosInstance } from '@utils/http'
// import { AxiosInstanceDev } from '@utils/http/devHttp'
import Logger from '@utils/logger'
import modules from './module'

Vue.use(Vuex)
const isDev = process.env.NODE_ENV === 'development'
const plugins = isDev ? [createLogger()] : []
const cfLogger = new Logger()

const store = new Vuex.Store({
  plugins: plugins,
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: isDev,
})

// store.$AxiosInstance = isDev ? new AxiosInstanceDev() : new AxiosInstance()
store.$Logger = cfLogger;

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllFeatures('init')
