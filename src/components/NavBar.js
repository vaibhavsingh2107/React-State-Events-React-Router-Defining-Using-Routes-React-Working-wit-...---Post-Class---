import React from 'react';
import { Outlet, Link } from "react-router-dom";


export const NavBar = () =>{
    return(
        <nav>
            <ul>
            <Link to="/" className='index-link'>Index Page</Link>
            <Link to="/home" className='home-link'>Home Page</Link>
            </ul>
        </nav>
    )
}