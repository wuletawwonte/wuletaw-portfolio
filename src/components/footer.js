import * as React from "react";
import "./footer.css";
import Twitter from "../images/social/twitter.svg";
import LinkedIn from "../images/social/linkedin.svg";
import Github from "../images/social/github.svg";
import Telegram from "../images/social/telegram.svg";

const Footer = () => {
    return (
        <section>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-upper">
                        <h2>Lets get in touch!</h2>
                        <div className="social-icons">
                            <button onClick="#">
                                <img src={Twitter} />
                            </button>
                            <button onClick="#">
                                <img src={LinkedIn} />
                            </button>
                            <button onClick="#">
                                <img src={Github} />
                            </button>
                            <button onClick="#">
                                <img src={Telegram} />
                            </button>
                        </div>
                    </div>
                    <span>
                        Designed and developed by: <b>Wuletaw Wonte</b>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Footer;
