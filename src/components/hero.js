import * as React from "react";
import Header from "./header";
import "./hero.css";
import MyAvatar from "../images/icon.png";

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">
                <Header />
                <div className="hero-content">
                    <div className="moto">
                        <h1>
                            A person who trusts nobody is apt to be the kind of
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
