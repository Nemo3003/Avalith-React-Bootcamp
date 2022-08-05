import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from './AboutPage'
import Error404 from './Error404'
import { Login } from './Login'

export const MainApp = () => {
  return (
    <>
    <h3>Main</h3>
    <hr />
    <Router>
       <Routes> 
          <Route path="/" element={<MainApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404 />} />
       </Routes>
    </Router>
    </>
  )
}
