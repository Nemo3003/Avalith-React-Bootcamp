import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseConfig } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {       
        const result = await signInWithPopup(FirebaseConfig, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmail = async ({ email, password, displayName }) =>{

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseConfig, email, password);
        await updateProfile( FirebaseConfig.currentUser, { displayName } );
        
        const { uid, photoURL } = resp.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }

}

export const loginWithEmailPassword = async ({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseConfig, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseConfig.signOut();
}
