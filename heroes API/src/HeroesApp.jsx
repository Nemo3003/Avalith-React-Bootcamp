import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import "./styles/styles.css";

import 'animate.css';

export const HeroesApp = () => {
  return (
   <div className="pyro">
      <div className="before">
      </div>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>     
      
      <div className="after"></div>
   </div>
  )
}
