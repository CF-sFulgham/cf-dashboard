import Vue from 'vue'
import Vuex from 'vuex'
import { AxiosInstance } from '../utils/http'
//import createLogger from 'vuex/dist/logger'
import dispatchActionForAllFeatures from '@/src/utils/dispatch/dispatch-action-for-all-modules'
import Logger from '@utils/logger'
import modules from './module'
import { FirebaseService } from '@utils/auth/firebase'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'
// const plugins = isDev ? [createLogger()] : []
const cfLogger = new Logger()
const store = new Vuex.Store({
  plugins: [],
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: isDev,
})

store.$AxiosInstance = new AxiosInstance().getInstance()
store.$Logger = cfLogger
store.$auth = new FirebaseService()
export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllFeatures('init')
