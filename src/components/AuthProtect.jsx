import {Navigate, Outlet} from 'react-router-dom'


import React, { useContext, useState } from 'react'
import apiContext from '../Hooks/AuthProvaider'

function AuthProtect() {
    const {userContextValue} = apiContext()

    // const [user, setUser] = useState(true)
    if(userContextValue){
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}

export default AuthProtect
