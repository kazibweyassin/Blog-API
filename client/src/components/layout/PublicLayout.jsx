import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PublicNavbar from '../PublicNavbar';


const PublicLayout = () => {
    const auth = true;

    if(!auth) {
        return <Navigate to={"/home"}/>
    }
    return (
        <>
        <PublicNavbar/>
        <Outlet/>
        </>          
           
    );
   }

export default PublicLayout;
