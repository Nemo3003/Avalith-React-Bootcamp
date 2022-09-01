// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC397zKHKNeM2jeLSvWhfUcikr1hz_LkzA",
  authDomain: "avalith-notes-app.firebaseapp.com",
  projectId: "avalith-notes-app",
  storageBucket: "avalith-notes-app.appspot.com",
  messagingSenderId: "663270995624",
  appId: "1:663270995624:web:bfbf788206f3df3f88b49d"
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp);
export const FirebaseDB = getFirestore(FireBaseApp)