import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner.jpg";
import Specials from "../specials-1.jpg";
import Avatar from "../avatar.png";
import Brothers from "../brothers.jpg";
import "../Styles.css";

function Main() {
    return (
    <>
    <div className="container">
        <section className="banner">
            <div className="banner-left">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="main-btn"><Link to="/reservations">Reserve a table</Link></button>
            </div>
            <div className="banner-right">
                <img src={Banner} width="200" alt="Banner Little Lemon"/>
            </div>
        </section>
        <section className="specials">
            <div className="specials-top">
                <h2>Specials</h2>
                <button className="main-btn">Online Menu</button>
            </div>
            <section className="specials-gallery">
                <section className="menu-gallery">
                    <img src={Specials} alt="Special Menu Little Lemon"/>
                    <div className="right-content">
                        <p>Greek Salad </p>
                        <p>$12.90</p>
                    </div> 
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.</p>
                    <button className="main-btn menu-gallery">Order a delivery</button>
                </section>
                <section className="menu-gallery">
                    <img src={Specials} alt="Special Menu Little Lemon"/>
                    <div className="right-content">
                        <p>Greek Salad </p>
                        <p>$12.90</p>
                    </div> 
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.</p>
                    <button className="main-btn menu-gallery">Order a delivery</button>
                </section>
                <section className="menu-gallery">
                    <img src={Specials} alt="Special Menu Little Lemon"/>
                    <div className="right-content">
                        <p>Greek Salad </p>
                        <p>$12.90</p>
                    </div> 
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.</p>
                    <button className="main-btn menu-gallery">Order a delivery</button>
                </section>
            </section>
        </section>
        <section className="main-testimonials">
        <p>Testimonials</p>
            <section className="testimonials">
                <section className="testimonials-single">
                    <p>Clara</p>
                    <img src={Avatar} alt="Testimonials" width="100"/>
                    <p>"I really love their Greek Salad! It's my go-to meal everyday!"</p>
                </section>
                <section className="testimonials-single">
                    <p>Clara</p>
                    <img src={Avatar} alt="Testimonials" width="100"/>
                    <p>"I really love their Greek Salad! It's my go-to meal everyday!"</p>
                </section>
                <section className="testimonials-single">
                    <p>Clara</p>
                    <img src={Avatar} alt="Testimonials" width="100"/>
                    <p>"I really love their Greek Salad! It's my go-to meal everyday!"</p>
                </section>
                <section className="testimonials-single">
                    <p>Clara</p>
                    <img src={Avatar} alt="Testimonials" width="100"/>
                    <p>"I really love their Greek Salad! It's my go-to meal everyday!"</p>
                </section>
            </section>
        </section>
        <section className="about">

            <div className="banner-left">
                <h1>About Little Lemon</h1>
                <p>Adam & Garry</p>
                <p>We want to cherish our culture by creating Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="banner-right">
                <img src={Brothers} width="500" alt="Banner Little Lemon"/>
            </div>
        </section>

    </div>
    </>
);
}

export default Main;