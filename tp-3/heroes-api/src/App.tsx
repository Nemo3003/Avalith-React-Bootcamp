import React from "react";
import { AppRouter } from "./routes/AppRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </>
  );
};
