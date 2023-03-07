// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2SWRKCO9eA_MgBhrCrZoXBA2rkGsxKw",
  authDomain: "netflix-clone-2c43d.firebaseapp.com",
  projectId: "netflix-clone-2c43d",
  storageBucket: "netflix-clone-2c43d.appspot.com",
  messagingSenderId: "507785096671",
  appId: "1:507785096671:web:311c52bf0af24c99a9286a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
