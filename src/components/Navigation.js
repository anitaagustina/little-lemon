import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.jpg";
import "../Styles.css";

function Navigation() {
    return (
        <>
        <nav className="navigation-menu">
            <img src={Logo} className="logo" alt="Little Lemon Logo" width="200"/>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;