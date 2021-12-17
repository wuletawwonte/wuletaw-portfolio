import * as React from "react";
import Header from "./header";
import "./hero.css";
import MyAvatar from "../images/me.png";

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">
                <Header />
                <div className="hero-content">
                    <div className="moto">
                        <h2>Looking for a developer?</h2>
                        <h1>&#x275C;I'm a full stack web developer.&#10076;</h1>
                        <div className="hire-btn-group">
                            <button className="hire-me-btn">Hire me</button>
                            <button className="download-cv-btn">
                                Download CV &#10070;
                            </button>
                        </div>
                    </div>
                    <div className="my-picture">
                        <img src={MyAvatar} alt="Wuletaw Wonte" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
