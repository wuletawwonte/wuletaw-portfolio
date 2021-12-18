import * as React from "react";
import "./footer.css";
import Twitter from "../images/social/twitter.svg";
import LinkedIn from "../images/social/linkedin.svg";
import Github from "../images/social/github.svg";

const Footer = () => {
    return (
        <section>
            <div className="footer-container">
                <div className="footer-content">
                    <h2>Lets get in touch!</h2>
                    <div className="social-icons">
                        <button onClick="#"><img src={Twitter}/></button>
                        <button onClick="#"><img src={LinkedIn}/></button>
                        <button onClick="#"><img src={Github}/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
