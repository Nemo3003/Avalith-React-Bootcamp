import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyDM48mzwICg-7Zx46e_ps0roOm4jxsxGkM",
    authDomain: "skillfactory-react.firebaseapp.com",
    projectId: "skillfactory-react",
    storageBucket: "skillfactory-react.appspot.com",
    messagingSenderId: "22167952702",
    appId: "1:22167952702:web:6fba39b785d3cfa271e06f"
};
  

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );