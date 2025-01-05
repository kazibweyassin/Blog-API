import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicNavbar = () => {
    return (
        <div>
            <nav className='primary-link'>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/signup"}>SignUp</NavLink>
            </nav>
            
        </div>
    );
}

export default PublicNavbar;
