import * as React from "react";
import "./index.css";
import HeroSection from "../components/hero";
import Articles from "../components/articles";

const IndexPage = () => {
    return (
        <div className="main-content">
            {/* Hero section  */}
            <HeroSection />
            {/* Articles section */}
            <Articles />
        </div>
    );
};

export default IndexPage;
