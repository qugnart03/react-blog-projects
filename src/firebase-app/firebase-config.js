import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCju4DCIXlaGeGhdqx-5PL0HiGiLWNJ6UI',
  authDomain: 'clickandtrust-blogging.firebaseapp.com',
  projectId: 'clickandtrust-blogging',
  storageBucket: 'clickandtrust-blogging.appspot.com',
  messagingSenderId: '526541543789',
  appId: '1:526541543789:web:2befeab43d407f28d4e264',
  measurementId: 'G-0WBYK82YQG',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
