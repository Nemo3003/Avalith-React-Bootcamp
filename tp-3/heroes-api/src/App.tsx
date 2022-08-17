import React from "react";
import { AppRouter } from "./routes/AppRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";
import "../src/heroes/scss/styles.css"

export const HeroesApp = () => {
  return (
    <>
    <div className="pyro">
    <div className="before"></div>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    <div className="after"></div>
    </div>
    </>
  );
};
