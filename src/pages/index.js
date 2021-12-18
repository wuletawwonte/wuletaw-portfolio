import * as React from "react";
import "./index.css";
import HeroSection from "../components/hero";
import Articles from "../components/articles";
import Footer from "../components/footer";

const IndexPage = () => {
    return (
        <div className="main-content">
            {/* Hero section  */}
            <HeroSection />
            {/* Articles section */}
            <Articles />
            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default IndexPage;
