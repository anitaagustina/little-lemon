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
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;