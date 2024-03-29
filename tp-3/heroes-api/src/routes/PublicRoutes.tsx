import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoutes = ({ children }:any) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/marvel"/>;
};
