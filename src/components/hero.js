import * as React from "react";
import Header from "./header";
import "./hero.css";

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">
                <Header />
                <div className="container">Hero Section</div>
            </div>
        </section>
    );
};

export default HeroSection;
