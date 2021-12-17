import { Link } from "gatsby";
import * as React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container"> 
                <Link to="/" className="logo-text">&lt;Wuletaw /&gt;</Link>
            </div>
        </div>
    );
};

export default Header;
