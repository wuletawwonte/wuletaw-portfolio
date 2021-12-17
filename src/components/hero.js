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
                        <h2>I'm a web developer</h2>
                        <h1>
                            A person who trusts nobody is the kind of
                            person nobody trusts.                            
                        </h1>
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
