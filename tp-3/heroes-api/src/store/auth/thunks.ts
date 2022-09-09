
import { async } from "@firebase/util";
import { loginWithEmailPassword, registerUserWithEmail, signInWithGoogle, logoutFirebase} from "../../firebase/providers";
import { login, logout, checkingCredentials } from "./authSlice"
export const checkingAuthentication = (email:String, password:any) =>{
    return async (dispatch:any)=>{
        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch:any)=>{
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmail = ({email, password, displayName}:any) =>{
    return async (dispatch:any) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmail({email, password, displayName});

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startLoginWithEmailPassword = ({email, password}:any) => {
    return async (dispatch:any) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}


export const startLogout = () => {
    return async(dispatch:any) => {
        await logoutFirebase();
        dispatch(logout(null));
    }
}