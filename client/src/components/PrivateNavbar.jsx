import React from 'react';
import { NavLink } from 'react-router-dom';

const PrivateNavbar = () => {
    return (
        <div>
            <nav className="primary-link"> 
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/categories"}>Categories</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/settings"}>Settings</NavLink>
                <NavLink to={"/LogOut"}>Log Out</NavLink>


            </nav>
            
        </div>
    );
}

export default PrivateNavbar;
