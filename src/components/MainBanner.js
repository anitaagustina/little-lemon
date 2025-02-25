import React from "react";
import Banner from "../banner.jpg";
import "../Styles.css";

function MainBanner() {
    return (
        <section className="banner">
            <div className="banner-left">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="banner-right">
                <img src={Banner} width="200" alt="Banner Little Lemon"/>
            </div>
        </section>
    );
}

export default MainBanner;

