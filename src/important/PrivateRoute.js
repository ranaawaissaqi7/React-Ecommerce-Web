import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("comp => ", rest)
    const { isAuth } = useSelector((state) => state.authHandling)

    return isAuth ? <Component {...rest} /> : <Navigate to="/login" />
}

export default PrivateRoute
