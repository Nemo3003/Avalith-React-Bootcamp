import { AppRouter } from "./routes/AppRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";
import React, { useState } from 'react'
import "../src/heroes/scss/styles.css"


export const App = () => {

  return (
    <>
   <div className="App">

    <div className="pyro">
    <div className="before"></div>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    <div className="after"></div>
    </div>
    
    </div>
    </>
  );
    }
const rootElement = document.getElementById("root");