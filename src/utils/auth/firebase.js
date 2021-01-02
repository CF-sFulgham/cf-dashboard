import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

class FirebaseService {
  _refreshTokenCount = 0

  constructor() {}

  async login(email, password) {
    const auth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        return auth
      })
      .catch((err) => {
        console.log(err)
        return err
      })

    return auth
  }

  async getUser() {
    return await firebase.auth().currentUser
  }

  async requestResetPassword(email) {
    return await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true
      })
      .catch(err => Promise.reject(err))
  }

  async sendResetPassword({ code, newP }){
    return await firebase
      .auth()
      .confirmPasswordReset(code, newP)
      .then(() => {
        return true
      })
      .catch(err => Promise.reject(err))
  }

  async verifyCode(code) {
    return await firebase
      .auth()
      .verifyPasswordResetCode(code)
      .then(email => {
        return email
      })
      .catch(err => Promise.reject(err))
  }

  async logout() {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        return true
      })
      .catch(err => Promise.reject(err))
  }

  async accessToken(forceRefresh = false) {
    return await firebase
      .auth()
      .currentUser.getIdTokenResult(forceRefresh)
      .then((token) => {
        return token
      })
      .catch(err => Promise.reject(err))
  }

  async isTokenValid() {
    const token = await this.accessToken()
    if (!token.authTime) return Promise.reject(false)

    const expireTime = new Date(token.expirationTime).getTime()
    const nowTime = new Date().getTime()
    const isValid = !(expireTime < nowTime)
    return Promise.resolve(isValid)
  }

  async refreshToken() {
    if (this.refreshTokenCount > 0) {
      // this.refreshToken = 0
      return Promise.reject(false)
    }

    const hasNewToken = await this.accessToken(true)
    ++this.refreshTokenCount

    return Promise.resolve(hasNewToken)
  }
}

export { auth, FirebaseService }
