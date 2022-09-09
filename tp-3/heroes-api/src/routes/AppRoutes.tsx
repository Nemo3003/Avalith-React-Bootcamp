import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../auth/components/CheckingAuth";
import { Login } from "../auth/pages/Login";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
export const AppRouter = () => {
  const { status } = useCheckAuth();
  if(status==='checking') return <CheckingAuth/>
  return (
    <>
      <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<HeroesRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        } 

        <Route path='/*' element={<Navigate to='/auth/login' />} />      

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
