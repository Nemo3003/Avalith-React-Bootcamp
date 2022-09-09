import React,{useMemo} from "react";
import useState from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link, Link as RouterLink } from "react-router-dom";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import "./scss/login.css"

export const Login = ()=>{
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
 
  
    const { formState, onInputChange }:any = useForm ({
      username: "",
    });
    const { username}: any = formState;
  
    const onLogin = () => {
      if (username.trim().length <= 1) return;
  
      login(username);
  
      navigate("/", {
        replace: true,
      });
      {Swal.fire(
        'You have logged in!',
        'Take a look to our heroes!',
        'success'
      )}
    };
  
    return(
<div className="container">

    <div className="panel">
        <form method="post"onSubmit={()=> onLogin()}>

        <div className="panel-group">
            <input 
            id="textbox"
            className="input" 
            name="username"
            type="text"
            value= {username}
            onChange={onInputChange}
            required/>
            <span className="border"></span>
            <label>Username</label>
        </div>
        <div className="panel-group">
            <input className="input" type="password" required/>
            <span className="border"></span>
            <label>Password</label>
        </div>
        <button type="submit">Login</button>
        </form>
        
    </div>
</div>
)}