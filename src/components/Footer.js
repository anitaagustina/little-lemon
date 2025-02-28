import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.jpg";
import "../Styles.css";

function Footer() {
 return (
    <>
    <section className="long-footer">
        <section>
            <img src={Logo} className="logo" alt="Little Lemon Logo" width="200"/>
        </section>
        <section>
            <p>Doormat Navigation</p>
            <p><a href="#">Home</a></p>
            <p><a>About</a></p>
            <p><a>Menu</a></p>
            <p><a href="/reservations">Reservations</a></p>
            <p><a>Order Online</a></p>
            <p><a>Login</a></p>
        </section>
        <section>
            <p>Contact</p>
            <p>150 W Lake ST, Chicago</p>
            <p>312-881-5890</p>
            <p>littlelemon@gmail.com</p>
        </section>
        <section>
            <p>Social media link</p>
            <p><a href="https://www.instagram.com" target="_blank">Instagram</a></p>
            <p><a href="https://www.tiktok.com">Tiktok</a></p>
            <p><a href="mailto:">Gmail</a></p>
        </section>
    </section>
    <div className="footer">Copyright - Little Lemon 2025</div>
    </>
);
}

export default Footer;