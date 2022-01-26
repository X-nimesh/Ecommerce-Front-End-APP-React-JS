import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Pages/Login';
let auth = () => {
    let user=false;
    return user;
}
const ProtectedRoutes = () => {
    // console.log(auth())
    let isAuth= auth();

    return isAuth ? <Outlet/> : <Login/>;
    }


export default ProtectedRoutes;
