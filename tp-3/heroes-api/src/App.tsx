import { AppRouter } from "./routes/AppRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";
import React, { useState } from 'react'
import "../src/heroes/scss/styles.css"


export const App = () => {
  const CurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    } , 1000);
    return time;
  }
  const WhereAmINow = () => {
    const [whereAmI, setWhereAmI] = useState();
    return window.location.pathname
  }
  const WhichIsMyCountry = () => {
    return 'Argentina'
  }
  const handleNight = () => {
    document.body.classList.toggle("dark");
    
  }
  const handleViolet = () => {
    document.body.classList.toggle("violet");
  }
  return (
    <>
    
   <div className="App">
   
   {`Current Time: ${CurrentTime()} in ${WhichIsMyCountry()}`}
   <br />
    {`YOU ARE CURRENTLY AT: ${WhereAmINow()}`}
    <div className="pyro">
    <div className="before"></div>
    <button onClick={handleNight}>Night/Light Mode</button>
    <button onClick={handleViolet}>Violet</button>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    <div className="after"></div>
    </div>
    </div>
    </>
  );
    }
const rootElement = document.getElementById("root");