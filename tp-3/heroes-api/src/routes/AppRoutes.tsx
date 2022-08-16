import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
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
              <LoginPage></LoginPage>
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
