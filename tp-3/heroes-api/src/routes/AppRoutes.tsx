import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login></Login>
            </PublicRoutes>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes></HeroesRoutes>
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
};
