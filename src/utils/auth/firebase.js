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

// util
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

class FirebaseService {
  constructor(){}

  async login(email, password){
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        return auth
      })
      .catch(err => {
        return false
      })
  }

  async getUser() {
    return await firebase
      .auth()
      .onAuthStateChanged(user => {
        return user
      })
      .catch(err => {
        console.log(err)
        return false
      })
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
        return false
      })
  }

  async hasAccess() {
    return await firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(token => {
        // Confirm the user is an Admin.
        console.log(token.claims)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  FirebaseService,
}

