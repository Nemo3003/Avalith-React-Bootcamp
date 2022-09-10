import React, { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {startCreatingUserWithEmail} from '../../store/auth/thunks'
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
  }:any = useForm(formData, formValidations);

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
      <div className="">
        <form onSubmit={onSubmit}>
          
          <div className="d-grid gap-2 mt-3">
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="FullName"
            type="text"
            placeholder="Full name"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Email"
            type="email"
            placeholder="john@example.com"
            name="email"
            value={email}
            onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{width:"40vw", borderRadius:"0.2em", padding:"0.5em"}}
              label="Password"
            type="password"
            placeholder="Password"
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