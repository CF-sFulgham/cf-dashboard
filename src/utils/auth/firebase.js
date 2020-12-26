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
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

class FirebaseService {
  constructor(){}

  async login(email, password){
    const auth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        return auth
      })
      .catch(err => {
        console.log(err)
        return err
      })

    return auth
  }

  async getUser(){
    return await firebase.auth().currentUser
  }

  async logout() {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
          return true
      })
      .catch(err => {
        console.log(err)
        return err
      })
  }

  async accessToken(forceRefresh = false) {
    return await firebase
      .auth()
      .currentUser.getIdTokenResult(forceRefresh)
      .then(token => {
        return token
      })
      .catch(err => {
        console.log(err);
        return err
      });
  }

  async isTokenValid() {
    const token = await this.accessToken()
    if(!token.authTime) return false

    const expireTime = new Date(token.expirationTime).getTime()
    const nowTime = new Date().getTime()
    return !(expireTime < nowTime)
  }

  async refreshToken() {
    return await this.accessToken(true)
  }
}

export { auth, FirebaseService }

