import React, { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import Typed from "react-typed";
import "../../../src/styles.css"
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {startCreatingUserWithEmail} from '../store/auth/thunks'
import { useDispatch, useSelector } from "react-redux";



const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    [(value:any) => value.includes("@"), "El correo debe tener un @"],
    [
      (value:any) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value:any) => value.length >= 6,
      "El password debe tener al menos 6 caracteres",
    ],
  ],
  displayName: [
    [(value:any) => value.length >= 1, "El nombre es obligatorio"],
    [(value:any) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
  ]
};



export const Register = () => {
  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event:any) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    const navigate = useNavigate();
    dispatch(startCreatingUserWithEmail(formState));
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vw-100 vh-100 bg-dark ">
        <img
          className=" rounded-circle" 
          src="https://c.tenor.com/OrWIV_jmwE0AAAAM/heart-i-love-you.gif"
          alt="gif"
        />
        <form onSubmit={onSubmit}>
          <Typed
          className="d-flex justify-content-center text-white logintyping"
            strings={[
              '"Bad Deadpool... Good Deadpool!"',
              '"Say the magic words, Fat Gandalf."',
              '"This is my most prized possession.."',
              '"Captain Deadpool! No, just Deadpool."',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <div className="d-grid gap-2 mt-3">
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Nombre Completo"
            type="text"
            placeholder="Nombre Completo"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
            />
            <button disabled={!isFormValid && formSubmited} className="btn btn-outline-primary mt-3" type="submit">
            Crear una cuenta
            </button>

            <Link component={RouterLink} color="inherit" to="/auth/login" style={{display: 'flex', justifyContent: 'end'}}>
            Ya tengo una cuenta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};