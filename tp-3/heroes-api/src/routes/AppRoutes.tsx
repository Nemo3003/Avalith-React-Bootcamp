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
              <Login/>
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes/>
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
