import React,{useMemo} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useDispatch, useSelector } from "react-redux";
import { Link, Link as RouterLink } from "react-router-dom";
import Swal from 'sweetalert2';
import "./scss/login.css"

export const Login = ()=>{
  const dispatch = useDispatch();

  const { status } = useSelector((state:any)=> state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange }:any = useForm({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const onLogin = (event:any) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}));
    navigate("/", {
      replace: true,
    });
  }

  const onGgSignIn = ()=>{
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
    navigate("/", {
      replace: true,
    });
  }

  
    return(
<div className="container">

    <div className="panel">
        <form method="post"onSubmit={onLogin}>

        <div className="panel-group">
            <input 
            id="textbox"
            className="input" 
            name="email"
            type="text"
 
            onChange={onInputChange}
            required/>
            <span className="border"></span>
            <label>Email</label>
        </div>
        <div className="panel-group">
            <input className="input" type="password" required/>
            <span className="border"></span>
            <label>Password</label>
        </div>
        <button type="submit">Login</button>
        <button  className="btn btn-outline-primary mt-3" type="submit"onClick={onGgSignIn}
                disabled={isChecking} >
            Google
            </button>
            <Link component={RouterLink} color="inherit" to="/auth/register" style={{display: 'flex', justifyContent: 'end'}} className='linkColor'>
              Crear una cuenta
            </Link>
        </form>
        
    </div>
</div>
)}