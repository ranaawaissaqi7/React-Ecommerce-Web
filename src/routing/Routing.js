import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from '../auth/signUp/SignUp'
import Login from '../auth/login/Login'
import Home from '../pages/home/Home'
import Header from '../components/header/Header'
import CardDetailPage from '../pages/cardDetailPage/CardDetailPage'
import ShipingAdress from '../pages/shipingAdress/ShipingAdress'
import UserAdmin from '../pages/userAdmin/UserAdmin'
import { useSelector } from 'react-redux'
import PrivateRoute from '../important/PrivateRoute'
import UserDetailPage from '../pages/userDetailPage/UserDetailPage'
import EditUser from '../pages/editUser/EditUser'


export default function Routing() {
  const { isAuth } = useSelector((state) => state.authHandling)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/userAdmin" />} />
        <Route path="/:id" element={<CardDetailPage />} />
        <Route path="/shipingAdress" element={<PrivateRoute component={ShipingAdress} />} />
        <Route path="/userAdmin" element={<PrivateRoute component={UserAdmin} />} />
        <Route path="/userDetailPage" element={<PrivateRoute component={UserDetailPage} />} />
        <Route path="/editUser/:id" element={<PrivateRoute component={EditUser} />} />
      </Routes>
    </BrowserRouter>
  )
}
