import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import React from "react"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/*' element={<Navigate to='/marvel' />} />
    </Routes>
  )
}