import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCZtIRh1OQ8q_ySc2QWOeIoXsearNv9nbg",
  authDomain: "ganggreen-10c76.firebaseapp.com",
  databaseURL: "https://ganggreen-10c76.firebaseio.com",
  projectId:  "ganggreen-10c76",
  storageBucket: 'ganggreen-10c76.appspot.com',
  messagingSenderId: '',
  appId: ''
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}