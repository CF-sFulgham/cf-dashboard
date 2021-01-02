import axios from 'axios'
import { Config } from '../config'
import { Router } from '@router'

class AxiosInstance {
  _baseURL
  _origin
  _body
  _auth
  _instance
  _timeout = 15000
  _cancelToken = axios.CancelToken
  _source = this._cancelToken.source()
  _headers = { 'Content-Type': 'application/json' }
  _isMakingCall = false

  constructor() {
    this.init()
  }

  init() {
    this._body = {}
    this._baseURL = Config.get('settings.endpoints.api') || process.env.VUE_APP_BASE_URL
  }

  getInstance() {
    const _self = this
    _self._instance = axios.create({
      baseURL: _self._baseURL,
      headers: _self._headers,
    })

    _self._instance.interceptors.request.use(
      (request) => _self.requestHandler(request),
      (response) => _self.successHandler(response),
      (error) => _self.errorHandler(error)
    )

    _self._instance.setAuth = auth => {
      _self._instance._auth = auth
    }

    return _self._instance
  }

  async requestHandler(req) {
    const auth = this._instance._auth
    const isTokenValid = await auth.isTokenValid()
    // cancels the call if it taking too long.

    if (!isTokenValid) {
      const hasNewToken = await auth.refreshToken()

      if(!hasNewToken){
        this._source.cancel('User is no longer signed in.')
        auth.logout().then(() => {
          Router.push('/auth/signIn')
        })
        return
      }
    }

    const { token } = await auth.accessToken()

    if(token) req.headers.authorization = `bearer ${token}`
    
    this._isMakingCall = true

    const _self = this
    setTimeout(() => {
      if (_self._isMakingCall)
        _self._source.cancel('Call exceeded allotted time.')
    }, _self._timeout)

    return req
  }

  errorHandler(err) {
    if (this._instance.isCancel(err)) {
      console.log('Request canceled', err.message)
    } else {
      // handle error
      console.log(err)
    }
    // Log error
    console.log(err)

    return new Promise().reject({ ...err })
  }

  successHandler(response) {
    // Log success
    _self._isMakingCall = false
    return new Promise().resolve({ ...response })
  }
}

export { AxiosInstance }
