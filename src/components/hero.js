import * as React from "react";
import Header from "./header";
import "./hero.css";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">
                <Header />
                <div className="hero-content">
                    <div className="moto">
                        <h2>
                            Hi, I&#x275C;m <span>Wuletaw Wonte</span>.
                        </h2>
                        <h1>
                            I&#x275C;m a full stack web and mobile app developer
                            based in Arba Minch.
                        </h1>
                        <div className="hire-btn-group">
                            <button className="hire-me-btn">Hire me</button>
                            <button className="download-cv-btn">
                                Download CV &#10070;
                            </button>
                        </div>
                    </div>
                        <StaticImage
                            src="../images/me.png"
                            alt="Wuletaw Wonte"
                            className="my-picture-container"
                            imgClassName="my-picture"
                            as="div"
                            loading="lazy"
                            objectFit="contain"
                        />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
