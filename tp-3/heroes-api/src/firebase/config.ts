import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyDjT-G7l8n2vTlXjjuuSHr5KbwfzsyLdHw",
    authDomain: "heroes-app-dff02.firebaseapp.com",
    projectId: "heroes-app-dff02",
    storageBucket: "heroes-app-dff02.appspot.com",
    messagingSenderId: "348841425608",
    appId: "1:348841425608:web:86160ae6dd6ac6a33a83fd"
};
  

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );