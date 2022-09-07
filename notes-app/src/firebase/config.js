import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyC397zKHKNeM2jeLSvWhfUcikr1hz_LkzA",
  authDomain: "avalith-notes-app.firebaseapp.com",
  projectId: "avalith-notes-app",
  storageBucket: "avalith-notes-app.appspot.com",
  messagingSenderId: "663270995624",
  appId: "1:663270995624:web:bfbf788206f3df3f88b49d"
};
  

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );