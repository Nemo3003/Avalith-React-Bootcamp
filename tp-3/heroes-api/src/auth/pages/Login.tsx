import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./scss/login.css"

export const Login = ()=>{
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const { formState, onInputChange } = useForm ({
      username: "",
    });
    const { username}: any = formState;
  
    const onLogin = () => {
      if (username.trim().length <= 1) return;
  
      login(username);
  
      navigate("/", {
        replace: true,
      });
    };
  
    return(
<div className="container">

    <div className="panel">
        <form 
        action="" 
        method="post"
        onSubmit={()=> onLogin()}
        >

        <div className="panel-group">
            <input 
            className="input" 
            type="text"
            value= {username}
            onChange={onInputChange}
            required/>
            <span className="border"></span>
            <label>Username</label>
        </div>

        <button type="submit">Login</button>
        </form>

        <div className="panel-footer">
            <p><a href="#">Forgotten password?</a></p>
            <p>Not a member? <a href="#">Sign up now</a></p>
        </div>
    </div>
</div>
)}