import * as React from "react";
import "./index.css";
import HeroSection from "../components/hero";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Portfolio from "../components/portfolio";
import { Helmet } from "react-helmet";

const IndexPage = () => {
    return (
        <div className="main-content">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wuletaw Wonte</title>
            </Helmet>
            {/* Hero section  */}
            <HeroSection />
            {/* Articles section */}
            <Articles />
            {/* Portfolio section */}
            <Portfolio />
            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default IndexPage;
